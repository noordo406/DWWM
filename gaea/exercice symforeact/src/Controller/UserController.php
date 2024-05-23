<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\PossessionRepository;
use App\Repository\UserRepository;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class UserController extends AbstractController
{

    #[Route('/', name: 'app_homepage')]
    public function homepage(UserRepository $userRepository, UserService $userService, Request $request, EntityManagerInterface $entityManager): Response
    {
        $newUser = new User();
        $form = $this->createForm(UserType::class, $newUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Utilisateur ajouté avec succès');
            return $this->redirectToRoute('app_homepage');
         }

        $users = $userRepository->findBy([], ['id' => 'ASC']);
        foreach ($users as $user) {
            $user->setAge($userService->getAgeFromDOB($user->getBirthDate())->y);
        }
        return $this->render('users/homepage.html.twig', [
            'title' => 'Utilisateurs',
            'users' => $users,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/user/{slug}', name: 'app_possession')]
    public function possession(UserRepository $userRepository, UserService $userService, string $slug): Response
    {
        $user = $userRepository->findOneBy(['id' => $slug]);
        if ($user) {
            $possessions = $user->getPossessions();
            $user->setAge($userService->getAgeFromDOB($user->getBirthDate())->y);
        } else {
            $this->addFlash('error', "L'utilisateur n'existe pas");
            return $this->redirectToRoute('app_homepage');
        }
        return $this->render('users/possessions.html.twig', [
            'title' => 'Possessions',
            'user' => $user,
            'possessions' => $possessions,
        ]);
    }

    #[Route('/ajouter', name: 'app_ajouter')]
    public function ajouter(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $entityManager->persist($user);
            $entityManager->flush();
            $this->addFlash('success', 'Utilisateur ajouté avec succès');
            return $this->redirectToRoute('app_homepage');
         }
        
        return $this->render('users/ajouterUser.html.twig', [
            'form' => $form->createView(),
        ]
        );
    }

    #[Route('/supprimer/{slug}', name: 'app_supprimer')]
    public function supprimer(UserRepository $userRepository, EntityManagerInterface $entityManager, string $slug): Response
    {
        $user = $userRepository->findOneBy(['id' => $slug]);
        $entityManager->remove($user);
        $entityManager->flush();
        $this->addFlash('success', 'Utilisateur supprimé avec succès');
        return $this->redirectToRoute('app_homepage');
    }
}

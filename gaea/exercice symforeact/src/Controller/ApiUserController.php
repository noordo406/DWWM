<?php

namespace App\Controller;

use App\Repository\UserRepository;
use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ApiUserController extends AbstractController
{
    // retourner liste users
    #[Route('/api/users', name: 'api_get_users')]
    public function getUsers(UserRepository $userRepository, UserService $userService, SerializerInterface $serializer): Response
    {
        $users = $userRepository->findBy([], ['id' => 'ASC']);

        foreach ($users as $user) {
            $user->setAge($userService->getAgeFromDOB($user->getBirthDate())->y);
        }
        
        $data_users = $serializer->serialize($users, 'json', ['groups' => ['list_user']]);
        
        return new JsonResponse($data_users, Response::HTTP_OK, ['accept' => 'json']);
    }
}

import { useState } from "react"
import Modal from 'react-modal'

const LISTE = [
    {
        "id": 1,
        "nom": "un",
        "prenom": "a"
    },
    {
        "id": 2,
        "nom": "deux",
        "prenom": "b"
    },
    {
        "id": 3,
        "nom": "trois",
        "prenom": "c"
    },
]

function App() {
    const [users, setUsers] = useState(LISTE)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [formNom, setNom] = useState("")
    const [formPrenom, setPrenom] = useState("")

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }
    function supprimerUser(id) {
        let filteredUsers = users.filter((u) => u.id != id)
        setUsers(filteredUsers)
    }
    function ajouterUser(event) {
        event.preventDefault()
        let filteredUsers = users.concat(
            {
                "id": users[users.length - 1]["id"] + 1,
                "nom": formNom,
                "prenom": formPrenom
            }
        )
        setUsers(filteredUsers)
        clearForm()
        closeModal()
    }
    function clearForm() {
        setNom("")
        setPrenom("")
    }


    return <div>
        <Tableau users={users} handleDelete={supprimerUser} />
        <button onClick={openModal}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <h1>Ajouter User</h1>
            <form onSubmit={ajouterUser}>
                <label>Nom:
                    <input
                        type="text"
                        required
                        value={formNom}
                        onChange={(e) => setNom(e.target.value)}
                    />
                </label>
                <br />
                <label>Prenom:
                    <input
                        type="text"
                        required
                        value={formPrenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>
            <button onClick={closeModal}>Close</button>
        </Modal>
    </div>

}

function Tableau({ users, handleDelete }) {
    return <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Nom</td>
                <td>Prenom</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            {users.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Supprimer</button></td>
                </tr>
            ))}
        </tbody>
    </table>

}


export default App
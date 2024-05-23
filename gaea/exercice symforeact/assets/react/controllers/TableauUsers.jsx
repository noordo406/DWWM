import React, { useState } from 'react';

export default function (props) {
    const [users, setUsers] = useState(JSON.parse(props.users))

    return <>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>E-mail</th>
                <th>Adresse</th>
                <th>Téléphone</th>
                <th>Age</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {users.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.adresse}</td>
                    <td>{item.tel}</td>
                    <td>{item.age} ans</td>
                    <td><a href={`user/${item.id}`}><button className="btn btn-primary">Détails</button></a>
                        <a href={`/supprimer/${item.id}`}><button className='btn btn-danger'>Supprimer</button></a></td>
                    {/* <td><button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Supprimer</button></td> */}
                </tr>
            ))}
        </tbody>
    </>
}



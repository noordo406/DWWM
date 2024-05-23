import React, { useState } from 'react';

export default function (props) {
    const [user, setUser] = useState(JSON.parse(props.user))

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
            </tr>
        </thead>
        <tbody>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                <td>{user.email}</td>
                <td>{user.adresse}</td>
                <td>{user.tel}</td>
                <td>{user.age} ans</td>
            </tr>
        </tbody>
    </>
}



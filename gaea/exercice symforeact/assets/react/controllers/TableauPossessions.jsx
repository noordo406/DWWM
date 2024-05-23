import React, { useState } from 'react';

export default function (props) {
    const [possessions, setPossessions] = useState(JSON.parse(props.possessions))

    return <>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Valeur</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {possessions.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.valeur}</td>
                    <td>{item.type}</td>
                </tr>
            ))}
        </tbody>
    </>
}



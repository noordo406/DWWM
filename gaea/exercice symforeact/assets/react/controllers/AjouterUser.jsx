import React, { useState } from "react";
import Modal from "react-modal";

export default function (props) {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }
    function closeModal() {
        setIsOpen(false)
    }

    return <>
        <button onClick={openModal} className='btn btn-primary'>Ajouter Utilisateur</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
            <h1>Ajouter User</h1>
            <div dangerouslySetInnerHTML={{ __html: props.form }}></div>
            <button onClick={closeModal}>Close</button>
        </Modal>
    </>
}
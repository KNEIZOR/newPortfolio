import React from "react";
import jobs from "../myProjects/jobs";

function Modal({ id, closeModal }) {
    const job = jobs.filter((job) => job.id === id);

    return (
        <div onClick={(e) => closeModal(e.target)} className="modal__wrapper">
            <div className="modal">
                <div className="modal-img">
                    <img src={job[0].img} alt="" />
                </div>
                <a href={job[0].link} target="_blank" rel="noopener noreferrer">
                    <div className="modal-link">{job[0].link}</div>
                </a>
            </div>
        </div>
    );
}

export default Modal;

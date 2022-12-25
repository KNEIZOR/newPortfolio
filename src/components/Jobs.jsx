import React, { useState } from "react";
import jobs from "../myProjects/jobs";
import "../style/modal.scss";
import Modal from "./Modal";
import "../style/job.scss"

function Jobs() {
    const [isModal, setIsModal] = useState(false);
    const [id, setId] = useState(1)

    function openModal(id) {
        setIsModal(true);
        setId(id)
    }

    function closeModal(target) {
        let modal = target.closest(".modal")

        if(target === modal) {
            setIsModal(false)
        }
    }

    return (
        <>
            {!isModal ? "" : <Modal id={id} closeModal={closeModal}/>}
            <div className="jobs__wrapper">
                <div className="jobs">
                    {jobs.slice(0, 5).map((job, index) => (
                        <div
                            key={index}
                            className="job"
                            onClick={() => openModal(job.id)}
                        >
                            <div className="job-content">
                                <button className="job-button">
                                    Посмотреть проект
                                </button>
                                <img
                                    src={job.logo}
                                    alt="logo"
                                    className="job-logo"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Jobs;

import React, { useState } from "react";
import Modal from "../Modal";
import jobs from "../../myProjects/jobs";
import "./style/jobPage.scss"

function WorkPage() {
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

    return(
        <>
        {!isModal ? "" : <Modal id={id} closeModal={closeModal}/>}
            <div className="jobs__wrapper-page">
                <div className="jobs-page">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="job-page"
                            onClick={() => openModal(job.id)}
                        >
                            <div className="job-content-page">
                                <button className="job-button">
                                    Посмотреть проект
                                </button>
                                <img
                                    src={job.logo}
                                    alt="logo"
                                    className="job-logo-page"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WorkPage
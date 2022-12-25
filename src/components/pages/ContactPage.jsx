import React, { useState } from "react";
import "./style/contactPage.scss";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../..";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import swal from "sweetalert";

function ContactPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    async function addMessage(e) {
        e.preventDefault();

        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            subject: subject,
            message: message,
        });

        swal(
            "Ваше сообщение было успешно отправлено",
            "Скоро я свяжусь с вами",
            "success"
        );

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <>
            <div className="contact__wrapper-page">
                <div className="tags">
                    <span className="tag">{"<html>"}</span>
                    <span className="tag margin-left">{"<body>"}</span>
                </div>
                <div className="contact-page">
                    <div className="contact-form-page">
                        <div className="contact-header-page">
                            <h2>Связаться со мной</h2>
                        </div>
                        <form>
                            <div className="form__wrapper-page">
                                <div className="form-inputs-page">
                                    <div className="input-top-page">
                                        <Input
                                            type="text"
                                            placeholder="Имя"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Заголовок"
                                        value={subject}
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                    />
                                    <textarea
                                        type="text"
                                        placeholder="Сообщение"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-btn">
                                    <Button onClick={(e) => addMessage(e)}>
                                        Отправить
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="contact-map-page">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380134.2535631057!2d42.42500510119244!3d45.366637362202546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f8d3379098b7b9%3A0xe288fc0ab50cbcc9!2z0KHQstC10YLQu9C-0LPRgNCw0LQsINCh0YLQsNCy0YDQvtC_0L7Qu9GM0YHQutC40Lkg0LrRgNCw0Lk!5e0!3m2!1sru!2sru!4v1671383711856!5m2!1sru!2sru"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;

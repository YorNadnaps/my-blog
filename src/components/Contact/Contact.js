import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    const [name, setName ] = React.useState();
    const [email, setEmail] = React.useState();
    const [message, setMessage] = React.useState();    

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles.contact}>
            <div className={styles.description}>
                <div className={styles.image}></div>
                <div className={styles.touch}>Contact us</div>
            </div>
            <div className={styles.form}>
                <form className={styles.box} onSubmit={onSubmit}>
                    <div className={styles.name}>
                        <label htmlFor='name'>Name<b>*</b></label>
                        <input type='text' id='name' />
                    </div>
                    <div className={styles.email}>
                        <label htmlFor='email'>Email<b>*</b></label>
                        <input type='email' id='email' />
                    </div>
                    <div className={styles.message}>
                        <label htmlFor='message'>Message<b>*</b></label>
                        <textarea ></textarea>
                    </div>
                    <input type='submit' />
                </form>
            </div>
        </div>
    );
};

export default Contact;
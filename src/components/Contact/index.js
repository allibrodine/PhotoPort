import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    //Hook to manage form data...clear the forms by setting initial state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    
    const [errorMessage, setErrorMessage] = useState('');

    //destructure the formState object into its named properties
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(formState);
        }


    //sync internal state of the component formState with the user input from the DOM
    function handleChange(e) {
        //validate e-mail input
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        
        //only updates state if there's no error message
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }

        //console.log('errorMessage', errorMessage);
    }
    //console.log(formState);

    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit= { handleSubmit }>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={ name } onBlur={ handleChange } />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={ email } onBlur={ handleChange } />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={ message } onBlur={ handleChange } />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;
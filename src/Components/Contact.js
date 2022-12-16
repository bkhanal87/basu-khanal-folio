import React from "react";

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Contact Me</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Name:
                    </label>
                    <input />
                </div>
                <div>
                    <label>
                        Email:
                    </label>
                    <input />
                </div>
                <div>
                    <label>
                        Message:
                    </label>
                    <textarea />
                </div>
                <button>
                    {formStatus}
                </button>
            </form>
        </div>
    )
}

export default Contact;

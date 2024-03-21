import { useState } from "react";

const StateFulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, phone);
    }

    const nameChange = e => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const emailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const phoneChange = e => {
        setPhone(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameChange} type="text" name="name" />
                <br />
                <input onChange={emailChange} type="email" name="email" />
                <br />
                <input onChange={phoneChange} type="number" name="phone" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default StateFulForm;
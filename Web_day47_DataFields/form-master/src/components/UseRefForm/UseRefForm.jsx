import { useEffect, useRef } from "react";

const UseRefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, phoneRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={phoneRef} type="number" name="phone" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UseRefForm;
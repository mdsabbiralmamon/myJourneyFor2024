import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('rojoni');

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;
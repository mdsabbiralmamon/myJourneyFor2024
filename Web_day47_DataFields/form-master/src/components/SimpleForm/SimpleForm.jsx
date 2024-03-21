const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
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

export default SimpleForm;
import { useState } from "react";

const AddUser = (props) => {

    const [username, setUsername] = useState("");
    const [userage, setUserage] = useState("");

    function addUser(event) {
        event.preventDefault();
        const name = username;
        const age = userage;
        event.target.name.value = "";
        event.target.age.value = "";
        if (name.trim().length === 0 || age.trim().length === 0) {
            props.onError(true, 'Please enter valid name and age (Non-empty value)');
            return;
        } else if(age < 0) {
            props.onError(true, 'Please enter valid age (Non-negative value)');
            return;
        } else {
            props.onAddUser(username, userage);
            setUsername("");
            setUserage("");
        }
    }

    function nameChangeHandler(event) {
        setUsername(() => {
            return event.target.value;
        })
        console.log(username);
    }

    function ageChangeHandler(event) {
        setUserage(() => {
            return event.target.value;
        })
        console.log(userage);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <form onSubmit={addUser}>
                <label>Username</label><br />
                <input type="text" name="name" id="name" onChange={nameChangeHandler} /><br />
                <label>Age</label><br />
                <input type="number" name="age" id="age" onChange={ageChangeHandler} /><br />
                <button type="submit">Add User</button><br />
            </form>
        </div>
    );
}

export default AddUser;
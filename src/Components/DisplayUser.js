const DisplayUser = (props) => {
    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <ul style={{ listStyleType: "none" }} id="display">
                {
                    props.users.map((user) => {
                        return <li id={user.id}>{user.name} ({user.age} years old)</li>
                    })
                }
            </ul>
        </div>
    );
}

export default DisplayUser;
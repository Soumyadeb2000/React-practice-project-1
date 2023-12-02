const ErrorBox = (props) => {

    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }} id="myModal" className="modal">
            <div className="modal-content">
                <h3>Error Occurred</h3>
                <p>{props.errorData.errorMessage}</p>
                <button onClick={props.hideErrorBox}>Okay</button>
            </div>
        </div>
    );
}

export default ErrorBox;
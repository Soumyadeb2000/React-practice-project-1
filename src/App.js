import React from 'react';
import AddUser from './Components/AddUser'
import DisplayUser from './Components/DisplayUser';
import ErrorBox from './Components/ErrorBox';
import { useState } from 'react';

function App() {
  let [users, setUsers] = useState([]);
  let [errorStatus, setErrorStatus] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");

  const onAddUserHandler = (name, age) => {
    setUsers((prev) => {
      return [...prev, { id: Math.random(), name, age }];
    })
    setErrorMessage("");
    setErrorStatus(false);
  }

  const onErrorHandler = (status,message) => {
    setErrorStatus(status);
    setErrorMessage(message);
  }
 
  const hideErrorBox = () => {
    setErrorStatus(false);
  }
  console.log(errorStatus);
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} onError={onErrorHandler}/>
      <DisplayUser users={users} />
      {errorStatus && <ErrorBox errorData={{errorMessage}} hideErrorBox = {hideErrorBox}/>}
    </div>
  );
}

export default App;

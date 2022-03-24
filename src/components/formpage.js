import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/userSlice";

const Formik = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getUsers({ name: username, password: password }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={username}
          name="name"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          name="pwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formik;

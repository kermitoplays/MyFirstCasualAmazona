import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault(); //will not refresh
    if (password !== confirmPassword) {
      alert("Password Doen Not Match!");
    } else {
      dispatch(register(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="row">
          <h1>Create Your Account Now</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox varriant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email"> Email Address:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword"> Confirm Password: </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Signup
          </button>
        </div>
        <div>
          <label />
          <div>
            Already Have an Account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Create Your Account Right now</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

import { useState } from "react";
import { v4 } from "uuid";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && confirm) {
      const user = {
        id: v4(),
        firstName,
        lastName,
        email,
        password,
        confirm,
      };
      console.log("USER", user);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // height: "300px",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {firstName && firstName.length < 2 && (
        <p style={{ color: "red" }}>
          First name must be at least 2 characters...
        </p>
      )}
      <label htmlFor="lastName">Last Name: </label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {lastName && lastName.length < 2 && (
        <p style={{ color: "red" }}>
          Last name must be at least 2 characters...
        </p>
      )}
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {email && email.length < 2 && (
        <p style={{ color: "red" }}>Must be a valid email...</p>
      )}
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && password.length < 8 && (
        <p style={{ color: "red" }}>
          Password must be at least 8 characters long...
        </p>
      )}
      <label htmlFor="confirm">Confirm Password: </label>
      <input
        type="password"
        id="confirm"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      {confirm && confirm !== password && (
        <p style={{ color: "red" }}>Passwords must match...</p>
      )}
      <br />
      <input type="submit" />

      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <p>Email: {email}</p>
      <p>Password: password</p>
      <p>Confirm Password: password</p>
    </form>
  );
};

export default UserForm;

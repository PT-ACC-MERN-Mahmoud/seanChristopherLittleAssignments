import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.first_name}, {user.last_name}
          </h2>
          <p>{user.email}</p>
          <img src={user.avatar} alt="avatar" />
        </div>
      ))}
    </div>
  );
}

export default App;

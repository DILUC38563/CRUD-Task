import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [userPic, setuserpic] = useState("");
  const [userID, setUserID] = useState(null);

  // CRUD :-
  //  C - Create - POST
  //  R - Read - GET
  //  U - Update - PUT
  //  D - Delete - Delete

  function getUsers() {
    fetch("https://612dce6ce579e1001791ddba.mockapi.io/users", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((users) => setUsers(users));
  }

  function deleteuser(id) {
    fetch(`https://612dce6ce579e1001791ddba.mockapi.io/users/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((user) => console.log(user))
      .then(() => getUsers);
  }

  function selectUser(id) {
    setUsername(users[id - 1].name);
    setuserpic(users[id - 1].pic);
    setUserID(users[id - 1].id);
  }

  function updateUser() {
    // let edit = [username,userPic,userID]
    fetch(`https://612dce6ce579e1001791ddba.mockapi.io/users/${userID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
       body: JSON.stringify({ name: username, pic: userPic, id: userID }),
      // body: JSON.stringify(edit), 
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then(() => getUsers());
  }

  function createUser() {
    console.log("Creating... user");
    fetch("https://612dce6ce579e1001791ddba.mockapi.io/users", {
      method: "POSt",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, pic: userPic }),
    })
      .then((data) => data.json())
      .then(() => getUsers());
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="add-user-form">
        <TextField
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          label="Name"
          variant="outlined"
        />

        <TextField
          value={userPic}
          onChange={(event) => setuserpic(event.target.value)}
          type="text"
          label="Profile Pic"
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => createUser()}
        >
          Add User
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => updateUser()}
        >
          Update User
        </Button>

        <div className="user-list">
          {users.map((user) => (
            <User
              name={user.name}
              pic={user.pic}
              id={user.id}
              deleteuser={deleteuser}
              updateUser={updateUser}
              selectUser={selectUser}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function User({ name, pic, id, deleteuser, selectUser }) {
  const history = useHistory();

  return (
    // onClick={() => history.push("/users/" + id)}
    <Card className="user-card" >
      <img
        style={{
          borderRadius: "50%",
          height: "75px",
          width: "75px",
          objectFit: "cover",
        }}
        src={pic}
        alt="profile pic"
      ></img>
      <h2>{name}</h2>
      <Button
        className="button"
        startIcon={<DeleteIcon />}
        onClick={() => deleteuser(id)}
        variant="contained"
        color="primary"
      >
        Delete
      </Button>
      <Button
        className="button"
        startIcon={<EditIcon />}
        onClick={() => selectUser(id)}
        variant="contained"
        color="primary"
      >
        Edit
      </Button>
    </Card>
  );
}

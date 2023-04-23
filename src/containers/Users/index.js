import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import {
  ContainerItens,
  Container,
  H1,
  Image,
  Button,
  User,
  Seta
} from "./styles.js";
import Avatar from "../../assets/people2.png";
import Arrow from "../../assets/seta.png";
import Trash from "../../assets/trash.png";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  console.log(history)

  function goBackPage() {
    history.push("/")
  }




  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3001/users");
      setUsers(newUser);
    }
    fetchUsers();
  }, []);

  async function deleteUser(id) {
    await axios.delete(`http://localhost:3001/users/${id}`)

    const newUsers = users.filter((user) => user.id !== id);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="people1" src={Avatar}></Image>
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age} Anos</p>{" "}
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Trash" />
              </button>
            </User>
          ))}
        </ul>


        <Button onClick={goBackPage}>
          <Seta alt="seta" src={Arrow} /> Voltar

        </Button>


      </ContainerItens>
    </Container>
  );
}

export default Users;


import React, { useState, useRef} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";

import axios from "axios";
import {
  ContainerItens,
  Input,
  Container,
  H1,
  Image,
  InputLabel,
  Button,
  
} from "./styles.js";
import People from "../../assets/people1.png";
import Arrow from "../../assets/seta.png";




function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);

    history.push("/users")


  }



  

  return (
    <Container>
      <Image alt="people1" src={People}></Image>
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        

        

        
      </ContainerItens>
    </Container>
  );
}

export default App;

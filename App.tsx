import React from "react";
import { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import firebase from "./src/service/firebaseConnection";

// Desativar avisos de yarn
console.disableYellowBox = true;

interface Props {
  key: any;
  email: any;
  name: any;
}

export default function App() {
  const [getAllDados, setGetAllDados] = useState<any[]>([]);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>("");

  async function pegaNome() {
    {
      /*Esse cara aqui se chama Olheiro, ele e responsavel por pegar em tempo real 
      toda alteracao que acontecer no banco de dados. E recomendavel que nao utilize
      com excesso, para nao comprometer a performace

      --> Essa reqwuisicao do fire base esta pegando um no do meu banco de dados
      */
    }
    /* await firebase
      .database()
      .ref("nome")
      .on("value", (snapshot) => {
        setNome(snapshot.val());
      }); */

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca
      */
    }
    /* await firebase
      .database()
      .ref("nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      }); */

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca

      --> Essa requisicao esta pegando o dado em um diretorio passado pelo ref
      */
    }
    /* await firebase
      .database()
      .ref("usuarios/1/nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      }); */

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca

      --> Essa requisicao esta pegando o index 1 inteiro
      */
    }
    /* await firebase
      .database()
      .ref("usuarios/1")
      .once("value", (snapshot) => {
        setNome(snapshot.val().idade);
      }); */

    // Para criar um nó
    /* await firebase.database().ref("tipo").set("Marcelo bobo"); */

    // Para Escluir um nó
    /* await firebase.database().ref("tipo").remove(); */

    // Usado para criar um chield no banco Firebase.
    /* await firebase.database().ref("usuarios").child(3).set({
      nome: "igao da massa",
      idade: 24,
    }); */

    // Usado para atulizar um item dentro de um chield
    /* await firebase.database().ref("usuarios").child(3).update({
      nome: "Igao não e bolado",
    }); */

    // Essa função é responsavel por pegar todos os itens de um chield,
    // sendo no caso esse o usuario. ISSO E UM OLHEIRO, ENTAO ATUALIZA NA HORA
    /* await firebase
      .database()
      .ref("usuarios")
      .on("value", (snapshot) => {
        setGetAllDados([]);
        snapshot.forEach((chieldItem) => {
          const dados = {
            key: chieldItem.key,
            name: chieldItem.val().nome,
            email: chieldItem.val().email,
          };

          setGetAllDados((oldArray) => [...oldArray, dados]);
        });
      }); */
  }

  async function cadastrar() {
    /* if (nome !== "" && email !== "") {
      // Esse Comando serve para gerar uma chave aleatória e cadastrar o
      // usuario dentro do bando de dados.
      const usuarios = await firebase.database().ref("usuarios");
      const chave: any = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        email: email,
      });
    } */
    //Esse códgio e responsavel por fazer o usuarios cadastrar seus dados
    // atraves de uma autenticação feita pelo firebase, esse no caso seria o
    // de email e senha.
    /* await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response: any) => {
        Alert.alert("Usuario criado com sucesso", response);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/weak-password") {
          alert("Sua senha deve ter pelomenos 6 caracteres");
        } else {
          if (errorCode === "auth/invalid-email") {
            alert("Seu email é invalido");
          } else {
            alert(errorMessage);
          }
        }
      }); */
    // Esse codigo é feito para o usuario fazr login de acordo com o email
    // cadastrado
    /* await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert("Login feito com sucesso " + response.user?.email);
      })
      .catch((error) => {
        alert("Usuario não encontrado");
      }); */
  }

  useEffect(() => {
    pegaNome();
    console.log(getAllDados);
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 2,
          width: "100%",
          height: 40,
          marginBottom: 20,
        }}
        placeholder="email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          borderColor: "black",
          borderWidth: 2,
          width: "100%",
          height: 40,
        }}
        placeholder="nome"
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "red",
          height: 60,
          width: 120,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={() => cadastrar()}
      >
        <Text style={{ color: "#FFF", fontWeight: "bold" }}>Enviar dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

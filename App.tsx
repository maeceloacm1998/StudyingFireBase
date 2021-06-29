import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "./src/service/firebaseConnection";

// Desativar avisos de yarn
console.disableYellowBox = true;

export default function App() {
  const [nome, setNome] = useState("carregando...");

  async function pegaNome() {
    {
      /*Esse cara aqui se chama Olheiro, ele e responsavel por pegar em tempo real 
      toda alteracao que acontecer no banco de dados. E recomendavel que nao utilize
      com excesso, para nao comprometer a performace

      --> Essa reqwuisicao do fire base esta pegando um no do meu banco de dados
      */
    }
    await firebase
      .database()
      .ref("nome")
      .on("value", (snapshot) => {
        setNome(snapshot.val());
      });

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca
      */
    }
    await firebase
      .database()
      .ref("nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      });

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca

      --> Essa requisicao esta pegando o dado em um diretorio passado pelo ref
      */
    }
    await firebase
      .database()
      .ref("usuarios/1/nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      });

    {
      /*Esse, diferente do olheiro, pega apenas uma vez o valor no banco de dados,
      nao atualizando de acordo com a mudanca

      --> Essa requisicao esta pegando o index 1 inteiro
      */
    }
    await firebase
      .database()
      .ref("usuarios/1")
      .once("value", (snapshot) => {
        setNome(snapshot.val().idade);
      });
  }

  useEffect(() => {
    pegaNome();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
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

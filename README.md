# FireBase conceitos e utilização

## Comandos
### - Utilizando database

Usando um olheiro para pegar em tempo real todo dado modificado
```
await firebase
      .database()
      .ref("nome")
      .on("value", (snapshot) => {
        setNome(snapshot.val());
      });
```

Pegando algum item dentro do banco do Firebase, contudo ele nao atualiza em tempo real
```
await firebase
      .database()
      .ref("nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      });
```

Pegando um item expecífico dentro do banco usando o diretório, colocando dentro do "ref"
```
topo
│
└─ 
   │
   ├─ 1
   │   └─ nome: "Marcelo"
   │   └─ idade: 22 
   │
   ├─ 2
   │   └─ nome: "Tigas"
   │   └─ idade: 26   


await firebase
      .database()
      .ref("usuarios/1/nome")
      .once("value", (snapshot) => {
        setNome(snapshot.val());
      });
```

Pegando um objeto que contem mais de um valor dentro, colocando o diretorio dentro do "ref"
```
topo
│
└─ 
   │
   ├─ 1
   │   └─ nome: "Marcelo"
   │   └─ idade: 22 
   │
   ├─ 2
   │   └─ nome: "Tigas"
   │   └─ idade: 26  
   

await firebase
      .database()
      .ref("usuarios/1")
      .once("value", (snapshot) => {
        setNome(snapshot.val().idade);
      });
```

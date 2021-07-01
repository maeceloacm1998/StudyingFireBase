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

## Métodos Insert, update e delete
Esse métodos funcionam igual a um banco noSQL, sendo o inset o POST, update o PUT e delete o DELETE. Vale ressaltar que o firebase 
mostrar como usar isso de uma forma bem mais fácil.

- Insert
```
await firebase.database().ref("tipo").set("Marcelo bobo");
```
- Delete
```
await firebase.database().ref("tipo").remove();
```
- Update
```
 await firebase.database().ref("usuarios").child(3).update({
      nome: "Igao não e bolado",
    });
```

## Gerando um Children aleatório (KEY)
É de comum pratica quando está trabalhando com banco de dados SQL e NoSQL a utilização de ID's assim que você cria qualquer item.
O Firebase também tem isso, chamado de "key", em que você cria uma chave usando ``` <comando de usuario.push().key;```( Demostração no código a baixo.
Dessa forma, você consegue ter acesso a essa key posteriormente usando um olheiro e pegando todos os idens de uma ref.

Exemplo:
```
const usuarios = await firebase.database().ref("usuarios");
      const chave: any = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        email: email,
      });
```
## Pegando todos os itens de uma referência usando um olheiro
Exemplo: 
```
await firebase
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
      });
```

## Autenticação para Cadastrar e Login

Para cadastrar um usuário dentro da sua plataforma(app/web) você pode utilizar a autenticação do proprio FireBase, pois com ele
você consegue utilizar outras plataformas para fazer o login, além de conseguir fazer a redefinição de senha, confirmação do email
no emal pessoal do usuário ou até enviar SMS.

O código para fazer cadastro por email e senha:

```
await firebase
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
      });
      
```
      
Para fazer o login com os usuarios cadastrados com email e senha:
      
```
      
      await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        alert("Login feito com sucesso " + response.user?.email);
      })
      .catch((error) => {
        alert("Usuario não encontrado");
      });
      
```

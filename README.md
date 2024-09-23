# Gerenciador de Orçamento Pessoal

## Objetivo

O **Gerenciador de Orçamento Pessoal** é um aplicativo web que permite aos usuários gerenciar suas receitas e despesas de forma fácil e intuitiva. Com ele, você pode adicionar, editar e excluir entradas de receita e despesa, além de visualizar um resumo das suas finanças. O objetivo é ajudar as pessoas a manterem o controle sobre suas finanças pessoais e a tomarem decisões financeiras mais informadas.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Firebase**: Plataforma que fornece serviços como autenticação e banco de dados em tempo real.
- **Firestore**: Um banco de dados NoSQL da Firebase para armazenar dados.
- **React Router**: Biblioteca para gerenciar rotas em aplicações React.
- **CSS**: Para estilização e design responsivo do aplicativo.

## Instalação

Para testar o projeto na sua maquina, siga os passos abaixo:


### 2. Instale as dependências
Certifique-se de ter o Node.js instalado. Em seguida, instale as dependências do projeto com o comando:

> Acesse seu terminal e execute:
 
    ```
    npm install

### 3. Configure o Firebase
Acesse o Firebase Console e crie um novo projeto.
No painel do projeto, clique em "Firestore Database" e crie um banco de dados.
Habilite a autenticação do Google:
Vá para "Authentication" > "Sign-in method".
Ative o provedor "Google".
Copie as configurações do seu projeto (API Key, Auth Domain, etc.) e cole no arquivo firebase.js na pasta src do seu projeto:

#### javascript
    ```
    const firebaseConfig = {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_DOMINIO",
      projectId: "SEU_PROJETO_ID",
      storageBucket: "SEU_BUCKET",
      messagingSenderId: "SEU_SENDER_ID",
      appId: "SEU_APP_ID"
    };

4. Inicie o aplicativo
Após configurar o Firebase, inicie o aplicativo no terminal com o comando:

> Acesse seu terminal e execute:

```
npm run dev


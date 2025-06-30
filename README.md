Projeto RESIDENCIA
Este projeto é uma aplicação web que consiste em um Front-End desenvolvido com React e um Back-End em Node.js com Express. Ele permite a interação com funcionalidades de saudação, listagem e cadastro de usuários.

🛠️ Pré-requisitos
Certifique-se de ter o Node.js e npm instalados em sua máquina.

▶️ Como Executar o Projeto
Para que a aplicação funcione corretamente, você precisará iniciar ambos os servidores (back-end e front-end) em terminais separados.

💻 Front-End (Pasta: Front-End)
Esta é a interface da aplicação, onde o usuário interage.

Navegue até a pasta do front-end no seu terminal:

cd RESIDENCIA/Front-End

Instale as dependências:
Se esta for a primeira vez que você está configurando o projeto ou se as dependências foram removidas:

npm install

Inicie o servidor de desenvolvimento do React:

npm run dev

Você verá uma mensagem no terminal indicando o endereço local onde a aplicação está rodando (geralmente http://localhost:5173). Mantenha este terminal aberto.

Funcionalidades Implementadas no Front-End:
Saudação Dinâmica: A tela inicial exibe uma mensagem de boas-vindas que é carregada dinamicamente da API back-end.

Navegação Contextual:

Da tela de Saudação, é possível ir para "Ver Usuários" ou "Cadastrar Usuário".

Da tela de "Ver Usuários", é possível voltar para a "Saudação" ou ir para "Cadastrar Usuário".

Do formulário de "Cadastrar Usuário", é possível "Voltar para Lista" ou, após um cadastro bem-sucedido, o usuário é redirecionado automaticamente para a lista de usuários.

Listagem de Usuários: Exibe os usuários obtidos da API. Cada item da lista possui botões "Editar" e "Excluir" (sem funcionalidade implementada ainda).

Cadastro de Usuários: Permite adicionar novos usuários ao sistema, enviando os dados para a API.

🖥️ Back-End (Pasta: Api-Crud-Usuarios)
Esta é a API que fornece os dados e funcionalidades para o front-end.

Navegue até a pasta do back-end no seu terminal:

cd RESIDENCIA/Api-Crud-Usuarios

Instale as dependências da API:
Se esta for a primeira vez que você está configurando a API:

npm install

Inicie o servidor da API:

node server.js

Você deverá ver a mensagem: 🚀 Aplicação em execução na porta 5000. Mantenha este terminal aberto e o servidor rodando.

Observação: Esta API armazena os dados de usuários apenas em memória. Isso significa que, se você parar o servidor (Ctrl+C no terminal) e reiniciá-lo, todos os usuários cadastrados anteriormente serão perdidos.

🌐 Como Acessar a Aplicação
Com ambos os servidores (front-end e back-end) rodando, abra seu navegador web e acesse o endereço do front-end:

http://localhost:5173

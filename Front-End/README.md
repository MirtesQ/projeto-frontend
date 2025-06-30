Front-End (RESIDENCIA)Este documento descreve o front-end da aplicação RESIDENCIA, desenvolvido com React. Ele interage com uma API back-end separada para gerenciar usuários.
🛠️ Pré-requisitosCertifique-se de ter o Node.js e npm instalados em sua máquina.
▶️ Como Executar o Front-EndPara que o front-end funcione corretamente, a API back-end deve estar rodando (geralmente em http://localhost:5000).
Navegue até a pasta do front-end no seu terminal:cd RESIDENCIA/Front-End
Instale as dependências:npm install
Inicie o servidor de desenvolvimento do React:npm run dev
Você verá uma mensagem no terminal indicando o endereço local (geralmente http://localhost:5173). 
Mantenha este terminal aberto.
Acesse a Aplicação:Abra seu navegador web e acesse: http://localhost:5173
📋 Funcionalidades PrincipaisSaudação Dinâmica: A tela inicial exibe uma mensagem de boas-vindas obtida da API.
Navegação Contextual:Da Saudação: Ir para "Ver Usuários" ou "Cadastrar Usuário".De "Ver Usuários": Voltar para "Saudação" ou ir para "Cadastrar Usuário".
De "Cadastrar Usuário": Voltar para "Lista" ou, após o cadastro, redireciona para a lista.
Listagem de Usuários: Exibe usuários da API, com botões "Editar" e "Excluir" (sem funcionalidade).
Cadastro de Usuários: Formulário para adicionar novos usuários via API.

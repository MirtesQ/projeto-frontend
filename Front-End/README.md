README.md - Questão 1: Componente Saudacao
Este documento descreve como executar a aplicação React após a implementação do componente Saudacao, que exibe uma mensagem de boas-vindas.

Descrição da Questão
Criação de um componente React funcional chamado Saudacao.jsx.

O componente Saudacao exibe a mensagem "Bem-vindo à aplicação front-end".

O componente Saudacao é importado e utilizado no src/App.jsx.

Como Rodar a Aplicação
Siga os passos abaixo para iniciar o servidor de desenvolvimento e visualizar a aplicação com a Questão 1 implementada.

Navegue até o diretório raiz do projeto:

cd meu-projeto-react

(Assumindo que meu-projeto-react é a pasta onde você configurou o projeto).

Instale as dependências (se ainda não o fez):
Se esta é a primeira vez que você está clonando o repositório ou se as dependências foram removidas, execute:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

Este comando iniciará o servidor de desenvolvimento do Vite. No terminal, você verá uma mensagem indicando o endereço local onde a aplicação está rodando (geralmente http://localhost:5174).

Acesse a aplicação no navegador:
Abra seu navegador web e navegue para o endereço fornecido no terminal (ex: http://localhost:5174).

Você deverá ver a mensagem "Bem-vindo à aplicação front-end" exibida na tela.

Estrutura de Arquivos (Após esta etapa)
meu-projeto-react/
├── src/
│   ├── components/
│   │   └── Saudacao.jsx  <-- Componente criado nesta etapa
│   ├── App.jsx           <-- `App` atualizado para usar `Saudacao`
│   └── ... (outros arquivos do Vite)
├── README.md             <-- Este arquivo
├── package.json
└── ... (outros arquivos de configuração)

Próximos Passos
Agora que a Questão 1 está implementada e funcionando, você pode prosseguir para as próximas questões da atividade.
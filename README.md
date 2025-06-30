Projeto RESIDENCIA: Guia de Execução e Melhorias Futuras
Este documento fornece instruções claras sobre como executar o projeto RESIDENCIA, que integra um Front-End desenvolvido em React e um Back-End em Node.js. Além disso, detalha as próximas etapas e melhorias planejadas para o lado do front-end.
🚀 Como Executar o Projeto
Para que a aplicação funcione corretamente, é essencial que ambos os servidores (back-end e front-end) estejam em execução simultaneamente. Abra dois terminais separados para seguir os passos abaixo.
1. Configuração e Início do Back-End (API Node.js)
O back-end é uma API RESTful que gerencia os dados dos usuários em memória. Isso significa que os dados são temporários e serão perdidos ao reiniciar o servidor.
Navegue até a pasta da API:
cd RESIDENCIA/Api-Crud-Usuarios


Instale as dependências (se ainda não o fez):
npm install


Inicie o servidor da API:
node server.js

Você deverá ver a mensagem: 🚀 Aplicação em execução na porta 5000. Mantenha este terminal aberto e o servidor rodando.
2. Configuração e Início do Front-End (React)
O front-end é a interface do usuário, construída com React, que se comunica com a API para exibir e manipular os dados.
Navegue até a pasta do front-end:
cd RESIDENCIA/Front-End


Instale as dependências (se ainda não o fez):
npm install


Inicie o servidor de desenvolvimento do React:
npm run dev

O terminal indicará o endereço local onde a aplicação está acessível (geralmente http://localhost:5173). Mantenha este terminal aberto.
3. Acesso à Aplicação
Com ambos os servidores em execução, abra seu navegador web e acesse:
http://localhost:5173
📈 Melhorias Futuras para o Front-End
O projeto atual já implementa as funcionalidades básicas de CRUD de usuários. As próximas melhorias visam aprimorar a experiência do usuário, performance e robustez do front-end.
1. Validação de Formulários
Validação em Tempo Real: Implementar validações robustas nos formulários (formato de e-mail, campos obrigatórios) com feedback visual imediato.
Mensagens de Erro Claras: Fornecer mensagens de erro mais descritivas e amigáveis.
2. Melhorias na Experiência do Usuário (UX)
Feedback Visual: Adicionar indicadores de carregamento (spinners) para operações assíncronas.
Notificações Toast: Implementar um sistema de notificações pop-up para confirmar ações ou exibir erros.
Paginação e Busca: Adicionar paginação e um campo de busca para facilitar a navegação em listas grandes.
Ordenação da Tabela: Permitir que a lista de usuários seja ordenada clicando nos cabeçalhos das colunas.
3. Refatoração e Organização do Código
Gerenciamento de Estado: Considerar o uso de uma biblioteca de gerenciamento de estado (ex: Redux, Zustand) para controle centralizado.
Componentização Avançada: Refinar a estrutura dos componentes para maior reutilização.
Estilização: Avaliar a transição para uma solução CSS-in-JS (ex: Styled Components) ou um framework CSS (ex: Tailwind CSS) para escalabilidade.
4. Testes Automatizados
Testes Unitários: Escrever testes para os componentes React e funções utilitárias.
Testes de Integração: Testar a comunicação entre os componentes e a API.
Ao implementar essas melhorias, o front-end se tornará mais completo, robusto e oferecerá uma experiência de usuário superior.

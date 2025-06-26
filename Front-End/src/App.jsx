

import React, { useState } from 'react';
import './App.css';
import Saudacao from './components/Saudacao';
import ListaUsuarios from './components/ListaUsuarios';
import FormularioUsuario from './components/FormularioUsuario';

// Definimos constantes para representar as páginas
const PAGINA_SAUDACAO = 'saudacao';
const PAGINA_LISTA_USUARIOS = 'lista';
const PAGINA_CADASTRO_USUARIO = 'cadastro';

function App() {
  const [currentPage, setCurrentPage] = useState(PAGINA_SAUDACAO);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const goToSaudacao = () => setCurrentPage(PAGINA_SAUDACAO);
  const goToViewUsers = () => setCurrentPage(PAGINA_LISTA_USUARIOS);
  const goToRegisterUser = () => setCurrentPage(PAGINA_CADASTRO_USUARIO);

  const handleUserCadastrado = () => {
    setRefreshTrigger(prev => prev + 1);
    setCurrentPage(PAGINA_LISTA_USUARIOS);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      {currentPage === PAGINA_SAUDACAO && (
        <Saudacao
          goToViewUsers={goToViewUsers}
          goToRegisterUser={goToRegisterUser}
        />
      )}

      {currentPage === PAGINA_LISTA_USUARIOS && (
        <ListaUsuarios
          refreshKey={refreshTrigger}
          goToSaudacao={goToSaudacao}
          goToRegisterUser={goToRegisterUser}
        />
      )}

      {currentPage === PAGINA_CADASTRO_USUARIO && (
        <FormularioUsuario
          onUsuarioCadastrado={handleUserCadastrado}
          goToViewUsers={goToViewUsers}
        />
      )}
    </div>
  );
}

export default App;
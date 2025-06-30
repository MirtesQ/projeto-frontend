import React, { useState } from 'react';
import './App.css';
import Saudacao from './components/Saudacao';
import ListaUsuarios from './components/ListaUsuarios';
import FormularioUsuario from './components/FormularioUsuario';
import FormularioEdicaoUsuario from './components/FormularioEdicaoUsuario';

const PAGINA_SAUDACAO = 'saudacao';
const PAGINA_LISTA_USUARIOS = 'lista';
const PAGINA_CADASTRO_USUARIO = 'cadastro';
const PAGINA_EDICAO_USUARIO = 'edicao';

function App() {
  const [currentPage, setCurrentPage] = useState(PAGINA_SAUDACAO);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [editingUser, setEditingUser] = useState(null);

  const goToSaudacao = () => setCurrentPage(PAGINA_SAUDACAO);
  const goToViewUsers = () => {
    setEditingUser(null);
    setCurrentPage(PAGINA_LISTA_USUARIOS);
  };
  const goToRegisterUser = () => setCurrentPage(PAGINA_CADASTRO_USUARIO);

  const handleUserCadastrado = () => {
    setRefreshTrigger(prev => prev + 1);
    setCurrentPage(PAGINA_LISTA_USUARIOS);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setCurrentPage(PAGINA_EDICAO_USUARIO);
  };

  const handleUserAtualizado = () => {
    setEditingUser(null);
    setRefreshTrigger(prev => prev + 1);
    setCurrentPage(PINA_LISTA_USUARIOS);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setCurrentPage(PAGINA_LISTA_USUARIOS);
  };

  return (
    <div style={{
      maxWidth: '960px',
      margin: '60px auto',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Inter, sans-serif',
      color: '#343a40',
      boxSizing: 'border-box'
    }}>
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
          onEditUser={handleEditUser}
        />
      )}

      {currentPage === PAGINA_CADASTRO_USUARIO && (
        <FormularioUsuario
          onUsuarioCadastrado={handleUserCadastrado}
          goToViewUsers={goToViewUsers}
        />
      )}

      {currentPage === PAGINA_EDICAO_USUARIO && editingUser && (
        <FormularioEdicaoUsuario
          usuario={editingUser}
          onUsuarioAtualizado={handleUserAtualizado}
          onCancelEdit={handleCancelEdit}
        />
      )}
    </div>
  );
}

export default App;

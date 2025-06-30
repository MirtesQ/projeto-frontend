import React from 'react';

const Saudacao = ({ goToViewUsers, goToRegisterUser }) => {
  const mensagemSaudacao = "Bem-vindo à aplicação front-end";

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      marginBottom: '40px',
      border: '1px solid #e0e0e0'
    }}>
      <h1 style={{
        color: '#2c3e50',
        fontSize: '3em', 
        lineHeight: '1.2em', 
        marginBottom: '40px',
        fontWeight: '700',
        textShadow: '2px 2px 4px rgba(0,0,0,0.05)',
        userSelect: 'none',
        cursor: 'default'
      }} contentEditable="false">
        {mensagemSaudacao}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
        <button
          onClick={goToViewUsers}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '18px 35px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1.3em',
            fontWeight: '600',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            flex: 1,
            maxWidth: '220px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
        >
          Ver Usuários
        </button>
        <button
          onClick={goToRegisterUser}
          style={{
            backgroundColor: '#ffc107',
            color: '#343a40',
            padding: '18px 35px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '1.3em',
            fontWeight: '600',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            flex: 1,
            maxWidth: '220px'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0a800'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
        >
          Cadastrar Usuário
        </button>
      </div>
    </div>
  );
};

export default Saudacao;

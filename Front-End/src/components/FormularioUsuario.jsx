import React, { useState } from 'react';
import axios from 'axios';

const FormularioUsuario = ({ onUsuarioCadastrado, goToViewUsers }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMensagem(null);
    setErro(null);
    setCarregando(true);

    try {
      const response = await axios.post('http://localhost:5000/usuarios', { nome, email });
      setMensagem(`Usuário "${response.data.nome}" cadastrado com sucesso! ID: ${response.data.id}`);
      setNome('');
      setEmail('');

      if (onUsuarioCadastrado) {
        onUsuarioCadastrado();
      }

    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      if (error.response) {
        setErro(`Erro ao cadastrar: ${error.response.data.erro || error.response.statusText}`);
      } else if (error.request) {
        setErro('Erro de rede: O servidor não respondeu. Certifique-se de que a API está rodando.');
      } else {
        setErro('Erro desconhecido ao cadastrar usuário.');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div style={{
      border: '1px solid #e9ecef',
      borderRadius: '16px',
      padding: '40px',
      marginTop: '40px',
      backgroundColor: '#ffffff',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        borderBottom: '1px solid #f0f2f5',
        paddingBottom: '20px',
        marginBottom: '30px',
        fontSize: '2.2em',
        fontWeight: '600',
        userSelect: 'none',
        cursor: 'default'
      }} contentEditable="false">
        Cadastrar Novo Usuário
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div>
          <label htmlFor="nome" style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#495057', fontSize: '1.1em', userSelect: 'none', cursor: 'default' }} contentEditable="false">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '1px solid #ced4da',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '1em',
              color: '#343a40',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#80bdff';
              e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(0,123,255,.25)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#ced4da';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', fontWeight: '600', color: '#495057', fontSize: '1.1em', userSelect: 'none', cursor: 'default' }} contentEditable="false">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '1px solid #ced4da',
              borderRadius: '8px',
              boxSizing: 'border-box',
              fontSize: '1em',
              color: '#343a40',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#80bdff';
              e.currentTarget.style.boxShadow = '0 0 0 0.2rem rgba(0,123,255,.25)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#ced4da';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '15px' }}>
          <button
            type="submit"
            disabled={carregando}
            style={{
              backgroundColor: carregando ? '#90a4ae' : '#28a745',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '10px',
              cursor: carregando ? 'not-allowed' : 'pointer',
              fontSize: '1.15em',
              fontWeight: '600',
              flexGrow: 1,
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            onMouseOver={(e) => { if (!carregando) e.currentTarget.style.backgroundColor = '#218838'; }}
            onMouseOut={(e) => { if (!carregando) e.currentTarget.style.backgroundColor = '#28a745'; }}
          >
            {carregando ? 'Cadastrando...' : 'Cadastrar'}
          </button>
          <button
            type="button"
            onClick={goToViewUsers}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '1.15em',
              fontWeight: '600',
              flexGrow: 1,
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
          >
            Voltar para Lista
          </button>
        </div>
      </form>

      {mensagem && (
        <p style={{ color: '#28a745', marginTop: '25px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2em', userSelect: 'none', cursor: 'default' }} contentEditable="false">{mensagem}</p>
      )}
      {erro && (
        <p style={{ color: '#dc3545', marginTop: '25px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2em', userSelect: 'none', cursor: 'default' }} contentEditable="false">{erro}</p>
      )}
    </div>
  );
};

export default FormularioUsuario;

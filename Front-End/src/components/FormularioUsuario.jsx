

import React, { useState } from 'react';
import axios from 'axios';

/**
 * @param {object} props - As propriedades do componente.
 * @param {function} props.onUsuarioCadastrado - Callback a ser chamada após o sucesso do cadastro.
 * @param {function} props.goToViewUsers - Função para navegar de volta à página de lista de usuários. <<<<< Nova prop
 */
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
        onUsuarioCadastrado(); // Esta chamada vai fazer App.jsx redirecionar
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
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginTop: '30px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
        Cadastrar Novo Usuário
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="nome" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}> 
          <button
            type="submit"
            disabled={carregando}
            style={{
              backgroundColor: carregando ? '#a0a0a0' : '#4CAF50',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: carregando ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              flexGrow: 1, 
              transition: 'background-color 0.3s ease'
            }}
          >
            {carregando ? 'Cadastrando...' : 'Cadastrar'}
          </button>
          <button
            type="button" 
            onClick={goToViewUsers}
            style={{
              backgroundColor: '#6c757d', 
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              flexGrow: 1, 
              transition: 'background-color 0.3s ease'
            }}
          >
            Voltar para Lista
          </button>
        </div>
      </form>

      {mensagem && (
        <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>{mensagem}</p>
      )}
      {erro && (
        <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>{erro}</p>
      )}
    </div>
  );
};

export default FormularioUsuario;
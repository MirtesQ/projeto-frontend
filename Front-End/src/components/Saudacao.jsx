

import React, { useEffect, useState } from 'react';
import axios from 'axios';

/**
 * @param {object} props - As propriedades do componente.
 * @param {function} props.goToViewUsers - Função para navegar para a página de lista de usuários.
 * @param {function} props.goToRegisterUser - Função para navegar para a página de cadastro de usuário.
 * @returns {JSX.Element} O elemento JSX que renderiza a mensagem de saudação e os botões.
 */
const Saudacao = ({ goToViewUsers, goToRegisterUser }) => {
  const [mensagemSaudacao, setMensagemSaudacao] = useState('Carregando saudação...');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSaudacao = async () => {
      try {
        const response = await axios.get('http://localhost:5000/saudacao');
        setMensagemSaudacao(response.data.mensagem);
      } catch (err) {
        setError('Erro ao carregar saudação da API.');
        console.error('Erro ao buscar saudação:', err);
        setMensagemSaudacao('Não foi possível carregar a mensagem de boas-vindas.');
      } finally {
        setLoading(false);
      }
    };

    fetchSaudacao();
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>Carregando mensagem de boas-vindas...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center', fontWeight: 'bold' }}>{error}</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '10px', backgroundColor: '#fdfdfd', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '25px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        {mensagemSaudacao}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Botão para ir para a lista de usuários */}
        <button
          onClick={goToViewUsers}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1em',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba (0,0,0,0.1)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          Ver Usuários
        </button>
        {/* Botão para ir para o formulário de cadastro */}
        <button
          onClick={goToRegisterUser}
          style={{
            backgroundColor: '#e67e22',
            color: 'white',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.1em',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
        >
          Cadastrar Usuário
        </button>
      </div>
    </div>
  );
};

export default Saudacao;
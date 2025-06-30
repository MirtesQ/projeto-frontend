    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    const FormularioEdicaoUsuario = ({ usuario, onUsuarioAtualizado, onCancelEdit }) => {
      const [id, setId] = useState('');
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [mensagem, setMensagem] = useState(null);
      const [erro, setErro] = useState(null);
      const [carregando, setCarregando] = useState(false);

      useEffect(() => {
        if (usuario) {
          setId(usuario.id || '');
          setNome(usuario.nome || '');
          setEmail(usuario.email || '');
        }
      }, [usuario]);

      const handleSubmit = async (event) => {
        event.preventDefault();

        setMensagem(null);
        setErro(null);
        setCarregando(true);

        try {
          const response = await axios.put(`http://localhost:5000/usuarios/${id}`, { nome, email });
          setMensagem(`Usuário "${response.data.nome}" atualizado com sucesso!`);

          if (onUsuarioAtualizado) {
            onUsuarioAtualizado();
          }

        } catch (error) {
          console.error('Erro ao atualizar usuário:', error);
          if (error.response) {
            setErro(`Erro ao atualizar: ${error.response.data.erro || error.response.statusText}`);
          } else if (error.request) {
            setErro('Erro de rede: O servidor não respondeu. Certifique-se de que a API está rodando.');
          } else {
            setErro('Erro desconhecido ao atualizar usuário.');
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
            Editar Usuário (ID: {id})
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
                  backgroundColor: carregando ? '#a0a0a0' : '#007bff',
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
                {carregando ? 'Atualizando...' : 'Atualizar'}
              </button>
              <button
                type="button"
                onClick={onCancelEdit}
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
                Cancelar
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

    export default FormularioEdicaoUsuario;
    
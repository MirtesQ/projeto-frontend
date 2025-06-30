    import React, { useEffect, useState } from 'react';
    import axios from 'axios';

    const ListaUsuarios = ({ refreshKey, goToSaudacao, goToRegisterUser, onEditUser }) => {
      const [usuarios, setUsuarios] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchUsuarios = async () => {
          setLoading(true);
          setError(null);

          try {
            const response = await axios.get('http://localhost:5000/usuarios');
            setUsuarios(response.data);
          } catch (err) {
            setError('Erro ao carregar usuários: ' + err.message);
            console.error('Erro ao buscar usuários:', err);
          } finally {
            setLoading(false);
          }
        };

        fetchUsuarios();
      }, [refreshKey]);

      if (loading) {
        return <p>Carregando usuários...</p>;
      }

      if (error) {
        return <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>;
      }

      return (
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '15px',
          marginTop: '20px',
          backgroundColor: '#f9f9f9'
        }}>
          <h2 style={{ color: '#333', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px' }}>
            Lista de Usuários
          </h2>

          <div style={{ textAlign: 'center', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button
              onClick={goToSaudacao}
              style={{
                backgroundColor: '#6c757d',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1em',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease'
              }}
            >
              Voltar para Saudação
            </button>
            <button
              onClick={goToRegisterUser}
              style={{
                backgroundColor: '#f39c12',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1em',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease'
              }}
            >
              Cadastrar Usuário
            </button>
          </div>

          {usuarios.length === 0 ? (
            <p>Nenhum usuário encontrado no momento.</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {usuarios.map(usuario => (
                <li key={usuario.id} style={{
                  backgroundColor: '#fff',
                  marginBottom: '10px',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  color: '#333',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px'
                }}>
                  <div>
                    <strong>ID:</strong> {usuario.id} <br />
                    <strong>Nome:</strong> {usuario.nome} <br />
                    <strong>Email:</strong> {usuario.email}
                  </div>
                  <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => onEditUser(usuario)} // <<<<<<< CHAMA onEditUser PASSANDO O USUARIO
                      style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '8px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => console.log('Botão Excluir clicado para ID:', usuario.id)}
                      style={{
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '8px 15px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9em',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    export default ListaUsuarios;
    
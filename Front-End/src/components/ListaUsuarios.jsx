import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaUsuarios = ({ refreshKey, goToSaudacao, goToRegisterUser, onEditUser }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      setLoading(true);
      setError(null);
      setDeleteMessage(null);
      setDeleteError(null);

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

  const handleDeleteClick = (usuario) => {
    setUserToDelete(usuario);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    setShowConfirmModal(false);
    if (!userToDelete) return;

    setDeleteMessage(null);
    setDeleteError(null);

    try {
      await axios.delete(`http://localhost:5000/usuarios/${userToDelete.id}`);
      setDeleteMessage(`Usuário "${userToDelete.nome}" removido com sucesso.`);
      setUserToDelete(null);
      const response = await axios.get('http://localhost:5000/usuarios');
      setUsuarios(response.data);

    } catch (err) {
      setDeleteError(`Erro ao remover usuário: ${err.response?.data?.erro || err.message}`);
      console.error('Erro ao remover usuário:', err);
    }
  };

  const cancelDelete = () => {
    setShowConfirmModal(false);
    setUserToDelete(null);
  };

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#e9f2f7',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
        margin: '20px 0'
      }}>
        <p style={{ fontSize: '1.6em', color: '#4a6c8e', fontWeight: '500', userSelect: 'none', cursor: 'default' }} contentEditable="false">Carregando usuários...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#ffebee',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
        margin: '20px 0'
      }}>
        <p style={{ fontSize: '1.6em', color: '#d32f2f', fontWeight: 'bold', userSelect: 'none', cursor: 'default' }} contentEditable="false">{error}</p>
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid #e9ecef',
      borderRadius: '16px',
      padding: '30px',
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
        Lista de Usuários
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        <button
          onClick={goToSaudacao}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1.15em',
            fontWeight: '600',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
        >
          Voltar ao Início
        </button>
        <button
          onClick={goToRegisterUser}
          style={{
            backgroundColor: '#ffc107',
            color: '#343a40',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontSize: '1.15em',
            fontWeight: '600',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'background-color 0.3s ease, transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0a800'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
        >
          Cadastrar Usuário
        </button>
      </div>

      {deleteMessage && (
        <p style={{ color: '#28a745', marginTop: '20px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2em', userSelect: 'none', cursor: 'default' }} contentEditable="false">{deleteMessage}</p>
      )}
      {deleteError && (
        <p style={{ color: '#dc3545', marginTop: '20px', fontWeight: 'bold', textAlign: 'center', fontSize: '1.2em', userSelect: 'none', cursor: 'default' }} contentEditable="false">{deleteError}</p>
      )}

      {usuarios.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#6c757d', fontSize: '1.2em', padding: '20px 0', userSelect: 'none', cursor: 'default' }} contentEditable="false">Nenhum usuário encontrado no momento.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {usuarios.map(usuario => (
            <li key={usuario.id} style={{
              backgroundColor: '#fdfdfd',
              marginBottom: '18px',
              padding: '25px',
              borderRadius: '12px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
              color: '#343a40',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              border: '1px solid #f0f2f5'
            }}>
              <div style={{ fontSize: '1.15em', lineHeight: '1.7', userSelect: 'none', cursor: 'default' }} contentEditable="false">
                <strong>ID:</strong> {usuario.id} <br />
                <strong>Nome:</strong> {usuario.nome} <br />
                <strong>Email:</strong> {usuario.email}
              </div>
              <div style={{ marginTop: '15px', display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => onEditUser(usuario)}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '12px 25px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1em',
                    fontWeight: '600',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s ease, transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteClick(usuario)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '12px 25px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1em',
                    fontWeight: '600',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s ease, transform 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showConfirmModal && userToDelete && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.65)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
            textAlign: 'center',
            color: '#343a40',
            maxWidth: '500px',
            width: '90%',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <p style={{ fontSize: '1.4em', marginBottom: '30px', lineHeight: '1.6', color: '#495057', userSelect: 'none', cursor: 'default' }} contentEditable="false">
              Tem certeza que deseja excluir o usuário <strong style={{ color: '#dc3545' }}>{userToDelete.nome}</strong>?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button
                onClick={confirmDelete}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1.15em',
                  fontWeight: '600',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  transition: 'background-color 0.3s ease, transform 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c82333'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
              >
                Sim, Excluir
              </button>
              <button
                onClick={cancelDelete}
                style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '14px 28px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1.15em',
                  fontWeight: '600',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  transition: 'background-color 0.3s ease, transform 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaUsuarios;

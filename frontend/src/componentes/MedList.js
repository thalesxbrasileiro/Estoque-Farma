import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import { Link } from "react-router-dom";

const MedList = () => {
  const [meds, setMeds] = useState([]);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getMeds();
  }, []);

  const getMeds = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setMeds(response.data);
    } catch (err) {
      setError("Failed to fetch medications.");
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
      getMeds();
    } catch (err) {
      setError("Failed to delete medication.");
      console.error(err);
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">Estoque da Farmácia</h1>
      </header>
      <div className="container mt-5">
        {error && <div className="notification is-danger">{error}</div>}
        <Link to="/add" className="button is-primary mb-5">
          Cadastrar Medicamento
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {meds.map((med, index) => (
              <tr key={med._id}>
                <td>{index + 1}</td>
                <td>{med.nome}</td>
                <td>{med.preco}</td>
                <td>{med.quantidade}</td>
                <td>{med.validade}</td>
                <td>
                  <Link
                    to={`edit/${med._id}`}
                    className="button is-info is-small mr-2"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteUser(med._id)}
                    className="button is-danger is-small"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="footer">
        <p>© 2024 Estoque-Farma. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default MedList;

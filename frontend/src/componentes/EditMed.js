import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../style.css";

const EditMed = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQtd] = useState("");
  const [validade, setVld] = useState("");
  const navegar = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setNome(response.data.nome);
      setPreco(response.data.preco);
      setQtd(response.data.quantidade);
      setVld(response.data.validade);
    } catch (error) {
      console.log(error);
    }
  };

  const updateMed = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nome,
        preco,
        quantidade,
        validade,
      });
      navegar("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">Atualizar Medicamento</h1>
      </header>
      <div className="container mt-5">
        <Link to="/" className="button is-primary mb-5">
          Estoque de Medicamentos
        </Link>
        <div className="columns">
          <div className="column is-half">
            <form onSubmit={updateMed}>
              <div className="field">
                <label className="label">Nome</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome do medicamento"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Preço</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    placeholder="R$"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Quantidade</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={quantidade}
                    onChange={(e) => setQtd(e.target.value)}
                    placeholder="Caixas"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Validade</label>
                <div className="control">
                  <input
                    type="month"
                    className="input"
                    value={validade}
                    onChange={(e) => setVld(e.target.value)}
                    placeholder="Dia/Mês/Ano"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Estoque-Farma. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default EditMed;

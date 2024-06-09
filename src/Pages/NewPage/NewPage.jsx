import React from "react";
import "./NewPage.css";
import { useNavigate } from "react-router-dom";

function NewPage() {
    
  const navigate = useNavigate();
  return (
    <form>
      <h2>Adicione um novo Fornecedor</h2>
      <div className="inputs-container">
        <label>
          <p>Nome:</p>
          <input type="text" />
        </label>
        <label>
          <p>Email:</p>
          <input type="email" />
        </label>
        <label>
          <p>Phone:</p>
          <input type="text" />
        </label>
      </div>
      <div className="button-container">
        <button>Adicionar</button>
        <button onClick={() => navigate("/")}>Cancelar</button>
      </div>
    </form>
  );
}

export default NewPage;

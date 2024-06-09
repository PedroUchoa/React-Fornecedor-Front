/* eslint-disable react/prop-types */
import React from "react";
import phoneImg from "../../Assets/phone.svg";
import "./Card.css";
import emailImg from "../../Assets/email.svg";
import { useNavigate } from "react-router-dom";

export default function Card({ fornecedor, onButtonClick }) {
  const handleClick = () => {
    onButtonClick(fornecedor.id);
  };

  const navigate = useNavigate();


  return (
    <li className="card">
      <h2>{fornecedor.name}</h2>
      <div className="info-container">
        <div>
          <img src={phoneImg} />
          <p>{fornecedor.phone}</p>
        </div>
        <div>
          <img src={emailImg} />
          <p>{fornecedor.email}</p>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={() => navigate(`/edit/${fornecedor.id}`)}>Editar</button>
        <button onClick={handleClick}>Excluir</button>
      </div>
    </li>
  );
}

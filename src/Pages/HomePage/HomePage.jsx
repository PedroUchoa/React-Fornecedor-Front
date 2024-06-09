import { useState } from "react";
import Card from "../../Components/Card/Card";
import "./HomePage.css";
import { useEffect } from "react";
import Head from "../../Components/Header/Head";

export default function HomePage() {
  const [fornecedores, setFornecedores] = useState([]);

  const fetchGet = () => {
    fetch("http://localhost:8080/api/fornecedor/all")
      .then((response) => response.json())
      .then((data) => {
        setFornecedores(data);
      })
      .catch((err) => console.log(err));
  };

  const fetchDelete = (id) => {
    fetch("http://localhost:8080/api/fornecedor/delete/" + id,{ method: "DELETE",});
     setFornecedores(fornecedores.filter((fornecedor) => fornecedor.id !== id));
  
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <div className="container-card">
      <Head />
      <ul>
        {fornecedores.map((fornecedor) => (
          <Card
            onButtonClick={fetchDelete}
            key={fornecedor.id}
            fornecedor={fornecedor}
          />
        ))}
      </ul>
    </div>
  );
}

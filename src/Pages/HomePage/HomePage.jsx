import { useState } from "react";
import Card from "../../Components/Card/Card";
import "./HomePage.css";
import { useEffect } from "react";
import Head from "../../Components/Header/Head";

export default function HomePage() {
  const [fornecedores, setFornecedores] = useState([]);

  const fetchFact = () => {
    fetch("http://localhost:8080/api/fornecedor/all")
      .then((response) => response.json())
      .then((data) => {
        setFornecedores(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="container-card">
      <Head />
      <ul>
        {fornecedores.map((fornecedor) => (
          <Card key={fornecedor.id} fornecedor={fornecedor} />
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import Card from "../../Components/Card/Card";
import "./HomePage.css";
import { useEffect } from "react";
import Head from "../../Components/Header/Head";

export default function HomePage() {
  const [fornecedores, setFornecedores] = useState([]);
  const [actualPage, setActualPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchGet = async (actualPage) => {
    if(actualPage === undefined) actualPage = 0;
    setActualPage(actualPage)

    await fetch(`http://localhost:8080/api/fornecedor/all?page=${actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(actualPage);
        setFornecedores(data.content);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.log(err));
  };

  const fetchDelete = (id) => {
    fetch("http://localhost:8080/api/fornecedor/delete/" + id, {
      method: "DELETE",
    });
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
      <section>
        <button
          type="button"
          disabled={actualPage + 1 === 1}
          onClick={() => fetchGet(actualPage - 1)}
        >
          Voltar
        </button>

        <p>
          PÁGINA {actualPage + 1} DE {totalPages}
        </p>

        <button
          type="button"
          disabled={actualPage + 1 === totalPages}
          onClick={() => fetchGet(actualPage + 1)}
        >
          Avançar
        </button>
      </section>
    </div>
  );
}

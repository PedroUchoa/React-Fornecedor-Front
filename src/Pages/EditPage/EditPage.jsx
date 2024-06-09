import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();


  const { id } = useParams();

  const getFetch = () => {
    fetch(`http://localhost:8080/api/fornecedor/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setInputValue(data);
      })
      .catch((err) => console.log(err));
  };

  const editFetch=() =>{
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValue),
    };
    fetch(
      `http://localhost:8080/api/fornecedor/update/${inputValue.id}`,
      requestOptions
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        navigate("/");
        return alert("Fornecedor editado");
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getFetch();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 const onSubmit = (event) => {
   if (
     inputValue.name == "" ||
     inputValue.email == "" ||
     inputValue.phone == ""
   ) {
     alert("Preencha todos os campos");
     event.preventDefault();
     return;
   }

   if (inputValue.phone.length > 11) {
     return alert("um numero deve ter apenas 11 digitos");
   }

   editFetch();
   event.preventDefault();
 };

  return (
    <form onSubmit={onSubmit}>
      <h2>Adicione um novo Fornecedor</h2>
      <div className="inputs-container">
        <label>
          <p>Nome:</p>
          <input
            name="name"
            type="text"
            value={inputValue.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            name="email"
            type="email"
            value={inputValue.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Phone:</p>
          <input
            name="phone"
            type="text"
            value={inputValue.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="button-container">
        <button type="submit">Adicionar</button>
        <button onClick={() => navigate("/")}>Cancelar</button>
      </div>
    </form>
  );
}

export default EditPage;

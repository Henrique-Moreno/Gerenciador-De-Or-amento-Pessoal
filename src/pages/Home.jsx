import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleStartManagement = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <section>
        <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
        <p>Gerencie suas receitas e despesas facilmente.</p>
      </section>

      <section>
        <button onClick={handleStartManagement} className="start-button">
          Iniciar Gerenciamento
        </button>
      </section>
    </div>
  );
}

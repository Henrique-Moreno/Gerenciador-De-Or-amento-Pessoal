import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import ReceitaForm from "../components/ReceitaForm";
import DespesaForm from "../components/DespesaForm";

export default function Dashboard() {
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const [editingReceita, setEditingReceita] = useState(null); 
  const [editingDespesa, setEditingDespesa] = useState(null); 

  // Função para buscar receitas e despesas
  const fetchData = async () => {
    const receitasCollection = await getDocs(collection(db, "receitas"));
    const despesasCollection = await getDocs(collection(db, "despesas"));
    setReceitas(
      receitasCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setDespesas(
      despesasCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalReceitas = receitas.reduce((acc, curr) => acc + curr.valor, 0);
  const totalDespesas = despesas.reduce((acc, curr) => acc + curr.valor, 0);
  const saldo = totalReceitas - totalDespesas;

  // Função para excluir uma receita
  const handleDeleteReceita = async (id) => {
    try {
      await deleteDoc(doc(db, "receitas", id));
      fetchData();
      alert("Receita excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir receita:", error);
    }
  };

  // Função para excluir uma despesa
  const handleDeleteDespesa = async (id) => {
    try {
      await deleteDoc(doc(db, "despesas", id));
      fetchData();
      alert("Despesa excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir despesa:", error);
    }
  };

  // Função para iniciar a edição de uma receita
  const handleEditReceita = (receita) => {
    setEditingReceita(receita); 
  };

  // Função para iniciar a edição de uma despesa
  const handleEditDespesa = (despesa) => {
    setEditingDespesa(despesa); 
  };

  // Função para atualizar uma receita
  const updateReceita = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, "receitas", id), updatedData);
      fetchData(); 
      alert("Receita atualizada com sucesso!");
      setEditingReceita(null); 
    } catch (error) {
      console.error("Erro ao atualizar receita:", error);
    }
  };

  // Função para atualizar uma despesa
  const updateDespesa = async (id, updatedData) => {
    try {
      await updateDoc(doc(db, "despesas", id), updatedData);
      fetchData();
      alert("Despesa atualizada com sucesso!");
      setEditingDespesa(null); 
    } catch (error) {
      console.error("Erro ao atualizar despesa:", error);
    }
  };

  return (
    <div className="container">
      <section>
        <h2>Dashboard</h2>
        <p>Total Receitas: R$ {totalReceitas.toFixed(2)} </p>
        <p>Total Despesas: R$ {totalDespesas.toFixed(2)} </p>
        <p>Saldo: R$ {saldo.toFixed(2)} </p>
      </section>

      <section>
        <h3>Adicionar Receita</h3>
        <ReceitaForm
          onAdd={fetchData}
          editing={editingReceita}
          onUpdate={updateReceita}
        />
      </section>

      <section>
        <h3>Adicionar Despesa</h3>
        <DespesaForm
          onAdd={fetchData}
          editing={editingDespesa}
          onUpdate={updateDespesa}
        />
      </section>

      <section>
        <h3>Receitas Adicionadas</h3>
        <ul>
          {receitas.map((receita) => (
            <li key={receita.id}>
              {receita.descricao}: R$ {receita.valor.toFixed(2)}
              <button className="edit-button" onClick={() => handleEditReceita(receita)}>
                Editar
              </button>{" "}
              <button className='delete-button' onClick={() => handleDeleteReceita(receita.id)}>
                Excluir
              </button>{" "}
            </li>
          ))}
        </ul>

        <h3>Despesas Adicionadas</h3>
        <ul>
          {despesas.map((despesa) => (
            <li key={despesa.id}>
              {despesa.descricao}: R$ {despesa.valor.toFixed(2)}
              <button className="edit-button" onClick={() => handleEditDespesa(despesa)}>
                Editar
              </button>{" "}
              <button className='delete-button' onClick={() => handleDeleteDespesa(despesa.id)}>
                Excluir
              </button>{" "}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export default function DespesaForm({ onAdd, editing, onUpdate }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  useEffect(() => {
    if (editing) {
      setDescricao(editing.descricao);
      setValor(editing.valor);
    }
  }, [editing]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!descricao || !valor) return;

    if (editing) {
      await onUpdate(editing.id, { descricao, valor: parseFloat(valor) });
    } else {
      await addDoc(collection(db, "despesas"), {
        descricao,
        valor: parseFloat(valor),
        data: new Date(),
      });

      onAdd();
      alert("Despesa adicionada com sucesso!");
    }

    setDescricao("");
    setValor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
        className="input-modern"
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        required
        className="input-modern"
      />
      <button type="submit">
        {editing ? "Atualizar Despesa" : "Adicionar Despesa"}
      </button>
    </form>
  );
}

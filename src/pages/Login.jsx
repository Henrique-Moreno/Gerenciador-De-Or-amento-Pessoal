import { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      setError("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <div className="container">
      <section>
        <h2>Fazer Login:</h2>
        {error && <p>{error}</p>}
        <button onClick={signInWithGoogle}>Login com Google</button>
      </section>
    </div>
  );
}

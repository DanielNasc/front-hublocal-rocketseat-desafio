import axios from "axios";
import { useState } from "react";
import "./styles.scss";

export function EmailInput() {
  const [email, setEmail] = useState("");

  // Enviar uma requisição para uma API que criai para enviar um email
  // Tentei fazer isso usando o nodemailer,
  // mas não consegui porque estava dando uns problemas com as networkInterfaces

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = JSON.stringify({ receiver: email });

    try {
      const response = await axios.post(
        "https://gmail-sender-danielnasc.herokuapp.com/sendgmail",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    setEmail("");
  };

  return (
    <form className="email-input" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Digite seu email!"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Send</button>
    </form>
  );
}

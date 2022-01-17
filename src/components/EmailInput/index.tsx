import "./styles.scss";

export function EmailInput() {
  return (
    <div className="email-input">
      <input type="email" placeholder="Digite seu email!" />
      <button>Send</button>
    </div>
  );
}

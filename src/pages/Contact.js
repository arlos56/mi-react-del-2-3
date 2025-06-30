import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado:\nNombre: ${form.nombre}\nEmail: ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:
        <input name="nombre" value={form.nombre} onChange={handleChange} required />
      </label>
      <br />
      <label>Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact;

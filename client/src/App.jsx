
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-azul-oscuro navbar-dark px-4">
        <a className="navbar-brand" href="/">Innova System</a>
      </nav>

      <header className="hero text-center text-white py-5">
        <h1>Soluciones de Software a Medida</h1>
        <p>Transformamos ideas en tecnología.</p>
        <a href="#contacto" className="btn btn-verde">Contáctanos</a>
      </header>

      <section className="container my-5" id="contacto">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" className="form-control my-2" placeholder="Tu nombre" required />
          <input type="email" name="correo" className="form-control my-2" placeholder="Correo electrónico" required />
          <textarea name="mensaje" className="form-control my-2" placeholder="Tu mensaje" rows="4" required></textarea>
          <button type="submit" className="btn btn-azul">Enviar</button>
        </form>
      </section>
    </div>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const data = {
    nombre: e.target.nombre.value,
    correo: e.target.correo.value,
    mensaje: e.target.mensaje.value
  };

  fetch('http://localhost:5000/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.ok ? alert("Mensaje enviado!") : alert("Error al enviar"))
  .catch(err => console.error(err));
}

export default App;

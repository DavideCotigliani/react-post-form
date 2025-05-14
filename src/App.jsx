import { useState } from 'react'
import axios from 'axios'

function App() {

  // variabile di stato che sarà un oggetto
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    text: "",
    declaration: false,
  });
  // definisco la funzione per i cambiamenti dei valori input
  function handleFormData(e) {
    // se è checkbox vado su checked, altrimenti vado sulle proprietà che hanno valore
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData((formData) => ({
      ...formData, [e.target.name]: value
    }));
  }
  // svolgo la chiamata AJAX all'endpoin
  const handleSubmit = (e) => {

  };
  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col 6 my-3">
              <input type="text" name='name' value={formData.name} onChange={handleFormData} placeholder='Nome autore' />
            </div>
            <div className="col 6 my-3">
              <input type="text" name='title' value={formData.title} onChange={handleFormData} placeholder='Titolo del post' />
            </div>
          </div>
          <div className="row">
            <div className="col 4">
              <textarea name="text" value={formData.text} onChange={handleFormData} placeholder='Inserisci il testo'></textarea>
            </div>
            <div className="col 4">
              <input type="checkbox" checked={formData.declaration} onChange={handleFormData} /> Post pubblico
              <input type="checkbox" checked={formData.declaration} onChange={handleFormData} /> Bozza
            </div>
            <div className="col 4">
              <button>Invia</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App

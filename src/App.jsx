import { useState } from 'react'
import axios from 'axios'

// variabile di stato che sarà un oggetto
const [formData, useFormData] = useState({
  name: "",
  title: "",
  text: "",
  declaration: false,
});

function App() {

  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col 6 my-3">
              <input type="text" name='name' value={formData.name} placeholder='Nome autore' />
            </div>
            <div className="col 6 my-3">
              <input type="text" name='title' value={formData.title} placeholder='Titolo del post' />
            </div>
          </div>
          <div className="row">
            <div className="col 4">
              <textarea name="text" value={formData.text} placeholder='Inserisci il testo'></textarea>
            </div>
            <div className="col 4">
              <input type="checkbox" /> Post pubblico
              <input type="checkbox" /> Bozza
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

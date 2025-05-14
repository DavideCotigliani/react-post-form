import { useState } from 'react'
import axios from 'axios'

function App() {

  // variabile di stato che sarà un oggetto
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
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
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then((resp) => {
      console.log(resp.data)
    })
  };
  return (
    <>
      <div className="container mt-5">
        <div className="p-4 rounded" style={{ backgroundColor: '#e0f7ff' }}>
          <h3>Crea un post</h3>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col 6 my-3">
                <input type="text" className="form-control" name='author' value={formData.author} onChange={handleFormData} placeholder='Nome autore' />
              </div>
              <div className="col 6 my-3">
                <input type="text" className="form-control" name='title' value={formData.title} onChange={handleFormData} placeholder='Titolo del post' />
              </div>
            </div>
            <div className="row">
              <div className="col 6">
                <textarea name="body" className="form-control" value={formData.body} onChange={handleFormData} placeholder='Inserisci il testo'></textarea>
              </div>
              <div className="col 6 d-flex align-items-center gap-2 mt-2">
                <input type="checkbox" className="form-check" checked={formData.public === true} name="public" onChange={() => setFormData({ ...formData, public: true })} /> <label className="form-check-label">Post pubblico</label>
                <input type="checkbox" className='form-check' checked={formData.public === false} name="public" onChange={() => setFormData({ ...formData, public: false })} /> <label className="form-check-label">Bozza</label>
              </div>
            </div>
            <div className="row">
              <div className="col 12">
                <button>Invia</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App

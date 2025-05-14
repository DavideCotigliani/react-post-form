import { useState } from 'react'
import axios from 'axios'

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col 6 my-3">
            <input type="text" placeholder='Nome autore' />
          </div>
          <div className="col 6 my-3">
            <input type="text" placeholder='Titolo del post' />
          </div>
        </div>
        <div className="row">
          <div className="col 6">
            <textarea name="" id="" placeholder='Inserisci il testo'></textarea>
          </div>
          <div className="col 6">
            <input type="checkbox" /> Post pubblico
            <input type="checkbox" /> Bozza
          </div>
        </div>
      </div>
    </>
  )
}

export default App

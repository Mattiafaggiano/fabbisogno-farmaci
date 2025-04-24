'use client'
import { useState } from 'react'

export default function Home() {
  const [regione, setRegione] = useState('')
  const [fasciaEta, setFasciaEta] = useState('')
  const [anno, setAnno] = useState('')
  const [popolazione, setPopolazione] = useState('')
  const [fabbisogno, setFabbisogno] = useState(null)

  const calcolaFabbisogno = () => {
    const pop = parseInt(popolazione)
    if (!isNaN(pop)) {
      const dosi = pop * 0.29861 * 365
      setFabbisogno(Math.round(dosi))
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Fabbisogno Farmaci Gastrointestinali</h1>
        <input
          type="text"
          placeholder="Regione"
          value={regione}
          onChange={(e) => setRegione(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Fascia d’età (bambini, adulti, anziani)"
          value={fasciaEta}
          onChange={(e) => setFasciaEta(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Anno"
          value={anno}
          onChange={(e) => setAnno(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Popolazione"
          value={popolazione}
          onChange={(e) => setPopolazione(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          onClick={calcolaFabbisogno}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calcola
        </button>
        {fabbisogno !== null && (
          <div className="text-center text-lg font-semibold text-green-600">
            {fabbisogno.toLocaleString()} dosi/anno
          </div>
        )}
      </div>
    </main>
  )
}

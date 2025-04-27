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
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-4 space-y-8">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-black">Calcolatore Fabbisogno Farmaci Gastrointestinali</h1>
        <p className="text-center text-gray-700 text-md">
          Questo software aiuta a pianificare la produzione di farmaci riducendo sprechi, aumentando l'efficienza e migliorando la precisione.
          È pensato per un'integrazione semplice con sistemi aziendali (ERP, CRM) e può essere esteso ad altri tipi di farmaci.
        </p>
        <div className="space-y-4">
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
        </div>
        {fabbisogno !== null && (
          <div className="text-center text-lg font-semibold text-green-600">
            {fabbisogno.toLocaleString()} dosi/anno necessarie
          </div>
        )}
        <div className="pt-6 text-sm text-gray-600">
          <p><strong>Nota:</strong> Questo è un prototipo (MVP) pensato per essere esteso con integrazione automatica ai dati ISTAT e ampliabile a diversi tipi di farmaci.</p>
          <p>Prossimi sviluppi: connessione diretta ai database demografici, miglioramento sicurezza e scalabilità internazionale.</p>
        </div>
      </div>
    </main>
  )
}

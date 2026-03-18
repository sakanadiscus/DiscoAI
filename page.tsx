"use client";
import React, { useState } from 'react';

const DATABASE_SALUD = {
  dactylo_alevines: {
    nombre: "Dactylogyrus (Parásitos Branquiales) - PROTOCOLO ALEVINES",
    sintomas: "Boqueo, opérculos abiertos, nado en tirabuzón, muerte súbita de la puesta.",
    medicina: "KMnO4 (Permanganato) Dosis Pediátrica",
    pasos: [
      "Día 1: Mezcla madre (1g en 500ml agua destilada). Aplicar 0.25ml por cada litro de agua.",
      "Día 1: Aireación máxima con difusor de burbuja fina. No dejar solos a los alevines.",
      "Día 1: Neutralizar a los 45 min con Agua Oxigenada 3% (4ml/10L) si hay estrés extremo.",
      "Día 2: Cambio de agua 50% y añadir sal para acuario (1g por cada 3 litros).",
      "Día 3: Repetir si el boqueo persiste. Vigilar la alimentación con artemia."
    ]
  },
  hexamita: {
    nombre: "Hexamita (Parásitos Internos / Agujeros)",
    sintomas: "Heces blancas hilachosas, retraimiento, pérdida de color, agujeros en la frente.",
    medicina: "Metronidazol (Flagyl) + Termoterapia",
    pasos: [
      "Día 1-5: 250mg de Metronidazol por cada 30 litros de agua cada 24h.",
      "Día 1-5: Subir temperatura gradualmente hasta los 32.5°C.",
      "Día 6: Cambio de agua del 50%.",
      "Día 7-10: Alimentar con papilla medicada (Metronidazol mezclado en la comida)."
    ]
  }
};

export default function DiscoAI() {
  const [tab, setTab] = useState('home');
  const [analizando, setAnalizando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const colors = { bg: '#001529', accent: '#00d1ff', danger: '#ff4d4d', dark: '#000d1a' };

  const ejecutarAnalisis = (tipo) => {
    setAnalizando(true);
    setResultado(null);
    setTimeout(() => {
      if (tipo === 'salud') {
        setResultado({ tipo: 'enfermedad', data: DATABASE_SALUD.dactylo_alevines });
      } else {
        setResultado({ tipo: 'variedad', data: { nombre: "Blue Diamond", desc: "Patrón azul sólido." } });
      }
      setAnalizando(false);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: 'white', fontFamily: 'sans-serif', paddingBottom: '80px' }}>
      <header style={{ backgroundColor: colors.dark, padding: '20px', textAlign: 'center', borderBottom: `2px solid ${colors.accent}` }}>
        <h1 style={{ margin: 0, color: colors.accent, fontSize: '20px' }}>SAKANA DISCUS AI</h1>
      </header>

      <main style={{ padding: '20px' }}>
        {tab === 'home' && !resultado && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ border: `2px dashed ${colors.accent}`, borderRadius: '20px', padding: '40px 20px', textAlign: 'center' }}>
              <h3>ESCANER DE PRECISIÓN</h3>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => ejecutarAnalisis('variedad')} style={{ flex: 1, padding: '15px', borderRadius: '10px', backgroundColor: colors.accent, border: 'none', fontWeight: 'bold' }}>VARIEDAD</button>
                <button onClick={() => ejecutarAnalisis('salud')} style={{ flex: 1, padding: '15px', borderRadius: '10px', backgroundColor: colors.danger, color: 'white', border: 'none', fontWeight: 'bold' }}>SALUD/FRY</button>
              </div>
            </div>
            {analizando && <p style={{ textAlign: 'center' }}>Analizando...</p>}
          </div>
        )}

        {resultado && (
          <div style={{ backgroundColor: colors.dark, padding: '20px', borderRadius: '20px', border: `1px solid ${colors.accent}` }}>
            <button onClick={() => setResultado(null)} style={{ color: colors.accent, background: 'none', border: 'none', marginBottom: '10px' }}>← VOLVER</button>
            <h2 style={{ color: colors.danger }}>{resultado.data.nombre}</h2>
            {resultado.tipo === 'enfermedad' && (
              <>
                <p><strong>Síntomas:</strong> {resultado.data.sintomas}</p>
                <div style={{ backgroundColor: '#1a0000', padding: '15px', borderRadius: '10px' }}>
                  <h4 style={{ color: colors.danger }}>TRATAMIENTO PASO A PASO:</h4>
                  {resultado.data.pasos.map((p, i) => <p key={i} style={{ fontSize: '13px' }}>{p}</p>)}
                </div>
              </>
            )}
          </div>
        )}
      </main>

      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: colors.dark, display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: `1px solid ${colors.accent}` }}>
        <button onClick={() => setTab('home')} style={{ background: 'none', border: 'none', color: colors.accent }}>INICIO</button>
        <button style={{ background: 'none', border: 'none', color: '#555' }}>PREMIUM</button>
      </nav>
    </div>
  );
}

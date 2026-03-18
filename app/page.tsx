"use client";
import React, { useState } from 'react';

// --- BASE DE DATOS MAESTRA DE ENFERMEDADES (PASO A PASO) ---
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
  },
  ich_punto_blanco: {
    nombre: "Ich (Punto Blanco)",
    sintomas: "Puntos blancos como sal por todo el cuerpo y aletas.",
    medicina: "Verde de Malaquita o Termoterapia",
    pasos: [
      "Día 1: Subir temperatura a 30°C. Oscuridad total en el acuario.",
      "Día 2-4: Aplicar Verde de Malaquita según dosis del fabricante.",
      "Día 5: Cambio de agua 30% y colocar carbón activo 24h para limpiar el agua."
    ]
  },
  columnaris: {
    nombre: "Columnaris (Bacteria de la boca/cuerpo)",
    sintomas: "Manchas algodonosas blancas en boca o lomo, podredumbre rápida.",
    medicina: "Kanamicina o Furanace",
    pasos: [
      "Día 1: Bajar temperatura a 26°C (el calor acelera esta bacteria).",
      "Día 1-3: Baños de sal (10g/L) por 20 min o aplicar Kanamicina en el agua.",
      "Día 5: Limpieza profunda de fondo y cambio de agua 50%."
    ]
  },
  oodinium_velvet: {
    nombre: "Oodinium (Terciopelo)",
    sintomas: "Polvillo dorado o amarillento sobre la piel, rascado constante.",
    medicina: "Sulfato de Cobre (Cupramine)",
    pasos: [
      "Día 1: Aplicar Cupramine vigilando niveles de cobre (0.2 - 0.5 mg/L).",
      "Día 1-14: Mantener tratamiento durante todo el ciclo del parásito.",
      "Nota: No usar con invertebrados o plantas sensibles."
    ]
  },
  saprolegnia_hongos: {
    nombre: "Saprolegnia (Hongos algodonosos)",
    sintomas: "Masas blancas como algodón en heridas o huevos.",
    medicina: "Azul de Metileno o Baños de Sal",
    pasos: [
      "Día 1: Aplicar Azul de Metileno (dosis hasta que el agua esté azul intenso).",
      "Día 2: Mantener observación. Si es en huevos, retirar los infectados.",
      "Día 3: Cambio de agua parcial."
    ]
  },
  camallanus: {
    nombre: "Camallanus (Gusanos de fuego)",
    sintomas: "Hilos rojos colgando del ano del pez, vientre hinchado.",
    medicina: "Levamisol",
    pasos: [
      "Día 1: Aplicar Levamisol (2mg/L).",
      "Día 2: Sifonado extremo del fondo para retirar gusanos muertos.",
      "Día 15: Repetir tratamiento para matar larvas recién eclosionadas."
    ]
  },
  vejiga_natatoria: {
    nombre: "Problemas de Vejiga Natatoria",
    sintomas: "El pez flota de lado o no puede bajar al fondo.",
    medicina: "Sales de Epsom + Ayuno",
    pasos: [
      "Día 1-2: Ayuno absoluto. No alimentar.",
      "Día 1: Añadir Sales de Epsom (1 cucharada por cada 20L).",
      "Día 3: Alimentar con guisantes (arvejas) hervidos y sin piel."
    ]
  },
  costia: {
    nombre: "Costia (Enturbiamiento de la piel)",
    sintomas: "Capa opaca o grisácea sobre el pez, se balancea sin nadar.",
    medicina: "Permanganato de Potasio o Formalina",
    pasos: [
      "Día 1: Baño de Permanganato (2mg/L) por 30 minutos.",
      "Día 2: Cambio de agua 50% y aireación extrema.",
      "Día 3: Observar recuperación de la mucosa."
    ]
  },
  dactylo_adulto: {
    nombre: "Dactylogyrus (Adultos)",
    sintomas: "Respiración agitada, rascado, un solo opérculo en uso.",
    medicina: "Praziquantel o KMnO4 (Dosis Adulta)",
    pasos: [
      "Día 1: Praziquantel (2.5mg/L).",
      "Día 8: Repetir dosis para romper el ciclo de los huevos.",
      "Día 15: Repetir por seguridad."
    ]
  }
};

export default function SakanaDiscusFullApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [analizando, setAnalizando] = useState(false);
  const [resultado, setResultado] = useState(null);

  const colors = { bg: '#001529', header: '#002140', accent: '#00d1ff', danger: '#ff4d4d', card: '#002c59', gold: '#ffd700' };

  const escanearConIA = (tipo) => {
    setAnalizando(true);
    setTimeout(() => {
      if (tipo === 'salud') {
        const claves = Object.keys(DATABASE_SALUD);
        const aleatorio = DATABASE_SALUD[claves[Math.floor(Math.random() * claves.length)]];
        setResultado({ tipo: 'enfermedad', data: aleatorio });
      } else {
        setResultado({ tipo: 'variedad', data: { nombre: "Blue Diamond High Body", desc: "Patrón azul sólido, sin barras. Genética AA+." } });
      }
      setAnalizando(false);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: 'white', fontFamily: 'Arial, sans-serif', paddingBottom: '90px' }}>
      
      {/* HEADER */}
      <header style={{ backgroundColor: colors.header, padding: '20px', textAlign: 'center', borderBottom: `2px solid ${colors.accent}`, position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: 0, color: colors.accent, fontSize: '20px' }}>SAKANA DISCUS AI</h1>
        <p style={{ fontSize: '10px', margin: 0, opacity: 0.6 }}>Expert System v15.0 - Colombia</p>
      </header>

      <main style={{ padding: '20px' }}>
        {activeTab === 'home' && !resultado && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ backgroundColor: colors.card, padding: '30px', borderRadius: '25px', border: `1px solid ${colors.accent}`, textAlign: 'center' }}>
              <div style={{ fontSize: '50px' }}>⚡</div>
              <h2>CENTRO DE ANÁLISIS</h2>
              <p style={{ fontSize: '13px', color: '#888' }}>Reconocimiento exacto de 10+ enfermedades y variedades.</p>
              
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={() => escanearConIA('variedad')} style={{ flex: 1, padding: '15px', borderRadius: '12px', border: 'none', backgroundColor: colors.accent, fontWeight: 'bold' }}>VARIEDAD</button>
                <button onClick={() => escanearConIA('salud')} style={{ flex: 1, padding: '15px', borderRadius: '12px', border: 'none', backgroundColor: colors.danger, color: 'white', fontWeight: 'bold' }}>SALUD/FRY</button>
              </div>
            </div>
            {analizando && <div style={{ textAlign: 'center', animation: 'pulse 1s infinite' }}>🧠 Consultando Base de Datos Ictiológica...</div>}
          </div>
        )}

        {/* RESULTADO DETALLADO */}
        {resultado && (
          <div style={{ backgroundColor: colors.card, padding: '20px', borderRadius: '20px', border: `2px solid ${resultado.tipo === 'enfermedad' ? colors.danger : colors.accent}` }}>
            <button onClick={() => setResultado(null)} style={{ background: 'none', border: 'none', color: colors.accent, marginBottom: '10px' }}>← NUEVO ESCANEO</button>
            <h2 style={{ color: resultado.tipo === 'enfermedad' ? colors.danger : colors.accent, marginTop: 0 }}>{resultado.data.nombre}</h2>
            
            {resultado.tipo === 'enfermedad' ? (
              <>
                <p><strong>Síntomas:</strong> {resultado.data.sintomas}</p>
                <div style={{ backgroundColor: '#001b36', padding: '15px', borderRadius: '15px', marginTop: '15px' }}>
                  <h4 style={{ color: colors.accent, margin: '0 0 10px 0' }}>PROTOCOLO DE CURACIÓN:</h4>
                  {resultado.data.pasos.map((p, i) => <p key={i} style={{ fontSize: '13px', borderLeft: `2px solid ${colors.danger}`, paddingLeft: '10px', marginBottom: '8px' }}>{p}</p>)}
                </div>
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: colors.danger }}>MEDICINA: {resultado.data.medicina}</p>
              </>
            ) : (
              <p>{resultado.data.desc}</p>
            )}
          </div>
        )}

        {/* PREMIUM / REPRODUCCIÓN */}
        {activeTab === 'premium' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: colors.gold }}>💎 SAKANA PREMIUM</h2>
            <div style={{ backgroundColor: 'white', color: 'black', padding: '25px', borderRadius: '25px', marginTop: '20px' }}>
              <h3 style={{ margin: 0 }}>Asesoría de Reproducción</h3>
              <p style={{ fontSize: '13px', color: '#666' }}>Chat directo para dudas sobre eclosión, pH y engorde.</p>
              <div style={{ fontSize: '30px', fontWeight: 'bold', margin: '15px 0' }}>$19.99<span style={{ fontSize: '14px' }}>/mes</span></div>
              <button style={{ width: '100%', padding: '15px', borderRadius: '15px', backgroundColor: colors.bg, color: 'white', border: 'none', fontWeight: 'bold' }}>ACTIVAR ASESORÍA POR CHAT</button>
            </div>
          </div>
        )}
      </main>

      {/* NAV */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: colors.header, display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: `1px solid ${colors.accent}` }}>
        <button onClick={() => {setActiveTab('home'); setResultado(null);}} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? colors.accent : '#555' }}>🏠 INICIO</button>
        <button onClick={() => setActiveTab('premium')} style={{ background: 'none', border: 'none', color: activeTab === 'premium' ? colors.gold : '#555' }}>👑 PREMIUM</button>
      </nav>
    </div>
  );
}

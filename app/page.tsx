
export default function DiscoAI() {
  const [analizando, setAnalizando] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ color: '#00d1ff', borderBottom: '2px solid #00d1ff', paddingBottom: '10px' }}>SAKANA DISCUS AI 🐠</h1>
      <p style={{ color: '#888' }}>Expert System v12.0 - Colombia/España</p>
      
      <div style={{ border: '2px dashed #333', padding: '50px', borderRadius: '20px', margin: '30px 0', cursor: 'pointer', backgroundColor: '#050505' }}
           onClick={() => { setAnalizando(true); setTimeout(() => setAnalizando(false), 2500); }}>
        <div style={{ fontSize: '50px' }}>📸</div>
        <h3>{analizando ? "Analizando ADN y Variedad..." : "Subir foto para Análisis"}</h3>
      </div>

      <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #ff4d4d', textAlign: 'left' }}>
        <h3 style={{ color: '#ff4d4d', margin: '0 0 10px 0' }}>🚨 PROTOCOLO PERMANGANATO ($KMnO_4$)</h3>
        <p><strong>Mezcla Madre:</strong> 2g de Permanganato en 500ml de agua destilada.</p>
        <p><strong>Dosis:</strong> 0.5ml de mezcla por cada 1 litro de agua del acuario.</p>
        <p><strong>Neutralizar:</strong> 4ml de Agua Oxigenada (3%) por cada 10L tras 60 minutos.</p>
      </div>

      <footer style={{ marginTop: '30px', color: '#444', fontSize: '12px' }}>
        © 2026 Sakana Discus - Sistema de Inteligencia Ictiológica
      </footer>
    </div>
  );
}
import React, { useState } from 'react';

export default function DiscoAI() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ color: '#00d1ff', borderBottom: '2px solid #00d1ff', paddingBottom: '10px' }}>SAKANA DISCUS AI 🐠</h1>
      <p style={{ color: '#888' }}>Sistema Experto - Colombia | España</p>
      
      <div style={{ border: '2px dashed #333', padding: '50px', borderRadius: '20px', margin: '30px 0', cursor: 'pointer', backgroundColor: '#050505' }}
           onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}>
        <div style={{ fontSize: '50px' }}>📸</div>
        <h3>{loading ? "Analizando ADN y Salud..." : "Toca para analizar variedad"}</h3>
      </div>

      <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #ff4d4d', textAlign: 'left' }}>
        <h3 style={{ color: '#ff4d4d', margin: '0 0 10px 0' }}>🚨 PROTOCOLO PERMANGANATO</h3>
        <p><strong>1. Mezcla:</strong> 2g KMnO4 en 500ml de agua destilada.</p>
        <p><strong>2. Dosis:</strong> 0.5ml de mezcla por cada 1 litro de acuario.</p>
        <p><strong>3. Tiempo:</strong> 60 min (Vigilar boqueo).</p>
        <p><strong>4. Neutralizar:</strong> Agua oxigenada al 3% tras 1 hora.</p>
      </div>

      <footer style={{ marginTop:

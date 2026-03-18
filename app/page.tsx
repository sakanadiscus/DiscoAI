"use client";
import React, { useState } from 'react';

export default function DiscoAI() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#000', color: '#fff', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ color: '#00d1ff', borderBottom: '2px solid #00d1ff', paddingBottom: '10px' }}>SAKANA DISCUS AI 🐠</h1>
      <p style={{ color: '#888' }}>Sistema Experto v12.0</p>
      
      <div style={{ border: '2px dashed #333', padding: '50px', borderRadius: '20px', margin: '30px 0', cursor: 'pointer', backgroundColor: '#050505' }}
           onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}>
        <div style={{ fontSize: '50px' }}>📸</div>
        <h3>{loading ? "Analizando variedad y salud..." : "Toca para analizar tu Disco"}</h3>
      </div>

      <div style={{ backgroundColor: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #ff4d4d', textAlign: 'left' }}>
        <h3 style={{ color: '#ff4d4d', margin: '0 0 10px 0' }}>🚨 PROTOCOLO PERMANGANATO</h3>
        <p><strong>1. Mezcla Madre:</strong> 2g KMnO4 en 500ml agua destilada.</p>
        <p><strong>2. Dosis:</strong> 0.5ml de mezcla por cada 1 litro de acuario.</p>
        <p><strong>3. Tiempo:</strong> 60 min (Vigilar boqueo constante).</p>
        <p><strong>4. Neutralizar:</strong> 4ml de Agua Oxigenada (3%) por cada 10L.</p>
      </div>

      <footer style={{ marginTop: '30px', color: '#444', fontSize: '12px' }}>
        Sakana Discus © 2026 - Colombia | España
      </footer>
    </div>
  );
}


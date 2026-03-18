"use client";
import React, { useState } from 'react';

export default function SakanaDiscusOriginal() {
  const [activeTab, setActiveTab] = useState('home');
  const [analizando, setAnalizando] = useState(false);

  // Estilos Originales
  const colors = {
    bg: '#001529',
    header: '#002140',
    accent: '#00d1ff',
    danger: '#ff4d4d',
    card: '#002c59'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: 'white', fontFamily: 'sans-serif' }}>
      {/* Header Original */}
      <header style={{ backgroundColor: colors.header, padding: '20px', textAlign: 'center', borderBottom: `3px solid ${colors.accent}` }}>
        <h1 style={{ margin: 0, color: colors.accent, fontSize: '26px', letterSpacing: '1px' }}>SAKANA DISCUS AI</h1>
        <p style={{ margin: '5px 0 0', fontSize: '12px', color: '#aaa' }}>SISTEMA EXPERTO DE SALUD Y GENÉTICA</p>
      </header>

      <main style={{ padding: '20px', paddingBottom: '80px' }}>
        {activeTab === 'home' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Pantalla Principal de Análisis */}
            <div style={{ backgroundColor: colors.card, borderRadius: '20px', padding: '40px 20px', textAlign: 'center', border: `1px solid ${colors.accent}`, boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
              <div style={{ fontSize: '60px', marginBottom: '15px' }}>📸</div>
              <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>DIAGNÓSTICO POR IA</h2>
              <p style={{ color: '#ccc', fontSize: '14px', marginBottom: '20px' }}>Sube una foto clara de tu pez Disco para analizar variedad o síntomas.</p>
              <button 
                onClick={() => { setAnalizando(true); setTimeout(() => setAnalizando(false), 2000); }}
                style={{ backgroundColor: colors.accent, color: colors.bg, border: 'none', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
                {analizando ? "PROCESANDO..." : "ESCANEAR AHORA"}
              </button>
            </div>

            {/* Accesos Rápidos Originales */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div onClick={() => setActiveTab('health')} style={{ backgroundColor: colors.header, padding: '20px', borderRadius: '15px', border: `1px solid ${colors.danger}`, textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '24px' }}>💊</span>
                <h3 style={{ fontSize: '14px', margin: '10px 0 0', color: colors.danger }}>URGENCIAS</h3>
              </div>
              <div onClick={() => setActiveTab('variedades')} style={{ backgroundColor: colors.header, padding: '20px', borderRadius: '15px', border: `1px solid ${colors.accent}`, textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '24px' }}>🧬</span>
                <h3 style={{ fontSize: '14px', margin: '10px 0 0', color: colors.accent }}>VARIEDADES</h3>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div style={{ animate: 'fadeIn 0.5s' }}>
            <button onClick={() => setActiveTab('home')} style={{ color: colors.accent, background: 'none', border: 'none', marginBottom: '20px', fontSize: '16px' }}>← VOLVER</button>
            <div style={{ backgroundColor: '#1a0000', padding: '20px', borderRadius: '15px', border: `1px solid ${colors.danger}` }}>
              <h2 style={{ color: colors.danger, borderBottom: `1px solid ${colors.danger}`, paddingBottom: '10px' }}>TRATAMIENTOS CRÍTICOS</h2>
              <div style={{ marginTop: '15px' }}>
                <h3 style={{ color: '#fff', fontSize: '16px' }}>Protocolo Permanganato (KMnO4)</h3>
                <p style={{ fontSize: '14px', color: '#ddd' }}>1. Mezcla: 2g en 500ml agua destilada.</p>
                <p style={{ fontSize: '14px', color: '#ddd' }}>2. Dosis: 0.5ml por cada litro de acuario.</p>
                <p style={{ fontSize: '14px', color: '#ddd' }}>3. Tiempo: 60 min con aireación máxima.</p>
                <p style={{ fontSize: '14px', color: '#ddd', fontWeight: 'bold' }}>4. Neutralizar: Agua Oxigenada 3% (4ml/10L).</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Menú de Navegación Inferior */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: colors.header, display: 'flex', justifyContent: 'space-around', padding: '15px 0', borderTop: `1px solid ${colors.accent}` }}>
        <div onClick={() => setActiveTab('home')} style={{ color: activeTab === 'home' ? colors.accent : '#666', cursor: 'pointer' }}>🏠 Inicio</div>
        <div onClick={() => setActiveTab('health')} style={{ color: activeTab === 'health' ? colors.accent : '#666', cursor: 'pointer' }}>⚕️ Salud</div>
        <div onClick={() => setActiveTab('variedades')} style={{ color: activeTab === 'variedades' ? colors.accent : '#666', cursor: 'pointer' }}>📊 Info</div>
      </nav>
    </div>
  );
}

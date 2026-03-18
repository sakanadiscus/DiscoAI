import React from 'react';

export default function DiscusHealthPage() {
  const diseases = [
    {
      name: "Hexamita (Agujeros en la cabeza)",
      symptoms: "Pequeños orificios en la zona de la cabeza, heces blancas y viscosas, aislamiento del grupo.",
      treatment: "Metronidazol (250mg por cada 40 litros). Subir temperatura a 32°C gradualmente."
    },
    {
      name: "Dactylogyrus (Parásitos branquiales)",
      symptoms: "Respiración agitada, el pez usa solo un opérculo, se rasca contra objetos.",
      treatment: "Praziquantel o Permanganato de Potasio (con precaución). Baños de sal."
    },
    {
      name: "Columnaris (Hongo en la boca)",
      symptoms: "Manchas blancas algodonosas alrededor de la boca y aletas.",
      treatment: "Antibióticos como Furan-2 o Kanaplex. Reducir temperatura a 28°C."
    },
    {
      name: "Podredumbre de Aletas",
      symptoms: "Bordes de las aletas deshilachados, blancos o con sangre.",
      treatment: "Mejorar calidad del agua (cambios diarios). Uso de Acriflavina o Azul de Metileno."
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', borderBottom: '2px solid #00ffff', paddingBottom: '20px' }}>
        <h1 style={{ color: '#00ffff', fontSize: '28px' }}>
          

import  { useState } from "react";
import chroma from "chroma-js";
import './App.css'

function App() {
  const [color, setColor] = useState("#000000");

  const getShades = (color) => {
    const scale = chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(2)]).colors(25);
    return scale;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied ${text} to clipboard!`);
  };

  const shades = getShades(color);

  return (
    <div style={{marginTop:'20px', justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
      <h1 className="font-semibold" style={{fontSize:30}}>Color Picker Tool</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ width: "200px", height: "100px",justifyContent:'center',alignItems:'center' }}
      />
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        Selected Color: {color}
        <button onClick={() => copyToClipboard(color)} style={{ marginLeft: "10px", padding: "5px 10px" }}>
          Copy
        </button>
      </div>
    <div className="h-screen w-full" style={{ textAlign: "center", padding: "20px", backgroundColor:color }}>
      <div style={{ marginTop: "40px" }}>
        <h2 style={{fontSize:30}} >Shades</h2>
        <div style={{ display: "flex", justifyContent: "center", margin: "50px", height:'200px', flexWrap:'wrap' }}>
          {shades.map((shade, index) => (
            <div className="cursor-pointer flex-wrap" key={index} style={{ width: "50px", height: "50px", margin:'20px', backgroundColor: shade }}  onClick={() => copyToClipboard(shade)}>
              <p style={{ fontSize: "12px", color: "#fff", height:
              '50px', marginTop: "60px", marginBottom:'60px' }}>{shade}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

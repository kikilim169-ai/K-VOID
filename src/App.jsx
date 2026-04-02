import React from "react";

export default function App() {
  return (
    <div style={{background:"black",color:"white",fontFamily:"Arial"}}>

      <nav style={{position:"fixed",top:0,width:"100%",padding:"20px",display:"flex",justifyContent:"space-between",borderBottom:"1px solid #222",background:"rgba(0,0,0,0.8)"}}>
        <h1 style={{letterSpacing:"6px"}}>K-VOID</h1>
        <div>
          <a href="#home" style={{marginRight:"15px"}}>Home</a>
          <a href="#shop" style={{marginRight:"15px"}}>Shop</a>
          <a href="https://instagram.com/kvoid.co" target="_blank">IG</a>
        </div>
      </nav>

      <section id="home" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <h2 style={{fontSize:"64px"}}>ENTER THE VOID</h2>
        <p style={{color:"#aaa"}}>Train in silence. Dominate in darkness.</p>
      </section>

      <section id="shop" style={{padding:"100px 20px"}}>
        <h2 style={{textAlign:"center"}}>COLLECTION</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
          {["VOID TEE RM89","SHADOW SHORTS RM79","DARK HOODIE RM129"].map((item,i)=>(
            <div key={i} style={{background:"#111",padding:"20px"}}>
              <div style={{height:"150px",background:"#222",marginBottom:"10px"}}></div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>FOLLOW US</h2>
        <a href="https://instagram.com/kvoid.co" target="_blank" style={{display:"inline-block",marginTop:"20px",padding:"12px 24px",border:"1px solid white",color:"white",textDecoration:"none"}}>
          @KVOID.CO
        </a>
      </section>

      <footer style={{textAlign:"center",padding:"20px",borderTop:"1px solid #222"}}>
        © 2026 K-VOID
      </footer>

    </div>
  );
}

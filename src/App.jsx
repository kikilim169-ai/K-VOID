import React from "react";

export default function App() {
  return (
    <div style={{background:"black",color:"white",fontFamily:"sans-serif"}}>
      <nav style={{position:"fixed",top:0,width:"100%",display:"flex",justifyContent:"space-between",padding:"20px",borderBottom:"1px solid #222",background:"rgba(0,0,0,0.7)"}}>
        <h1 style={{letterSpacing:"6px"}}>K-VOID</h1>
        <div>
          <a href="#home" style={{marginRight:"15px"}}>Home</a>
          <a href="#shop" style={{marginRight:"15px"}}>Shop</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section id="home" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <h2 style={{fontSize:"60px"}}>ENTER THE VOID</h2>
        <p style={{color:"#aaa"}}>Built in darkness. Move different.</p>
      </section>

      <section id="shop" style={{padding:"100px 20px"}}>
        <h3 style={{textAlign:"center"}}>COLLECTION</h3>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
          {["VOID TEE RM89","SHADOW SHORTS RM79","DARK HOODIE RM129"].map((item,i)=>(
            <div key={i} style={{background:"#111",padding:"20px"}}>
              <div style={{height:"150px",background:"#222"}}></div>
              <h4>{item}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{padding:"100px 20px",textAlign:"center"}}>
        <h3>ABOUT</h3>
        <p style={{color:"#aaa"}}>
          K-VOID is not just apparel. Built for those who move in silence.
        </p>
      </section>

      <footer style={{textAlign:"center",padding:"20px",borderTop:"1px solid #222"}}>
        © 2026 K-VOID
      </footer>
    </div>
  );
}

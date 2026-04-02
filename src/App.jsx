import React from "react";

const products = [
  {name:"VOID TEE", price:"RM89"},
  {name:"SHADOW SHORTS", price:"RM79"},
  {name:"DARK HOODIE", price:"RM129"},
  {name:"VOID CAP", price:"RM49"}
];

export default function App() {
  return (
    <div style={{background:"black",color:"white",fontFamily:"Arial"}}>

      <nav style={{position:"fixed",top:0,width:"100%",padding:"20px",display:"flex",justifyContent:"space-between",borderBottom:"1px solid #222",background:"rgba(0,0,0,0.8)"}}>
        <h1 style={{letterSpacing:"6px"}}>K-VOID</h1>
        <div>
          <a href="#home" style={{marginRight:"15px"}}>Home</a>
          <a href="#shop" style={{marginRight:"15px"}}>Shop</a>
          <a href="#about" style={{marginRight:"15px"}}>About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <h2 style={{fontSize:"64px"}}>ENTER THE VOID</h2>
        <p style={{color:"#aaa"}}>Train in silence. Dominate in darkness.</p>
      </section>

      <section id="shop" style={{padding:"100px 20px"}}>
        <h2 style={{textAlign:"center"}}>COLLECTION</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
          {products.map((p,i)=>(
            <div key={i} style={{background:"#111",padding:"20px"}}>
              <div style={{height:"150px",background:"#222",marginBottom:"10px"}}></div>
              <h3>{p.name}</h3>
              <p>{p.price}</p>
              <button style={{width:"100%",padding:"10px",marginTop:"10px"}}>BUY</button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>ABOUT</h2>
        <p style={{color:"#aaa",maxWidth:"600px",margin:"auto"}}>
          K-VOID is a dark performance wear brand built for those who reject limits and embrace discipline.
        </p>
      </section>

      <section id="contact" style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>CONTACT</h2>
        <p style={{color:"#aaa"}}>Instagram: @kvoid</p>
      </section>

      <footer style={{textAlign:"center",padding:"20px",borderTop:"1px solid #222"}}>
        © 2026 K-VOID
      </footer>

    </div>
  );
}

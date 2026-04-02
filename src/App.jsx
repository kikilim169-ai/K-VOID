import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <nav style={{display:'flex',justifyContent:'space-between',padding:'20px',borderBottom:'1px solid #333'}}>
        <h1>K-VOID</h1>
        <div>
          <span style={{marginRight:'15px'}}>Home</span>
          <span style={{marginRight:'15px'}}>Shop</span>
          <span>Contact</span>
        </div>
      </nav>

      <section style={{textAlign:'center',padding:'80px 20px'}}>
        <h2 style={{fontSize:'40px'}}>TRAIN IN THE VOID</h2>
        <p style={{color:'#aaa'}}>Premium gym wear for performance and style.</p>
      </section>

      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'20px',padding:'20px'}}>
        {["Compression Tee RM89","Gym Shorts RM79","Hoodie RM129"].map((item,i)=>(
          <div key={i} style={{background:'#111',padding:'20px',borderRadius:'10px'}}>
            <div style={{height:'120px',background:'#222',marginBottom:'10px'}}></div>
            <h3>{item}</h3>
          </div>
        ))}
      </section>

      <footer style={{textAlign:'center',padding:'20px',borderTop:'1px solid #333'}}>
        © 2026 K-VOID
      </footer>
    </div>
  );
}

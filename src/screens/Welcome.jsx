import { useState } from 'react';
import { Icons } from '../icons.jsx';
import { BaiaLogo } from '../components.jsx';

export const Welcome = ({ onContinue }) => {
  const choices = [
    { key:'guest', icon: Icons.Door, label: "I'm a Guest", sub: 'Explore our resort', target: 'guest-portal' },
    { key:'staff', icon: Icons.Users, label: 'Staff', sub: 'Access staff systems', target: 'dashboard' },
    { key:'admin', icon: Icons.Shield, label: 'Admin', sub: 'Administrative access', target: 'dashboard' },
  ];
  return (
    <div style={{position:'relative', minHeight:'100vh', overflow:'hidden'}} data-screen-label="Welcome">
      <div className="welcome-bg">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=2000&q=80&auto=format" alt=""
          style={{filter:'brightness(0.65) saturate(0.9) hue-rotate(-8deg)'}}/>
      </div>
      <div className="ambient" style={{left:'-10%', top:'10%', width:520, height:520, background:'radial-gradient(closest-side, rgba(212,178,122,0.18), transparent)'}}/>
      <div className="ambient" style={{right:'-10%', bottom:'5%', width:600, height:600, background:'radial-gradient(closest-side, rgba(45,212,191,0.12), transparent)'}}/>

      <svg style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', opacity:0.5}}>
        {Array.from({length:50}).map((_,i)=>(
          <circle key={i} cx={`${Math.random()*100}%`} cy={`${Math.random()*60}%`} r={Math.random()*1.2+0.2} fill="#fff" opacity={Math.random()*0.6+0.2}/>
        ))}
      </svg>

      <div style={{position:'relative', zIndex:2, minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', padding:'70px 24px 48px'}}>
        <div style={{textAlign:'center'}}>
          <BaiaLogo size={66} variant="stacked"/>
          <div style={{marginTop: 14, fontSize:12, letterSpacing:'0.42em', color:'#A99572'}}>SAN VICENTE · PALAWAN</div>
        </div>

        <div style={{textAlign:'center', width:'100%', maxWidth: 520}}>
          <h1 className="serif" style={{fontSize: 56, margin:0, fontWeight:500, letterSpacing:'-0.005em', color:'#F4EBDB'}}>Welcome</h1>
          <p style={{margin:'12px 0 32px', color:'rgba(244,235,219,0.7)', fontSize:15}}>Please select how you'd like to continue</p>

          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            {choices.map(c => {
              const Icn = c.icon;
              return (
                <button key={c.key} onClick={()=>onContinue(c.target)} className="glass"
                  style={{display:'flex', alignItems:'center', gap:18, width:'100%', padding:'18px 22px', borderRadius:14, color:'#F4EBDB', textAlign:'left', transition:'all .25s ease'}}
                  onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 0 0 1px rgba(212,178,122,0.4), 0 20px 60px -10px rgba(212,178,122,0.25)';}}
                  onMouseLeave={(e)=>{e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='';}}
                >
                  <div style={{width:46, height:46, borderRadius:11, border:'1px solid rgba(244,235,219,0.18)', display:'grid', placeItems:'center', color:'#D4B27A', flex:'0 0 46px'}}>
                    <Icn size={22}/>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:500, lineHeight:1.15}}>{c.label}</div>
                    <div style={{fontSize:13, color:'rgba(244,235,219,0.6)', marginTop:2}}>{c.sub}</div>
                  </div>
                  <Icons.ChevronRight size={20} style={{color:'rgba(244,235,219,0.55)'}}/>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{textAlign:'center', color:'rgba(244,235,219,0.6)'}}>
          <div style={{fontSize:11, letterSpacing:'0.38em'}}>BAIA · WHERE NATURE WELCOMES YOU HOME</div>
          <svg width="48" height="10" viewBox="0 0 48 10" style={{marginTop:8, opacity:0.6}}>
            <path d="M2 5 Q12 0 24 5 T46 5" stroke="#D4B27A" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

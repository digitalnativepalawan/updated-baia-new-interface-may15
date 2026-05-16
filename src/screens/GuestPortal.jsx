import { useState } from 'react';
import { Icons } from '../icons.jsx';
import { Avatar, BaiaLogo, BottomNav, TopBarRight } from '../components.jsx';

export const GuestPortal = ({ onNavigate }) => {
  const [view, setView] = useState('dashboard');

  const nav = [
    { key:'dashboard', label:'Dashboard', icon: Icons.Home },
    { key:'stay', label:'My Stay', icon: Icons.Calendar },
    { key:'services', label:'Services', icon: Icons.Bell },
    { key:'dining', label:'Dining', icon: Icons.Knife },
    { key:'experiences', label:'Experiences', icon: Icons.MapPin },
    { key:'bills', label:'Bills & Payments', icon: Icons.Wallet },
    { key:'messages', label:'Messages', icon: Icons.Chat, badge:2 },
    { key:'local', label:'Local Guide', icon: Icons.MapPin },
    { key:'settings', label:'Settings', icon: Icons.Cog },
  ];

  return (
    <div style={{display:'grid', gridTemplateColumns:'248px 1fr', minHeight:'100vh'}} data-screen-label="Guest Portal">
      <aside style={{padding:'24px 18px', borderRight:'1px solid var(--line)', display:'flex', flexDirection:'column', gap: 12, position:'sticky', top:0, height:'100vh', overflow:'auto'}}>
        <div style={{padding:'10px 12px 22px'}}>
          <BaiaLogo size={48}/>
        </div>
        <nav style={{display:'flex', flexDirection:'column', gap:4}}>
          {nav.map(it=>{
            const I = it.icon;
            const isActive = view === it.key;
            return (
              <div key={it.key} className={"nav-item " + (isActive?'active':'')} onClick={()=>setView(it.key)}>
                <I className="nav-ic" size={18}/>
                <span style={{flex:1}}>{it.label}</span>
                {it.badge && <span style={{minWidth:18, height:18, padding:'0 6px', borderRadius:999, background:'#EF4444', color:'#fff', fontSize:10, fontWeight:600, display:'grid', placeItems:'center'}}>{it.badge}</span>}
              </div>
            );
          })}
        </nav>

        <div style={{marginTop:'auto'}}>
          <div style={{padding:'16px 14px', border:'1px solid var(--line)', borderRadius:14, background:'linear-gradient(180deg, rgba(212,178,122,0.05), rgba(255,255,255,0))', textAlign:'center'}}>
            <div style={{width:48, height:48, borderRadius:999, background:'rgba(212,178,122,0.10)', border:'1px solid rgba(212,178,122,0.30)', display:'grid', placeItems:'center', margin:'0 auto 10px', color:'var(--gold-2)'}}>
              <Icons.Headset size={20}/>
            </div>
            <div style={{fontFamily:'var(--font-display)', fontSize:15, color:'var(--text)'}}>Need Help?</div>
            <div style={{fontSize:12, color:'var(--muted)', marginTop:4}}>We're here for you<br/>24/7</div>
            <button className="btn-ghost-gold" style={{width:'100%', marginTop:12, height:38, borderRadius:10}}>Contact Us</button>
          </div>
          <button onClick={()=>onNavigate('welcome')} style={{display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10, color:'var(--gold-2)', marginTop: 8, width:'100%'}}>
            <Icons.Logout size={16}/> <span style={{fontSize:14}}>Log out</span>
          </button>
        </div>
      </aside>

      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <div style={{padding:'28px 32px 120px', maxWidth: 1320, margin:'0 auto', width:'100%'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, marginBottom:24}}>
            <div>
              <h1 className="serif" style={{margin:0, fontSize:34, fontWeight:500, letterSpacing:'-0.01em'}}>Guest Portal</h1>
              <div style={{color:'var(--text-2)', fontSize:14, marginTop:4}}>Welcome back, James <span style={{display:'inline-block', transform:'rotate(8deg)'}}>👋</span></div>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:18}}>
              <button style={{display:'inline-flex', alignItems:'center', gap:8, padding:'9px 14px', borderRadius:10, border:'1px solid var(--line)', color:'var(--text-2)', fontSize:14}}>
                <Icons.Globe size={16}/> English <Icons.ChevronDown size={14}/>
              </button>
              <button style={{position:'relative', width:38, height:38, borderRadius:12, border:'1px solid var(--line)', display:'grid', placeItems:'center', color:'var(--text-2)'}}>
                <Icons.Bell size={18}/>
                <span style={{position:'absolute', top:-4, right:-4, minWidth:18, height:18, padding:'0 5px', borderRadius:999, background:'#EF4444', color:'#fff', fontSize:10, display:'grid', placeItems:'center', fontWeight:600}}>3</span>
              </button>
              <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=60&auto=format" online size={40} name="James"/>
            </div>
          </div>

          <div className="lux-card" style={{padding:0, overflow:'hidden', marginBottom:18}}>
            <div style={{display:'grid', gridTemplateColumns:'1.05fr 1fr', minHeight:340}}>
              <div style={{position:'relative'}}>
                <img src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1400&q=70&auto=format" alt="Beach Villa"
                  style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, transparent 60%, rgba(11,20,38,0.6))'}}/>
              </div>
              <div style={{padding:'32px 30px'}}>
                <span className="pill gold" style={{height:28}}>Upcoming Stay</span>
                <div style={{fontFamily:'var(--font-display)', fontSize:42, color:'var(--text)', fontWeight:500, marginTop:14, lineHeight:1.1}}>Beach Villa #2</div>
                <div style={{color:'var(--muted)', fontSize:14, marginTop:6}}>Ocean View</div>

                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:30, paddingTop:20, borderTop:'1px solid var(--line)'}}>
                  <div>
                    <div style={{color:'var(--muted)', fontSize:12, display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={12}/> CHECK-IN</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--text)', marginTop:6}}>May 24, 2025</div>
                    <div style={{color:'var(--muted)', fontSize:13}}>3:00 PM</div>
                  </div>
                  <div>
                    <div style={{color:'var(--muted)', fontSize:12, display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={12}/> CHECK-OUT</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--text)', marginTop:6}}>May 28, 2025</div>
                    <div style={{color:'var(--muted)', fontSize:13}}>11:00 AM</div>
                  </div>
                </div>

                <div style={{display:'flex', alignItems:'center', gap:24, marginTop:22, paddingTop:18, borderTop:'1px solid var(--line)', color:'var(--text-2)', fontSize:14}}>
                  <span style={{display:'inline-flex', alignItems:'center', gap:8}}><Icons.Users size={16}/> 2 Adults, 0 Children</span>
                  <span style={{display:'inline-flex', alignItems:'center', gap:8}}><Icons.Moon size={16}/> 4 Nights</span>
                </div>

                <button className="btn-ghost-gold" style={{marginTop:22, height:44, padding:'0 22px', borderRadius:11, display:'inline-flex', alignItems:'center', gap:10}}>
                  View Reservation <Icons.ChevronRight size={16}/>
                </button>
              </div>
            </div>
          </div>

          <div className="lux-card" style={{marginBottom:18}}><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:22}}>Quick Actions</div>
              <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:14}}>
              {[
                {label:'Request Service', icon: Icons.Bell, color:'#60A5FA'},
                {label:'Book Dining', icon: Icons.Knife, color:'#34D399'},
                {label:'Spa Booking', icon: Icons.Spa, color:'#A78BFA'},
                {label:'Activities & Tours', icon: Icons.Bike, color:'#F59E0B'},
                {label:'Room Preferences', icon: Icons.Cog, color:'#60A5FA'},
                {label:'Early Check-in', icon: Icons.Clock, color:'#2DD4BF'},
              ].map(q=>{
                const I = q.icon;
                return (
                  <button key={q.label} className="tile-glow"
                    style={{padding:'18px 14px', borderRadius:14, border:`1px solid ${q.color}25`, background:`linear-gradient(180deg, ${q.color}10, transparent 70%), rgba(255,255,255,0.02)`,
                      display:'flex', flexDirection:'column', alignItems:'center', gap:10, transition:'all .18s ease'}}>
                    <div style={{width:42, height:42, borderRadius:11, color:q.color, background:`${q.color}14`, border:`1px solid ${q.color}30`, display:'grid', placeItems:'center'}}>
                      <I size={20}/>
                    </div>
                    <div style={{fontSize:12.5, color:'var(--text-2)', textAlign:'center', lineHeight:1.3}}>{q.label}</div>
                  </button>
                );
              })}
            </div>
          </div></div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:16, marginBottom:18}}>
            <div className="lux-card"><div className="inner">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Stay Details</div>
                <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
              </div>
              {[
                {ic: Icons.Receipt, label:'Reservation ID', val:'#1058'},
                {ic: Icons.Door, label:'Room Type', val:'Beach Villa #2'},
                {ic: Icons.Crown, label:'Plan', val:'Bed & Breakfast'},
                {ic: Icons.Users, label:'Guests', val:'2 Adults'},
                {ic: Icons.Diamond, label:'Special Request', val:'Anniversary Setup'},
              ].map((r,i)=>{
                const I = r.ic;
                return (
                  <div key={i} style={{display:'flex', alignItems:'center', gap:12, padding:'10px 0', borderBottom: i<4 ? '1px solid var(--line)':'none'}}>
                    <I size={15} style={{color:'var(--gold-2)'}}/>
                    <div style={{flex:1}}>
                      <div style={{fontSize:12, color:'var(--muted)'}}>{r.label}</div>
                      <div style={{fontSize:13.5, color:'var(--text)'}}>{r.val}</div>
                    </div>
                  </div>
                );
              })}
              <button className="btn-ghost-gold" style={{width:'100%', marginTop:14, height:40, borderRadius:10}}>Manage Booking</button>
            </div></div>

            <div className="lux-card"><div className="inner">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Services</div>
                <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
              </div>
              {[
                {ic: Icons.Bed, color:'#60A5FA', name:'Airport Transfer', date:'May 24, 12:00 PM', status:'Confirmed', sColor:'#34D399'},
                {ic: Icons.Crown, color:'#FBBF24', name:'Romantic Dinner', date:'May 25, 7:00 PM', status:'Confirmed', sColor:'#34D399'},
                {ic: Icons.Spa, color:'#A78BFA', name:'Spa Treatment', date:'May 26, 2:00 PM', status:'Scheduled', sColor:'#60A5FA'},
                {ic: Icons.Calendar, color:'#34D399', name:'Late Check-out', date:'May 28, 2:00 PM', status:'Requested', sColor:'#F59E0B'},
              ].map((s,i)=>{
                const I = s.ic;
                return (
                  <div key={i} style={{display:'flex', alignItems:'center', gap:12, padding:'12px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                    <div style={{width:32, height:32, borderRadius:9, color:s.color, background:`${s.color}10`, border:`1px solid ${s.color}25`, display:'grid', placeItems:'center'}}>
                      <I size={15}/>
                    </div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:13.5, color:'var(--text)'}}>{s.name}</div>
                      <div style={{fontSize:12, color:'var(--muted)'}}>{s.date}</div>
                    </div>
                    <div style={{color:s.sColor, fontSize:12}}>{s.status}</div>
                  </div>
                );
              })}
              <button className="btn-ghost-gold" style={{width:'100%', marginTop:14, height:40, borderRadius:10}}>Request New Service</button>
            </div></div>

            <div className="lux-card"><div className="inner">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Messages</div>
                <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
              </div>
              {[
                {from:'Resort Team', initial:'R', color:'#60A5FA', time:'10:30 AM', body:"Welcome to BAIA Boutique! Let us know if you need…"},
                {from:'Concierge', initial:'C', color:'#34D399', time:'Yesterday', body:'Your dinner reservation is confirmed.'},
                {from:'Spa', initial:'S', color:'#A78BFA', time:'May 20', body:'Reminder: You have a spa appointment tomorrow.'},
              ].map((m,i)=>(
                <div key={i} style={{display:'flex', alignItems:'flex-start', gap:12, padding:'12px 0', borderBottom: i<2 ? '1px solid var(--line)':'none'}}>
                  <div style={{width:36, height:36, borderRadius:999, color:m.color, background:`${m.color}10`, border:`1px solid ${m.color}30`, display:'grid', placeItems:'center', fontSize:14, fontFamily:'var(--font-display)'}}>{m.initial}</div>
                  <div style={{flex:1}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <div style={{fontSize:13.5, color:'var(--text)'}}>{m.from}</div>
                      <div style={{fontSize:11, color:'var(--muted)'}}>{m.time}</div>
                    </div>
                    <div style={{fontSize:12.5, color:'var(--muted)', marginTop:4, lineHeight:1.5}}>{m.body}</div>
                  </div>
                </div>
              ))}
            </div></div>
          </div>

          <div className="lux-card" style={{marginBottom:18}}><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:20}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:22}}>Activity Timeline</div>
              <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:14, position:'relative'}}>
              <div style={{position:'absolute', top:30, left:'10%', right:'10%', height:1, background:'rgba(255,255,255,0.08)'}}/>
              {[
                {ic: Icons.Calendar, color:'#34D399', date:'May 10, 2025', title:'Reservation Confirmed', time:'10:24 AM'},
                {ic: Icons.CreditCard, color:'#60A5FA', date:'May 10, 2025', title:'Payment Received', time:'10:24 AM'},
                {ic: Icons.Bell, color:'#A78BFA', date:'May 15, 2025', title:'Romantic Dinner Booked', time:'2:15 PM'},
                {ic: Icons.Spa, color:'#FBBF24', date:'May 20, 2025', title:'Spa Treatment Scheduled', time:'9:00 AM'},
                {ic: Icons.Plane, color:'#2DD4BF', date:'May 22, 2025', title:'Airport Transfer Confirmed', time:'11:30 AM'},
              ].map((t,i)=>{
                const I = t.ic;
                return (
                  <div key={i} style={{position:'relative', textAlign:'center'}}>
                    <div style={{width:60, height:60, borderRadius:999, color:t.color, background:'var(--bg-0)', border:`1px solid ${t.color}40`, display:'grid', placeItems:'center', margin:'0 auto', position:'relative', zIndex:2}}>
                      <I size={22}/>
                    </div>
                    <div style={{fontSize:11, color:'var(--muted)', marginTop:12}}>{t.date}</div>
                    <div style={{fontSize:13, color:'var(--text)', marginTop:4, lineHeight:1.4}}>{t.title}</div>
                    <div style={{fontSize:11, color:'var(--muted)', marginTop:4}}>{t.time}</div>
                  </div>
                );
              })}
            </div>
          </div></div>

          <div className="lux-card" style={{padding:0, overflow:'hidden'}}>
            <div style={{display:'grid', gridTemplateColumns:'320px 1fr auto', alignItems:'center', minHeight:130}}>
              <div style={{position:'relative', height:'100%', minHeight:130}}>
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=70&auto=format" alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                <div style={{position:'absolute', inset:0, background:'linear-gradient(90deg, transparent 60%, rgba(11,20,38,0.85))'}}/>
              </div>
              <div style={{padding:'20px 26px'}}>
                <div style={{color:'var(--gold-2)', fontSize:11, letterSpacing:'0.22em', fontWeight:500}}>EXCLUSIVE OFFER</div>
                <div style={{fontFamily:'var(--font-display)', fontSize:24, color:'var(--text)', marginTop:6}}>Sunset Dinner Experience</div>
                <div style={{color:'var(--muted)', fontSize:13, marginTop:6}}>Enjoy a private 3-course dinner by the beach.</div>
              </div>
              <div style={{padding:'20px 26px', textAlign:'center'}}>
                <button className="btn-primary" style={{height:42, padding:'0 22px', borderRadius:11}}>Book Now</button>
                <div style={{fontSize:11, color:'var(--muted)', marginTop:8}}>Limited availability</div>
              </div>
            </div>
          </div>
        </div>
        <BottomNav active="dashboard" onNavigate={()=>{}} notifications={2}/>
      </div>
    </div>
  );
};

import { Icons } from '../icons.jsx';
import { Avatar, BaiaLogo } from '../components.jsx';

export const GuestMobile = ({ onNavigate }) => {
  return (
    <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'flex-start', padding:'24px 20px 80px', background:'var(--bg-0)'}} data-screen-label="Guest Mobile">
      <div style={{width:'100%', maxWidth: 460}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14}}>
          <button onClick={()=>onNavigate('welcome')} style={{color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            <Icons.ArrowLeft size={16}/> Back
          </button>
          <button onClick={()=>onNavigate('guest-portal')} style={{color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            Desktop view <Icons.ArrowRight size={16}/>
          </button>
        </div>

        <div style={{display:'flex', alignItems:'flex-start', gap:14, marginBottom:18}}>
          <BaiaLogo size={42}/>
          <div style={{flex:1, marginLeft:6}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:24, color:'var(--text)', fontWeight:500, lineHeight:1.1}}>
              Hello, James! <span style={{display:'inline-block', transform:'rotate(8deg)'}}>👋</span>
            </div>
            <div style={{color:'var(--text-2)', fontSize:13, marginTop:6}}>Welcome to <span style={{color:'var(--text)'}}>BAIA Boutique</span></div>
            <div style={{color:'var(--muted)', fontSize:12, marginTop:2}}>We're here to make your stay exceptional.</div>
          </div>
          <button style={{position:'relative', width:34, height:34, display:'grid', placeItems:'center', color:'var(--text-2)'}}>
            <Icons.Bell size={22}/>
            <span style={{position:'absolute', top:-2, right:-2, minWidth:16, height:16, padding:'0 4px', borderRadius:999, background:'#EF4444', color:'#fff', fontSize:9, display:'grid', placeItems:'center', fontWeight:600}}>2</span>
          </button>
          <Avatar size={42} online src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=60&auto=format" name="James"/>
        </div>

        <div className="lux-card" style={{padding:0, overflow:'hidden', marginBottom:16}}>
          <div style={{position:'relative', height:200}}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=70&auto=format" alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
            <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(4,9,26,0.05), rgba(4,9,26,0.65))'}}/>
          </div>
          <div style={{padding:'18px 20px 20px'}}>
            <div style={{color:'var(--gold-2)', fontSize:11, letterSpacing:'0.18em', fontWeight:500}}>UPCOMING STAY</div>
            <div style={{fontFamily:'var(--font-display)', fontSize:32, color:'var(--text)', marginTop:6, lineHeight:1.1}}>Beach Villa #2</div>
            <div style={{display:'flex', alignItems:'center', gap:6, color:'var(--text-2)', fontSize:13, marginTop:6}}>
              <Icons.MapPin size={13}/> Ocean View
            </div>

            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:18, paddingTop:16, borderTop:'1px solid var(--line)'}}>
              <div>
                <div style={{color:'var(--muted)', fontSize:10, letterSpacing:'0.18em', display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={11}/> CHECK-IN</div>
                <div style={{fontSize:17, color:'var(--text)', marginTop:5}}>May 24, 2025</div>
                <div style={{fontSize:12, color:'var(--muted)'}}>3:00 PM</div>
              </div>
              <div>
                <div style={{color:'var(--muted)', fontSize:10, letterSpacing:'0.18em', display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={11}/> CHECK-OUT</div>
                <div style={{fontSize:17, color:'var(--text)', marginTop:5}}>May 28, 2025</div>
                <div style={{fontSize:12, color:'var(--muted)'}}>11:00 AM</div>
              </div>
            </div>

            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:14, paddingTop:14, borderTop:'1px solid var(--line)', color:'var(--text-2)', fontSize:13}}>
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Icons.Users size={14}/> 2 Adults, 0 Children</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:6}}><Icons.Moon size={14}/> 4 Nights</span>
            </div>

            <button onClick={()=>onNavigate('reservation')} className="btn-ghost-gold" style={{marginTop:16, width:'100%', height:42, borderRadius:10, display:'inline-flex', alignItems:'center', justifyContent:'center', gap:10}}>
              View Reservation <Icons.ChevronRight size={16}/>
            </button>
          </div>
        </div>

        <div className="lux-card" style={{padding:'20px', marginBottom:16}}>
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:14}}>How can we help you today?</div>
          {[
            {ic: Icons.Knife, label:'Order Food', sub:'Browse our menu and order to your room', color:'#D4B27A'},
            {ic: Icons.Cup, label:'Order Drinks', sub:'Cocktails, coffee, fresh juices & more', color:'#FBBF24'},
            {ic: Icons.Leaf, label:'Book Experiences', sub:'Tours, transport & equipment rental', color:'#34D399'},
            {ic: Icons.Chat, label:'Request Service', sub:'Housekeeping, towels, or anything you need', color:'#60A5FA'},
            {ic: Icons.Bell, label:'Message Reception', sub:'Send a note directly to our front desk', color:'#A78BFA'},
          ].map((q,i)=>{
            const I = q.ic;
            return (
              <button key={q.label} className="row-hover"
                style={{width:'100%', display:'flex', alignItems:'center', gap:14, padding:'12px 4px', borderBottom: i<4 ? '1px solid var(--line)':'none', textAlign:'left'}}>
                <div style={{width:44, height:44, borderRadius:999, color:q.color, background:`${q.color}0E`, border:`1px solid ${q.color}28`, display:'grid', placeItems:'center', flexShrink:0}}>
                  <I size={18}/>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:18, color:'var(--text)'}}>{q.label}</div>
                  <div style={{fontSize:12, color:'var(--muted)', marginTop:2}}>{q.sub}</div>
                </div>
                <Icons.ChevronRight size={16} style={{color:'var(--muted)'}}/>
              </button>
            );
          })}
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:10, marginBottom:24}}>
          {[
            {ic: Icons.Clipboard, label:'My Orders', sub:'Track your orders'},
            {ic: Icons.CheckCircle, label:'My Requests', sub:'View your requests'},
            {ic: Icons.Receipt, label:'My Bill', sub:'Check your statement'},
            {ic: Icons.Star, label:'Reviews', sub:'Share your experience'},
            {ic: Icons.Info, label:'Hotel Info', sub:'Explore hotel information'},
          ].map((q,i)=>{
            const I = q.ic;
            return (
              <button key={i} style={{padding:'14px 8px', borderRadius:12, border:'1px solid var(--line)', background:'rgba(255,255,255,0.02)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, textAlign:'center'}}>
                <I size={20} style={{color:'var(--gold-2)'}}/>
                <div style={{fontSize:11.5, color:'var(--text)', fontWeight:500, lineHeight:1.2}}>{q.label}</div>
                <div style={{fontSize:10, color:'var(--muted)', lineHeight:1.3}}>{q.sub}</div>
              </button>
            );
          })}
        </div>

        <div style={{textAlign:'center', position:'relative'}}>
          <button onClick={()=>onNavigate('welcome')} style={{color:'var(--gold-2)', display:'inline-flex', alignItems:'center', gap:8, fontSize:14, padding:'8px 16px'}}>
            <Icons.Logout size={16}/> Sign out
          </button>
          <button style={{position:'fixed', bottom:24, right:24, width:60, height:60, borderRadius:999, background:'linear-gradient(180deg, #E8C893, #C9A36C)', color:'#1A1208', display:'grid', placeItems:'center', boxShadow:'0 20px 50px -10px rgba(212,178,122,0.5), 0 0 0 4px rgba(212,178,122,0.10)'}}>
            <Icons.Chat size={22}/>
            <span style={{position:'absolute', top:6, right:6, width:10, height:10, borderRadius:999, background:'#34D399', boxShadow:'0 0 0 2px #1A1208'}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

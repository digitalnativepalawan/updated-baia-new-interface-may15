import { Icons } from '../icons.jsx';
import { Avatar, SectionHeading, Donut, TopBarRight } from '../components.jsx';

export const Dashboard = ({ onNavigate }) => {
  const kpis = [
    { num: 2, label: 'Occupied', sub: 'Rooms', icon: Icons.Bed, color: '#F87171', glow: 'rgba(248,113,113,0.15)' },
    { num: 0, label: 'To Clean', sub: 'Rooms', icon: Icons.Broom, color: '#F59E0B', glow: 'rgba(245,158,11,0.15)' },
    { num: 2, label: 'Ready', sub: 'Rooms', icon: Icons.CheckCircle, color: '#34D399', glow: 'rgba(52,211,153,0.15)' },
    { num: '72%', label: 'Occupancy', sub: 'Today', icon: Icons.TrendUp, color: '#60A5FA', glow: 'rgba(96,165,250,0.15)' },
  ];

  return (
    <div data-screen-label="Dashboard">
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:24, marginBottom:28}}>
        <div>
          <h1 className="serif" style={{margin:0, fontSize:38, fontWeight:500, letterSpacing:'-0.01em'}}>
            Good evening, David <span style={{display:'inline-block', transform:'rotate(8deg)'}}>👋</span>
          </h1>
          <div style={{color:'var(--muted)', marginTop:6, fontSize:14}}>Here's what's happening at BAIA Boutique.</div>
        </div>
        <TopBarRight weather user={{name:'David', role:'Front Office Manager'}}/>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginBottom:18}}>
        {kpis.map((k, i) => {
          const Icn = k.icon;
          return (
            <div key={i} className="kpi tile-glow" style={{borderColor:`color-mix(in oklab, ${k.color} 22%, var(--line))`,
              background:`linear-gradient(180deg, ${k.glow} 0%, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))`}}>
              <div style={{color:k.color, fontFamily:'var(--font-display)', fontSize:48, fontWeight:500, lineHeight:1}}>{k.num}</div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:14}}>
                <div>
                  <div style={{color:'var(--text)', fontSize:15, fontWeight:500}}>{k.label}</div>
                  <div style={{color:'var(--muted)', fontSize:12, marginTop:2}}>{k.sub}</div>
                </div>
                <div style={{color:k.color, opacity:0.8}}><Icn size={22}/></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="lux-card" style={{padding:'22px 26px', display:'grid', gridTemplateColumns:'1fr 1fr 2fr', gap:32, alignItems:'center', marginBottom:18}}>
        <div>
          <div className="eyebrow">Arrivals</div>
          <div style={{display:'flex', alignItems:'center', gap:18, marginTop:10}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:48, lineHeight:1, color:'var(--text)'}}>0</div>
            <Icons.Users size={28} style={{color:'var(--muted)'}}/>
          </div>
          <div style={{color:'var(--muted)', fontSize:13, marginTop:6}}>Today</div>
        </div>
        <div>
          <div className="eyebrow">Departures</div>
          <div style={{display:'flex', alignItems:'center', gap:18, marginTop:10}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:48, lineHeight:1, color:'var(--text)'}}>1</div>
            <Icons.Plane size={28} style={{color:'var(--muted)'}}/>
          </div>
          <div style={{color:'var(--muted)', fontSize:13, marginTop:6}}>Today</div>
        </div>
        <div>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
            <div>
              <div className="eyebrow">Revenue Today</div>
              <div style={{display:'flex', alignItems:'baseline', gap:6, marginTop:10}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:42, lineHeight:1, color:'var(--text)'}}>₱ 18,450</div>
              </div>
              <div style={{color:'#34D399', fontSize:13, marginTop:6}}>▲ +12% vs yesterday</div>
            </div>
            <svg width="220" height="68" viewBox="0 0 220 68">
              <defs>
                <linearGradient id="sparkGold" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#D4B27A" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#D4B27A" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M2 55 L25 50 L50 46 L78 42 L105 32 L135 28 L165 18 L195 14 L218 10"
                stroke="#D4B27A" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              <path d="M2 55 L25 50 L50 46 L78 42 L105 32 L135 28 L165 18 L195 14 L218 10 L218 66 L2 66 Z"
                fill="url(#sparkGold)"/>
            </svg>
          </div>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18}}>
        <div className="lux-card"><div className="inner">
          <SectionHeading eyebrow>Housekeeping Overview</SectionHeading>
          <div style={{display:'flex', alignItems:'center', gap:36, marginTop:8}}>
            <Donut size={150} thickness={18}
              segments={[
                {value:2, color:'#34D399'},
                {value:0, color:'#F59E0B'},
                {value:2, color:'#EF4444'},
              ]}
              center={<><div style={{fontFamily:'var(--font-display)', fontSize:34, lineHeight:1}}>4</div><div style={{fontSize:11, color:'var(--muted)', marginTop:4}}>Total Rooms</div></>}
            />
            <div style={{display:'flex', flexDirection:'column', gap:12, fontSize:14}}>
              {[
                {label:'Ready', val: 2, color:'#34D399'},
                {label:'To Clean', val: 0, color:'#F59E0B'},
                {label:'Occupied', val: 2, color:'#EF4444'},
              ].map(s => (
                <div key={s.label} style={{display:'flex', alignItems:'center', gap:10}}>
                  <span className="dot" style={{background:s.color}}/>
                  <span style={{color:'var(--text-2)'}}>{s.val} {s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div></div>

        <div className="lux-card"><div className="inner">
          <SectionHeading eyebrow>Tasks &amp; Alerts</SectionHeading>
          <div style={{display:'flex', flexDirection:'column', gap:14, marginTop:6}}>
            {[
              {n:1, label:'Late Checkout', color:'#EF4444', icon:'!'},
              {n:2, label:'Guest Requests', color:'#F59E0B', icon:'·'},
              {n:0, label:'Maintenance', color:'#34D399', icon:'✓'},
            ].map(t => (
              <div key={t.label} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 0'}}>
                <div style={{display:'flex', alignItems:'center', gap:14}}>
                  <span style={{fontFamily:'var(--font-display)', fontSize:24, color:t.color, width:18, textAlign:'center'}}>{t.n}</span>
                  <span style={{color:'var(--text-2)', fontSize:14}}>{t.label}</span>
                </div>
                <span style={{width:22, height:22, borderRadius:999, border:`1px solid ${t.color}40`, color:t.color, display:'grid', placeItems:'center', fontSize:11}}>{t.icon}</span>
              </div>
            ))}
          </div>
        </div></div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18}}>
        <div className="lux-card"><div className="inner">
          <SectionHeading eyebrow>Recent Activity</SectionHeading>
          <div style={{display:'flex', flexDirection:'column', gap:14}}>
            {[
              {ic: Icons.Door, title:'Double Room #1', sub:'Guest check-out', time:'10 min ago'},
              {ic: Icons.Receipt, title:'Reservation #1058', sub:'New booking confirmed', time:'25 min ago'},
              {ic: Icons.Box, title:'Mini Bar Restocked', sub:'Inventory updated', time:'1 hr ago'},
            ].map((a,i)=> {
              const I = a.ic;
              return (
                <div key={i} style={{display:'flex', alignItems:'center', gap:14}}>
                  <div style={{width:38, height:38, borderRadius:10, border:'1px solid var(--line)', display:'grid', placeItems:'center', color:'var(--gold-2)', background:'rgba(212,178,122,0.04)'}}>
                    <I size={18}/>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14, color:'var(--text)'}}>{a.title}</div>
                    <div style={{fontSize:12, color:'var(--muted)'}}>{a.sub}</div>
                  </div>
                  <div style={{fontSize:12, color:'var(--muted)'}}>{a.time}</div>
                </div>
              );
            })}
          </div>
        </div></div>

        <div className="lux-card" style={{padding:0, overflow:'hidden', position:'relative'}}>
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=70&auto=format"
            alt="" style={{width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0}}/>
          <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(4,9,26,0.05) 30%, rgba(4,9,26,0.85))'}}/>
          <div style={{position:'relative', padding:'24px', minHeight:260, display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
            <div style={{fontFamily:'var(--font-display)', fontSize:24, color:'#F4EBDB'}}>Today's Inspiration</div>
            <div style={{color:'rgba(244,235,219,0.78)', fontSize:14, marginTop:6, lineHeight:1.5}}>Breathe in the ocean.<br/>Let hospitality flow naturally.</div>
          </div>
        </div>
      </div>

      <div className="lux-card"><div className="inner">
        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:18}}>
          <div>
            <div className="eyebrow">Quick Access</div>
            <div style={{color:'var(--muted)', fontSize:13, marginTop:4}}>Frequently used modules at your fingertips.</div>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:14}}>
          {[
            {label:'New Reservation', icon: Icons.Calendar, color:'#F59E0B', target:'reservation'},
            {label:'Walk-in Guest', icon: Icons.User, color:'#60A5FA', target:'reservation'},
            {label:'Room Status', icon: Icons.Bed, color:'#34D399', target:'housekeeping'},
            {label:'Reports', icon: Icons.BarChart, color:'#60A5FA', target:'reports'},
            {label:'Inventory', icon: Icons.Box, color:'#A78BFA', target:'inventory'},
          ].map(q => {
            const I = q.icon;
            return (
              <button key={q.label} onClick={()=>onNavigate(q.target)} className="tile-glow"
                style={{padding:'18px 14px', borderRadius:14, border:'1px solid var(--line)', background:'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))', display:'flex', flexDirection:'column', alignItems:'center', gap:10, transition:'all .18s ease'}}>
                <div style={{width:44, height:44, borderRadius:11, display:'grid', placeItems:'center', color: q.color,
                  border:`1px solid ${q.color}33`, background:`${q.color}10`}}>
                  <I size={22}/>
                </div>
                <div style={{fontSize:13, color:'var(--text-2)'}}>{q.label}</div>
              </button>
            );
          })}
        </div>
      </div></div>

      <div className="lux-card tight" style={{marginTop:18, padding:'14px 20px', display:'flex', alignItems:'center', gap:12}}>
        <Icons.Bell size={18} style={{color:'var(--gold-2)'}}/>
        <div style={{flex:1, fontSize:14}}>
          <span style={{color:'var(--gold-2)'}}>System Notice </span>
          <span style={{color:'var(--text-2)'}}>Night Audit will run automatically at 11:59 PM.</span>
        </div>
        <button style={{display:'inline-flex', alignItems:'center', gap:6, color:'var(--gold-2)', fontSize:13}}>View all <Icons.ChevronRight size={14}/></button>
      </div>
    </div>
  );
};

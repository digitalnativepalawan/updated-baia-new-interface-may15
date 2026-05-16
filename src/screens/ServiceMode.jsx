import { Icons } from '../icons.jsx';

export const ServiceMode = ({ onNavigate }) => {
  const services = [
    { key:'kitchen', icon: Icons.Flame, label:'Kitchen', sub:'Food preparation board', meta:'12', metaLabel:'Active Orders', color:'#F97316', target:'kitchen' },
    { key:'bar', icon: Icons.Cup, label:'Bar', sub:'Drink preparation board', meta:'6', metaLabel:'Active Orders', color:'#A78BFA', target:'kitchen' },
    { key:'reception', icon: Icons.Bell, label:'Reception', sub:'Service coordination & billing', meta:'3', metaLabel:'Pending Tasks', color:'#60A5FA', target:'dashboard' },
    { key:'housekeeping', icon: Icons.Leaf, label:'Housekeeping', sub:'Room status & cleaning board', meta:'2', metaLabel:'Tasks Today', color:'#34D399', target:'housekeeping' },
    { key:'maintenance', icon: Icons.Wrench, label:'Maintenance', sub:'Repair & maintenance board', meta:'1', metaLabel:'Open Tasks', color:'#FBBF24', target:'dashboard' },
  ];
  return (
    <div data-screen-label="Service Mode">
      <div style={{display:'flex', alignItems:'center', gap:18, marginBottom:8}}>
        <button onClick={()=>onNavigate('dashboard')} style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}>
          <Icons.ArrowLeft size={20}/>
        </button>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <div style={{width:42, height:42, borderRadius:11, display:'grid', placeItems:'center', border:'1px solid var(--line)', color:'var(--gold-2)'}}>
            <Icons.Grid size={20}/>
          </div>
          <h1 className="serif" style={{margin:0, fontSize:32, fontWeight:500}}>Service Mode</h1>
        </div>
        <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:8, color:'var(--text-2)', fontSize:14}}>
          David <Icons.ChevronDown size={14}/>
        </div>
      </div>

      <div style={{textAlign:'center', margin:'24px 0 28px'}}>
        <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--text)'}}>Choose your service area</div>
        <div style={{color:'var(--muted)', fontSize:13, marginTop:6}}>Focus on what matters most right now.</div>
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:14, maxWidth: 820, margin:'0 auto'}}>
        {services.map(s => {
          const I = s.icon;
          return (
            <button key={s.key} onClick={()=>onNavigate(s.target)} className="svc-card tile-glow"
              style={{borderColor:`${s.color}28`,
                background:`linear-gradient(180deg, ${s.color}10, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))`,
                boxShadow:`0 0 0 1px ${s.color}10, 0 20px 60px -20px ${s.color}30`}}
            >
              <div style={{width:54, height:54, borderRadius:14, display:'grid', placeItems:'center',
                color:s.color, background:`${s.color}14`, border:`1px solid ${s.color}30`}}>
                <I size={26}/>
              </div>
              <div style={{flex:1, textAlign:'left'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--text)', fontWeight:500}}>{s.label}</div>
                <div style={{color:'var(--muted)', fontSize:13, marginTop:2}}>{s.sub}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:28, color:s.color, lineHeight:1}}>{s.meta}</div>
                <div style={{color:'var(--muted)', fontSize:11, marginTop:4}}>{s.metaLabel}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

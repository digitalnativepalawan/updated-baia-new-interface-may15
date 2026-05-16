import { Icons } from './icons.jsx';

export const BaiaLogo = ({ size = 56, variant = "inline", color = "#D4B27A" }) => {
  const mark = (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{display:'block'}}>
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="17" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="32" cy="32" r="7" />
        <circle cx="32" cy="32" r="2.5" fill={color} />
        <path d="M32 10 v8 M32 46 v8 M10 32 h8 M46 32 h8" />
        <path d="M16 16 l5 5 M48 48 l-5 -5 M16 48 l5 -5 M48 16 l-5 5" opacity=".55" />
      </g>
    </svg>
  );
  if (variant === "stacked") {
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 14}}>
        {mark}
        <div style={{fontFamily:'var(--font-display)', fontSize: 54, letterSpacing: '0.18em', color, fontWeight: 500, lineHeight: 1}}>BAIA</div>
        <div style={{fontFamily:'var(--font-sans)', fontSize: 14, letterSpacing: '0.45em', color: '#A99572', fontWeight: 400}}>BOUTIQUE</div>
      </div>
    );
  }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap: 6, padding: '6px 0'}}>
      {mark}
      <div style={{fontFamily:'var(--font-display)', fontSize: 22, letterSpacing: '0.22em', color, fontWeight: 500, lineHeight: 1, marginTop: 4}}>BAIA</div>
      <div style={{fontFamily:'var(--font-sans)', fontSize: 9, letterSpacing: '0.42em', color: '#A99572', fontWeight: 400}}>BOUTIQUE</div>
    </div>
  );
};

export const Avatar = ({ src, size = 36, online = false, name = "" }) => (
  <div style={{position:'relative', width: size, height: size, flex: `0 0 ${size}px`}}>
    {src ? (
      <img src={src} alt={name} style={{width:size, height:size, borderRadius:'50%', objectFit:'cover', border:'1px solid rgba(255,255,255,0.08)'}} />
    ) : (
      <div style={{width:size, height:size, borderRadius:'50%', background:'linear-gradient(135deg,#2A3349,#1B2236)', color:'#C5CEE0',
        display:'grid', placeItems:'center', fontWeight:500, fontSize: size*0.36, border:'1px solid rgba(255,255,255,0.08)'}}>
        {name.split(' ').map(s=>s[0]).slice(0,2).join('')}
      </div>
    )}
    {online && (
      <span style={{position:'absolute', right:-1, bottom:-1, width: size*0.28, height: size*0.28, borderRadius:'50%',
        background:'#34D399', boxShadow:'0 0 0 2px #04091A'}} />
    )}
  </div>
);

export const TopBarRight = ({ lang = false, weather = false, user = {name:"David", role:"Manager"} }) => (
  <div style={{display:'flex', alignItems:'center', gap: 18}}>
    {weather && (
      <div style={{display:'flex', alignItems:'center', gap: 10}}>
        <Icons.Cloud size={22} style={{color:'#C5CEE0'}} />
        <div style={{lineHeight: 1.2}}>
          <div style={{fontSize: 15, color:'var(--text)'}}>28°C</div>
          <div style={{fontSize: 11, color:'var(--muted)'}}>San Vicente, Palawan</div>
        </div>
      </div>
    )}
    {lang && (
      <button className="btn-ghost" style={{display:'inline-flex', alignItems:'center', gap:8, padding:'8px 12px', borderRadius:10, border:'1px solid var(--line)', color:'var(--text-2)'}}>
        <Icons.Globe size={16} /> English <Icons.ChevronDown size={14} />
      </button>
    )}
    <button style={{position:'relative', width:38, height:38, borderRadius:12, border:'1px solid var(--line)', background:'rgba(255,255,255,0.02)', display:'grid', placeItems:'center', color:'var(--text-2)'}}>
      <Icons.Bell size={18}/>
      <span style={{position:'absolute', top:-4, right:-4, minWidth:18, height:18, padding:'0 5px', borderRadius:999, background:'#EF4444', color:'#fff', fontSize:10, display:'grid', placeItems:'center', fontWeight:600}}>3</span>
    </button>
    <div style={{display:'flex', alignItems:'center', gap:10}}>
      <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=60&auto=format" online size={40} name="David" />
      {user && (
        <div style={{lineHeight:1.2}}>
          <div style={{fontSize:14, color:'var(--text)', fontWeight:500}}>{user.name}</div>
          <div style={{fontSize:11, color:'var(--muted)'}}>{user.role}</div>
        </div>
      )}
    </div>
  </div>
);

export const Sidebar = ({ active, onNavigate }) => {
  const items = [
    { key: 'dashboard', label: 'Dashboard', icon: Icons.Home },
    { key: 'service-mode', label: 'Service Mode', icon: Icons.Grid },
    { key: 'operations', label: 'Operations', icon: Icons.ListCheck },
    { key: 'people', label: 'People', icon: Icons.Users },
    { key: 'reports', label: 'Reports', icon: Icons.BarChart },
    { key: 'inventory', label: 'Inventory', icon: Icons.Box },
    { key: 'guest-portal', label: 'Guest Portal', icon: Icons.Globe },
    { key: 'settings', label: 'Settings', icon: Icons.Cog },
  ];
  return (
    <aside style={{padding:'24px 18px', borderRight:'1px solid var(--line)', display:'flex', flexDirection:'column', gap: 12, position:'sticky', top:0, height:'100vh', overflow:'auto'}}>
      <div style={{padding:'10px 12px 22px'}}>
        <BaiaLogo size={48} />
      </div>
      <nav style={{display:'flex', flexDirection:'column', gap:4}}>
        {items.map(it => {
          const Iconc = it.icon;
          const isActive = active === it.key;
          return (
            <div key={it.key} className={"nav-item " + (isActive ? 'active' : '')} onClick={()=>onNavigate(it.key)}>
              <Iconc className="nav-ic" size={18} />
              <span>{it.label}</span>
            </div>
          );
        })}
      </nav>

      <div style={{marginTop:'auto', padding: '16px 14px', border:'1px solid var(--line)', borderRadius: 14,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))'}}>
        <div style={{position:'relative', borderRadius:10, overflow:'hidden', height: 96, marginBottom: 12}}>
          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=70&auto=format" alt=""
            style={{width:'100%', height:'100%', objectFit:'cover'}}/>
          <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(4,9,26,0.2), rgba(4,9,26,0.7))'}}/>
        </div>
        <div style={{fontFamily:'var(--font-display)', fontSize:16, color:'var(--text)'}}>BAIA Boutique</div>
        <div style={{fontSize:11, color:'var(--muted)', marginTop:2}}>San Vicente, Palawan</div>
        <div style={{fontSize:11, color:'var(--muted-2)', marginTop:10, lineHeight:1.5, fontStyle:'italic'}}>Premium Hospitality<br/>Redefined.</div>
      </div>

      <button className="btn-ghost-gold" style={{display:'flex', alignItems:'center', justifyContent:'center', gap:8, height:44, borderRadius:12, marginTop: 8}}>
        <Icons.Headset size={16}/> Need Help?
      </button>

      <button onClick={()=>onNavigate('welcome')} style={{display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:10, color:'var(--gold-2)'}}>
        <Icons.Logout size={16}/> <span style={{fontSize:14}}>Log out</span>
      </button>
    </aside>
  );
};

export const BottomNav = ({ active, onNavigate, notifications = 3 }) => {
  const items = [
    { key:'dashboard', label:'Home', icon: Icons.Home },
    { key:'service-mode', label:'Service Mode', icon: Icons.Grid },
    { key:'__fab', label:'', icon: Icons.Plus },
    { key:'notifications', label:'Notifications', icon: Icons.Bell, badge: notifications },
    { key:'profile', label:'Profile', icon: Icons.User },
  ];
  return (
    <div className="bottom-nav">
      {items.map((it) => {
        const Iconc = it.icon;
        if (it.key === '__fab') {
          return (
            <button key="fab" onClick={()=>onNavigate('service-mode')} className="fab-ring">
              <Icons.Plus size={22} style={{color:'var(--gold-2)'}}/>
            </button>
          );
        }
        const isActive = active === it.key;
        return (
          <button key={it.key} className={"bn-item " + (isActive?'active':'')} onClick={()=>onNavigate(it.key)} style={{position:'relative'}}>
            <div style={{position:'relative'}}>
              <Iconc size={22}/>
              {it.badge && (
                <span style={{position:'absolute', top:-6, right:-8, minWidth:16, height:16, padding:'0 4px', background:'#F59E0B', color:'#1A1208', borderRadius:999, fontSize:10, fontWeight:600, display:'grid', placeItems:'center', border:'2px solid var(--bg-0)'}}>{it.badge}</span>
              )}
            </div>
            <span>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export const Shell = ({ active, onNavigate, children, bottomNav = true, sidebar = true, padding = true }) => {
  return (
    <div className={sidebar ? "shell" : ""}>
      {sidebar && <Sidebar active={active} onNavigate={onNavigate}/>}
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
        <div className={padding ? "shell-main" : ""} style={padding ? {} : {flex:1}}>
          {children}
        </div>
        {bottomNav && <BottomNav active={active} onNavigate={onNavigate}/>}
      </div>
    </div>
  );
};

export const PageHeader = ({ title, subtitle, right }) => (
  <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 24, marginBottom: 28}}>
    <div>
      <h1 className="serif" style={{margin:0, fontSize: 38, fontWeight:500, letterSpacing:'-0.01em', color:'var(--text)'}}>{title}</h1>
      {subtitle && <div style={{color:'var(--muted)', marginTop:6, fontSize:14}}>{subtitle}</div>}
    </div>
    {right}
  </div>
);

export const SectionHeading = ({ children, right, eyebrow = false }) => (
  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 16}}>
    {eyebrow
      ? <div className="eyebrow">{children}</div>
      : <div style={{fontFamily:'var(--font-display)', fontSize: 20, color:'var(--text)', fontWeight:500}}>{children}</div>}
    {right}
  </div>
);

export const Donut = ({ size = 140, thickness = 14, segments = [], center }) => {
  const r = (size - thickness) / 2;
  const C = 2 * Math.PI * r;
  let offset = 0;
  const total = segments.reduce((s, x) => s + x.value, 0);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={thickness}/>
      {segments.map((s, i) => {
        const len = (s.value / total) * C;
        const dasharray = `${len} ${C - len}`;
        const el = (
          <circle key={i} cx={size/2} cy={size/2} r={r} fill="none"
            stroke={s.color} strokeWidth={thickness}
            strokeDasharray={dasharray} strokeDashoffset={-offset}
            transform={`rotate(-90 ${size/2} ${size/2})`}
            strokeLinecap="butt"/>
        );
        offset += len;
        return el;
      })}
      {center && (
        <foreignObject x="0" y="0" width={size} height={size}>
          <div style={{width:'100%', height:'100%', display:'grid', placeItems:'center', color:'var(--text)', textAlign:'center', lineHeight:1.1}}>
            {center}
          </div>
        </foreignObject>
      )}
    </svg>
  );
};

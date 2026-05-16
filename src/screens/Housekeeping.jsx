import { useState } from 'react';
import { Icons } from '../icons.jsx';

export const Housekeeping = ({ onNavigate }) => {
  const [floor, setFloor] = useState('all');

  const rooms = [
    { name:'Double Room #1', floor:1, view:'Ocean View', guests:2, status:'Occupied', color:'#34D399', meta:'Check-out: 10:00 AM', sub:'Stayover' },
    { name:'Beach Villa #2', floor:1, view:'Beachfront', guests:2, status:'Ready', color:'#60A5FA', meta:'Cleaned: 9:20 AM', sub:'Ready to Sell' },
    { name:'Deluxe Room #3', floor:2, view:'Garden View', guests:2, status:'To Clean', color:'#F59E0B', meta:'Priority: Medium', sub:'Assigned to: Jenny' },
    { name:'Garden Suite #4', floor:2, view:'Garden View', guests:3, status:'Do Not Disturb', color:'#EF4444', meta:'Until: 2:00 PM', sub:'Privacy Requested' },
  ];

  const filtered = floor === 'all' ? rooms : rooms.filter(r => r.floor === floor);

  const floorTabs = [
    { key: 'all', label: `All (${rooms.length})` },
    { key: 1, label: `Floor 1 (${rooms.filter(r=>r.floor===1).length})` },
    { key: 2, label: `Floor 2 (${rooms.filter(r=>r.floor===2).length})` },
    { key: 3, label: `Floor 3 (0)` },
  ];

  const stats = [
    { num: 4, label: 'Total Rooms', color: '#34D399', icon: Icons.Bed, pct:'100%', pctLabel:'All Rooms' },
    { num: 2, label: 'Ready', color: '#60A5FA', icon: Icons.Broom, pct:'50%', pctLabel:'Ready to Sell' },
    { num: 1, label: 'To Clean', color: '#F59E0B', icon: Icons.Cart, pct:'25%', pctLabel:'In Progress' },
    { num: 1, label: 'Occupied', color: '#EF4444', icon: Icons.Alert, pct:'25%', pctLabel:'Do Not Disturb' },
  ];

  const statusPill = (s, color) => (
    <span style={{display:'inline-flex', alignItems:'center', height:30, padding:'0 14px', borderRadius:8,
      color:color, background:`${color}10`, border:`1px solid ${color}30`, fontSize:13, fontWeight:500}}>
      {s}
    </span>
  );

  return (
    <div data-screen-label="Housekeeping">
      <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:24}}>
        <button onClick={()=>onNavigate('service-mode')} style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}>
          <Icons.Menu size={20}/>
        </button>
        <div style={{display:'flex', alignItems:'center', gap:14, flex:1}}>
          <div style={{width:44, height:44, borderRadius:11, display:'grid', placeItems:'center', color:'#34D399', background:'rgba(52,211,153,0.10)', border:'1px solid rgba(52,211,153,0.30)'}}>
            <Icons.Leaf size={22}/>
          </div>
          <div>
            <h1 className="serif" style={{margin:0, fontSize:32, fontWeight:500}}>Housekeeping</h1>
            <div style={{color:'var(--muted)', fontSize:13}}>Room Status Board</div>
          </div>
        </div>
        <button style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)'}}><Icons.Search size={20}/></button>
        <button style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)'}}><Icons.Filter size={20}/></button>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginBottom:18}}>
        {floorTabs.map(t => (
          <button key={t.key} onClick={()=>setFloor(t.key)}
            style={{
              padding:'14px 16px', borderRadius:12,
              border: floor===t.key ? '1px solid rgba(212,178,122,0.45)' : '1px solid var(--line)',
              background: floor===t.key ? 'rgba(212,178,122,0.08)' : 'rgba(255,255,255,0.02)',
              color: floor===t.key ? 'var(--gold-2)' : 'var(--text-2)',
              fontSize:15
            }}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:22}}>
        {stats.map((s, i) => {
          const I = s.icon;
          return (
            <div key={i} className="lux-card" style={{padding:'18px 18px 16px', borderColor:`${s.color}22`}}>
              <div style={{display:'flex', alignItems:'center', gap:14}}>
                <div style={{width:48, height:48, borderRadius:12, color:s.color, background:`${s.color}14`, border:`1px solid ${s.color}30`, display:'grid', placeItems:'center'}}>
                  <I size={22}/>
                </div>
                <div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:36, color:'var(--text)', lineHeight:1}}>{s.num}</div>
                  <div style={{color:'var(--text-2)', fontSize:13, marginTop:4}}>{s.label}</div>
                </div>
              </div>
              <div style={{marginTop:14, paddingTop:12, borderTop:'1px solid var(--line)'}}>
                <div style={{color:s.color, fontSize:15, fontWeight:500}}>{s.pct}</div>
                <div style={{color:'var(--muted)', fontSize:12}}>{s.pctLabel}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:12}}>
        {filtered.map(r => (
          <div key={r.name} className="lux-card edge-accent" style={{padding:'16px 20px', display:'grid', gridTemplateColumns:'72px 1fr auto auto', alignItems:'center', gap:16, color: r.color, borderColor:'var(--line)'}}>
            <div style={{width:60, height:60, borderRadius:14, display:'grid', placeItems:'center', color:r.color, background:`${r.color}10`, border:`1px solid ${r.color}30`}}>
              <Icons.Door size={26}/>
            </div>
            <div>
              <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--text)', fontWeight:500}}>{r.name}</div>
              <div style={{color:'var(--muted)', fontSize:13, marginTop:4}}>Floor {r.floor} · {r.view}</div>
              <div style={{color:'var(--muted)', fontSize:13}}>{r.guests} Guests</div>
            </div>
            <div style={{textAlign:'right'}}>
              {statusPill(r.status, r.color)}
              <div style={{color:'var(--muted)', fontSize:13, marginTop:8}}>{r.meta}</div>
              <div style={{color:r.color, fontSize:13}}>{r.sub}</div>
            </div>
            <button style={{width:36, height:36, borderRadius:10, color:'var(--text-2)', display:'grid', placeItems:'center'}}>
              <Icons.More size={18}/>
            </button>
          </div>
        ))}
      </div>

      <div className="lux-card" style={{marginTop:18, padding:'14px 20px', display:'flex', alignItems:'center', gap:16}}>
        <div style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--gold-2)', background:'rgba(212,178,122,0.06)', border:'1px solid rgba(212,178,122,0.20)'}}>
          <Icons.Sparkles size={18}/>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14, color:'var(--text)'}}>Last Updated: 2 min ago</div>
          <div style={{fontSize:12, color:'var(--muted)'}}>Real-time status updates</div>
        </div>
        <button className="btn-ghost-gold" style={{height:38, padding:'0 16px', display:'inline-flex', alignItems:'center', gap:8, borderRadius:10}}>
          <Icons.Refresh size={16}/> Refresh Now
        </button>
      </div>
    </div>
  );
};

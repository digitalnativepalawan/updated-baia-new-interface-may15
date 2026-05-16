import { useState } from 'react';
import { Icons } from '../icons.jsx';

export const Kitchen = ({ onNavigate }) => {
  const [tab, setTab] = useState('all');
  const orders = [
    { time:'18:45', id:'1058', loc:'Dine In', items:[
      {qty:2, name:'Grilled Catch of the Day', notes:'Garlic Butter Sauce, Steamed Veggies'},
      {qty:1, name:'Tropical Mango Salad', notes:'With Coconut Vinaigrette'},
    ], status:'Preparing', by:'David', ago:'18 min ago', accent:'#F59E0B' },
    { time:'18:50', id:'1059', loc:'Room 1', items:[
      {qty:1, name:'Beef Tenderloin', notes:'Mashed Potato, Pepper Sauce'},
      {qty:1, name:'House Salad', notes:'Balsamic Dressing'},
    ], status:'Preparing', by:'Theresa', ago:'10 min ago', accent:'#EF4444' },
    { time:'18:30', id:'1056', loc:'Room 2', items:[
      {qty:1, name:'Club Sandwich', notes:'French Fries'},
      {qty:1, name:'Pineapple Juice', notes:''},
    ], status:'Ready', by:'Mark', ago:'Ready to Serve', accent:'#34D399' },
    { time:'18:15', id:'1055', loc:'Dine In', items:[
      {qty:1, name:'Margherita Pizza', notes:'Fresh Basil'},
      {qty:1, name:'Lemonade', notes:''},
    ], status:'Completed', by:'Ana', ago:'Completed', accent:'#60A5FA' },
  ];

  const tabs = [
    { key:'all', label:'All Orders', count:null },
    { key:'preparing', label:'Preparing', count: 8 },
    { key:'ready', label:'Ready', count: 3 },
    { key:'completed', label:'Completed', count: 21 },
  ];

  const filtered = tab === 'all' ? orders : orders.filter(o => o.status.toLowerCase() === tab);

  const statusStyle = (s) => {
    if (s === 'Preparing') return 'pill warn';
    if (s === 'Ready') return 'pill success';
    if (s === 'Completed') return 'pill info';
    return 'pill neutral';
  };

  return (
    <div data-screen-label="Kitchen">
      <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:24}}>
        <button onClick={()=>onNavigate('service-mode')} style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}>
          <Icons.ArrowLeft size={20}/>
        </button>
        <div style={{display:'flex', alignItems:'center', gap:14, flex:1}}>
          <div style={{color:'#F97316'}}><Icons.Flame size={28}/></div>
          <div>
            <h1 className="serif" style={{margin:0, fontSize:32, fontWeight:500}}>Kitchen</h1>
            <div style={{color:'var(--muted)', fontSize:13}}>Food Preparation Board</div>
          </div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:'var(--font-display)', fontSize:36, color:'#F97316', lineHeight:1}}>12</div>
          <div style={{color:'#F97316', fontSize:12, marginTop:4}}>Active Orders</div>
        </div>
        <button style={{width:40, height:40, borderRadius:10, color:'var(--text-2)', display:'grid', placeItems:'center'}}>
          <Icons.More size={20}/>
        </button>
      </div>

      <div style={{display:'flex', gap:10, marginBottom:18, flexWrap:'wrap'}}>
        {tabs.map(t => (
          <button key={t.key} onClick={()=>setTab(t.key)}
            style={{
              display:'inline-flex', alignItems:'center', gap:10, padding:'10px 18px', borderRadius:10,
              border: tab===t.key ? '1px solid rgba(212,178,122,0.45)' : '1px solid var(--line)',
              background: tab===t.key ? 'rgba(212,178,122,0.08)' : 'rgba(255,255,255,0.02)',
              color: tab===t.key ? 'var(--gold-2)' : 'var(--text-2)',
              fontSize: 14
            }}>
            {t.label}
            {t.count != null && <span style={{padding:'2px 8px', borderRadius:6, background:'rgba(255,255,255,0.05)', fontSize:12, color: tab===t.key ? 'var(--gold-2)' : 'var(--text)'}}>{t.count}</span>}
          </button>
        ))}
      </div>

      <div style={{display:'flex', flexDirection:'column', gap:14}}>
        {filtered.map(o => (
          <div key={o.id} className="lux-card" style={{padding:'18px 22px 18px 0', display:'grid', gridTemplateColumns:'120px 1fr 200px', alignItems:'center', borderColor:`${o.accent}30`, position:'relative'}}>
            <div style={{position:'absolute', left:0, top:14, bottom:14, width:3, background:o.accent, borderRadius:3, boxShadow:`0 0 12px ${o.accent}80`}}/>
            <div style={{paddingLeft:26}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:24, color:o.accent, lineHeight:1}}>{o.time}</div>
              <div style={{fontSize:13, color:'var(--text)', marginTop:6}}>#{o.id}</div>
              <div style={{fontSize:13, color:'var(--muted)'}}>{o.loc}</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:8, paddingLeft:8}}>
              {o.items.map((it, i)=>(
                <div key={i}>
                  <div style={{fontSize:18, color:'var(--text)', fontFamily:'var(--font-display)', fontWeight:500}}>
                    <span style={{color:'var(--muted)'}}>{it.qty} × </span>{it.name}
                  </div>
                  {it.notes && <div style={{fontSize:13, color:'var(--muted)', marginTop:2}}>{it.notes}</div>}
                </div>
              ))}
            </div>
            <div style={{textAlign:'right'}}>
              <span className={statusStyle(o.status)} style={{padding:'6px 14px', height:30, fontSize:13}}>{o.status}</span>
              <div style={{fontSize:13, color:'var(--text-2)', marginTop:10}}>{o.by}</div>
              <div style={{fontSize:12, color:'var(--muted)'}}>{o.ago}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="lux-card" style={{marginTop:18, padding:'16px 24px', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24}}>
        {[
          {ic: Icons.Clock, num:8, label:'Preparing', color:'#F59E0B'},
          {ic: Icons.CheckCircle, num:3, label:'Ready', color:'#34D399'},
          {ic: Icons.Bell, num:12, label:'Active Orders', color:'#60A5FA'},
          {ic: Icons.Check, num:21, label:'Completed', color:'var(--muted)'},
        ].map((m, i)=>{
          const I = m.ic;
          return (
            <div key={i} style={{display:'flex', alignItems:'center', gap:14}}>
              <div style={{width:38, height:38, borderRadius:999, display:'grid', placeItems:'center', color:m.color, border:`1px solid ${m.color}33`, background:`${m.color}10`}}>
                <I size={18}/>
              </div>
              <div>
                <div style={{fontFamily:'var(--font-display)', fontSize:22, color:m.color, lineHeight:1}}>{m.num}</div>
                <div style={{fontSize:12, color:'var(--muted)', marginTop:4}}>{m.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

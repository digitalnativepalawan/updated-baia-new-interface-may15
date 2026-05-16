import { useState } from 'react';
import { Icons } from '../icons.jsx';
import { TopBarRight, Donut } from '../components.jsx';

export const Inventory = ({ onNavigate }) => {
  const [tab, setTab] = useState('All Items');

  const items = [
    { name:'Australian Wagyu Striploin', sub:'Premium Beef', img:'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=200&q=70&auto=format', cat:'Food', stock:12.5, unit:'kg', status:'In Stock', value:'₱ 8,750' },
    { name:'Norwegian Salmon Fillet', sub:'Fresh Seafood', img:'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=200&q=70&auto=format', cat:'Food', stock:8.2, unit:'kg', status:'In Stock', value:'₱ 4,320' },
    { name:'Extra Virgin Olive Oil', sub:'Premium Quality', img:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&q=70&auto=format', cat:'Food', stock:2.1, unit:'L', status:'Low Stock', value:'₱ 2,450', warn:true },
    { name:'Fresh Basil Leaves', sub:'Herbs & Spices', img:'https://images.unsplash.com/photo-1618375569909-3c8616cf663b?w=200&q=70&auto=format', cat:'Food', stock:0.8, unit:'kg', status:'Low Stock', value:'₱ 320', warn:true },
    { name:'Truffle Oil', sub:'Premium Condiment', img:'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&q=70&auto=format', cat:'Food', stock:0, unit:'ml', status:'Out of Stock', value:'₱ 1,850', danger:true },
    { name:'Toilet Tissue Premium', sub:'2-Ply, 48 Rolls', img:'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=200&q=70&auto=format', cat:'Housekeeping', stock:24, unit:'pack', status:'In Stock', value:'₱ 1,200' },
    { name:'Bath Towel', sub:'100% Cotton', img:'https://images.unsplash.com/photo-1594224457860-23bb2914c2bc?w=200&q=70&auto=format', cat:'Housekeeping', stock:15, unit:'pcs', status:'Low Stock', value:'₱ 2,100', warn:true },
    { name:'Shampoo 300ml', sub:'Guest Amenities', img:'https://images.unsplash.com/photo-1631730486572-226d1f595b68?w=200&q=70&auto=format', cat:'Amenities', stock:0, unit:'pcs', status:'Out of Stock', value:'₱ 750', danger:true },
    { name:'Hand Soap 500ml', sub:'Liquid Soap', img:'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=200&q=70&auto=format', cat:'Amenities', stock:18, unit:'pcs', status:'In Stock', value:'₱ 540' },
    { name:'Laundry Detergent', sub:'5L Bottle', img:'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=200&q=70&auto=format', cat:'Supplies', stock:6, unit:'btl', status:'Low Stock', value:'₱ 1,100', warn:true },
  ];

  const tabs = ['All Items', 'Food & Beverages', 'Housekeeping', 'Amenities', 'Supplies'];

  const statusPill = (s, warn, danger) => {
    const color = danger ? '#EF4444' : warn ? '#F59E0B' : '#34D399';
    return (
      <span style={{display:'inline-flex', alignItems:'center', padding:'5px 12px', borderRadius:7, fontSize:12,
        color, background:`${color}10`, border:`1px solid ${color}30`}}>{s}</span>
    );
  };

  return (
    <div data-screen-label="Inventory">
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:24, marginBottom:8}}>
        <div>
          <h1 className="serif" style={{margin:0, fontSize:36, fontWeight:500, letterSpacing:'-0.01em'}}>Inventory</h1>
          <div style={{color:'var(--muted)', marginTop:6, fontSize:14}}>Track, manage and optimize inventory in real-time.</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <div style={{display:'flex', alignItems:'center', gap:10, padding:'10px 14px', borderRadius:11, border:'1px solid var(--line)', background:'rgba(255,255,255,0.02)', minWidth:280}}>
            <Icons.Search size={16} style={{color:'var(--muted)'}}/>
            <input placeholder="Search items, categories..." style={{flex:1, background:'transparent', border:0, outline:'none', fontSize:14, color:'var(--text)'}}/>
          </div>
          <TopBarRight user={{name:'David', role:'Manager'}}/>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', gap:10, margin:'14px 0 22px'}}>
        <button className="btn-ghost" style={{height:42, padding:'0 18px', borderRadius:11, display:'inline-flex', alignItems:'center', gap:8, color:'var(--text-2)'}}>
          <Icons.Upload size={16}/> Import
        </button>
        <button className="btn-primary" style={{height:42, borderRadius:11, padding:'0 18px'}}>
          <Icons.Plus size={16}/> Add Item
        </button>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:14, marginBottom:22}}>
        {[
          { label:'Total Items', val:'256', sub:'All Categories', color:'#60A5FA', icon: Icons.Box },
          { label:'Total Value', val:'₱ 482,750', sub:'Inventory Value', color:'#34D399', icon: Icons.DollarBadge },
          { label:'Low Stock', val:'18', sub:'Reorder Soon', color:'#F59E0B', icon: Icons.Alert },
          { label:'Out of Stock', val:'6', sub:'Take Action', color:'#A78BFA', icon: Icons.Box },
        ].map((k,i)=>{
          const I = k.icon;
          return (
            <div key={i} className="lux-card" style={{padding:'18px 20px', borderColor:`${k.color}22`,
              background:`linear-gradient(180deg, ${k.color}10, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))`}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <div style={{color:k.color, fontSize:13, fontWeight:500}}>{k.label}</div>
                <div style={{width:36, height:36, borderRadius:9, color:k.color, background:`${k.color}14`, border:`1px solid ${k.color}30`, display:'grid', placeItems:'center'}}>
                  <I size={18}/>
                </div>
              </div>
              <div style={{fontFamily:'var(--font-display)', fontSize:32, color:'var(--text)', marginTop:8, lineHeight:1}}>{k.val}</div>
              <div style={{color:'var(--muted)', fontSize:12, marginTop:8}}>{k.sub}</div>
            </div>
          );
        })}
      </div>

      <div style={{display:'grid', gridTemplateColumns:'2.2fr 1fr', gap:18}}>
        <div>
          <div style={{display:'flex', gap:24, borderBottom:'1px solid var(--line)', marginBottom:16}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setTab(t)} className={tab===t ? 'tab-active' : ''}
                style={{position:'relative', padding:'10px 0', color: tab===t ? 'var(--gold-2)':'var(--muted)', fontSize:14, fontWeight:500}}>
                {t}
              </button>
            ))}
          </div>

          <div style={{display:'flex', gap:10, marginBottom:14}}>
            {['All Categories', 'All Locations'].map(f=>(
              <button key={f} style={{display:'inline-flex', alignItems:'center', justifyContent:'space-between', gap:8, padding:'9px 14px', borderRadius:10, border:'1px solid var(--line)', color:'var(--text-2)', minWidth:180, fontSize:13}}>
                {f} <Icons.ChevronDown size={14}/>
              </button>
            ))}
            <div style={{display:'flex', alignItems:'center', gap:8, padding:'9px 14px', borderRadius:10, border:'1px solid var(--line)', flex:1}}>
              <input placeholder="Filter items..." style={{flex:1, background:'transparent', border:0, outline:'none', fontSize:13, color:'var(--text)'}}/>
            </div>
          </div>

          <div className="lux-card" style={{padding:0, overflow:'hidden'}}>
            <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 0.7fr 0.5fr 1fr 1fr', padding:'14px 22px', borderBottom:'1px solid var(--line)'}}>
              {['Item','Category','Stock','Unit','Status','Value'].map(h=>(
                <div key={h} className="eyebrow" style={{fontSize:10}}>{h}</div>
              ))}
            </div>
            {items.map((it,i)=>(
              <div key={i} className="row-hover" style={{display:'grid', gridTemplateColumns:'2fr 1fr 0.7fr 0.5fr 1fr 1fr', padding:'14px 22px', borderBottom: i<items.length-1 ? '1px solid var(--line)':'none', alignItems:'center'}}>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{width:42, height:42, borderRadius:9, overflow:'hidden', flexShrink:0, border:'1px solid var(--line)'}}>
                    <img src={it.img} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                  </div>
                  <div>
                    <div style={{fontSize:13.5, color:'var(--text)'}}>{it.name}</div>
                    <div style={{fontSize:12, color:'var(--muted)'}}>{it.sub}</div>
                  </div>
                </div>
                <div style={{color:'var(--text-2)', fontSize:13}}>{it.cat}</div>
                <div style={{color: it.danger ? '#EF4444' : it.warn ? '#F59E0B' : '#34D399', fontSize:14, fontWeight:500}}>{it.stock}</div>
                <div style={{color:'var(--muted)', fontSize:13}}>{it.unit}</div>
                <div>{statusPill(it.status, it.warn, it.danger)}</div>
                <div style={{color:'var(--text)', fontSize:14}}>{it.value}</div>
              </div>
            ))}
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 22px', borderTop:'1px solid var(--line)'}}>
              <div style={{color:'var(--muted)', fontSize:13}}>Showing 1 to 10 of 256 items</div>
              <div style={{display:'flex', gap:6}}>
                {[1,2,3,'...',26].map((p,i)=>(
                  <button key={i} style={{minWidth:30, height:30, padding:'0 9px', borderRadius:7, fontSize:13,
                    background: p===1 ? 'rgba(212,178,122,0.10)':'transparent',
                    border: p===1 ? '1px solid rgba(212,178,122,0.30)':'1px solid var(--line)',
                    color: p===1 ? 'var(--gold-2)':'var(--text-2)'}}>{p}</button>
                ))}
                <button style={{width:30, height:30, borderRadius:7, border:'1px solid var(--line)', color:'var(--text-2)', display:'grid', placeItems:'center'}}>
                  <Icons.ChevronRight size={14}/>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:16}}>
          <div className="lux-card"><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Alerts</div>
              <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
            </div>
            {[
              {ic: Icons.Box, color:'#EF4444', title:'6 items out of stock', sub:'Immediate action required'},
              {ic: Icons.Alert, color:'#F59E0B', title:'18 items low in stock', sub:'Reorder recommended'},
              {ic: Icons.Clock, color:'#60A5FA', title:'3 items expiring soon', sub:'Within 7 days'},
              {ic: Icons.CheckCircle, color:'#34D399', title:'All orders received', sub:'No pending deliveries'},
            ].map((a,i)=>{
              const I = a.ic;
              return (
                <div key={i} className="row-hover" style={{display:'flex', alignItems:'center', gap:14, padding:'12px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                  <div style={{width:36, height:36, borderRadius:9, color:a.color, background:`${a.color}10`, border:`1px solid ${a.color}30`, display:'grid', placeItems:'center'}}>
                    <I size={16}/>
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13.5, color:'var(--text)'}}>{a.title}</div>
                    <div style={{fontSize:12, color:'var(--muted)'}}>{a.sub}</div>
                  </div>
                  <Icons.ChevronRight size={14} style={{color:'var(--muted)'}}/>
                </div>
              );
            })}
          </div></div>

          <div className="lux-card"><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Expiry Tracker</div>
              <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
            </div>
            {[
              {name:'Heavy Cream 1L', date:'May 28, 2025 (3 days left)', pct:30, color:'#F59E0B'},
              {name:'Fresh Milk 1L', date:'May 30, 2025 (5 days left)', pct:50, color:'#F59E0B'},
              {name:'Parmesan Cheese', date:'Jun 02, 2025 (8 days left)', pct:80, color:'#34D399'},
            ].map((e, i)=>(
              <div key={i} style={{padding:'12px 0', borderBottom: i<2 ? '1px solid var(--line)':'none'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                  <div>
                    <div style={{fontSize:13.5, color:'var(--text)'}}>{e.name}</div>
                    <div style={{fontSize:12, color:'var(--muted)'}}>{e.date}</div>
                  </div>
                  <Icons.ChevronRight size={14} style={{color:'var(--muted)'}}/>
                </div>
                <div style={{height:5, borderRadius:3, background:'rgba(255,255,255,0.06)', overflow:'hidden'}}>
                  <div style={{height:'100%', width:`${e.pct}%`, background:`linear-gradient(90deg, ${e.color}, ${e.color}cc)`}}/>
                </div>
              </div>
            ))}
          </div></div>

          <div className="lux-card"><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Usage Overview</div>
              <button style={{display:'inline-flex', alignItems:'center', gap:6, padding:'6px 10px', borderRadius:8, border:'1px solid var(--line)', color:'var(--text-2)', fontSize:12}}>
                This Week <Icons.ChevronDown size={12}/>
              </button>
            </div>
            <div style={{display:'flex', alignItems:'center', gap:18}}>
              <Donut size={130} thickness={16}
                segments={[
                  {value:66, color:'#34D399'},
                  {value:19, color:'#60A5FA'},
                  {value:10, color:'#A78BFA'},
                  {value:5, color:'#FBBF24'},
                ]}
                center={<><div style={{fontFamily:'var(--font-display)', fontSize:18}}>₱ 68,450</div><div style={{fontSize:10, color:'var(--muted)', marginTop:2}}>Total Usage</div></>}
              />
              <div style={{display:'flex', flexDirection:'column', gap:8, fontSize:12, flex:1}}>
                {[
                  {label:'Food & Bev', val:'₱ 45,250', pct:'66%', color:'#34D399'},
                  {label:'Housekeeping', val:'₱ 12,850', pct:'19%', color:'#60A5FA'},
                  {label:'Amenities', val:'₱ 6,750', pct:'10%', color:'#A78BFA'},
                  {label:'Supplies', val:'₱ 3,600', pct:'5%', color:'#FBBF24'},
                ].map(s=>(
                  <div key={s.label} style={{display:'flex', alignItems:'center', gap:8}}>
                    <span className="dot" style={{background:s.color, width:6, height:6}}/>
                    <div style={{flex:1}}>
                      <div style={{color:'var(--text)', fontSize:12}}>{s.label}</div>
                      <div style={{color:'var(--muted)', fontSize:11}}>{s.val}</div>
                    </div>
                    <span style={{color:'var(--text-2)', fontSize:11}}>{s.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div></div>

          <div className="lux-card"><div className="inner">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:18}}>Top Used Items</div>
              <button style={{color:'var(--gold-2)', fontSize:13}}>View Report</button>
            </div>
            {[
              {name:'Toilet Tissue Premium', val:'120 packs', pct:95},
              {name:'Hand Soap 500ml', val:'85 pcs', pct:75},
              {name:'Bath Towel', val:'42 pcs', pct:50},
              {name:'Laundry Detergent', val:'18 btl', pct:25},
            ].map((t, i)=>(
              <div key={i} style={{padding:'10px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
                  <div style={{fontSize:13, color:'var(--text)'}}>{t.name}</div>
                  <div style={{fontSize:12, color:'var(--muted)'}}>{t.val}</div>
                </div>
                <div style={{height:5, borderRadius:3, background:'rgba(255,255,255,0.06)', overflow:'hidden'}}>
                  <div style={{height:'100%', width:`${t.pct}%`, background:'linear-gradient(90deg, #34D399, #10B981)'}}/>
                </div>
              </div>
            ))}
          </div></div>
        </div>
      </div>
    </div>
  );
};

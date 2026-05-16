import { Icons } from '../icons.jsx';
import { Avatar } from '../components.jsx';

export const Reservation = ({ onNavigate }) => {
  return (
    <div data-screen-label="Reservation">
      <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:24}}>
        <button onClick={()=>onNavigate('dashboard')} style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}>
          <Icons.ArrowLeft size={20}/>
        </button>
        <div style={{flex:1}}>
          <h1 style={{margin:0, fontFamily:'var(--font-display)', fontSize:30, fontWeight:500, letterSpacing:'0.04em'}}>
            <span style={{color:'var(--text)'}}>RESERVATION </span>
            <span style={{color:'var(--text)'}}>#1058</span>
          </h1>
          <div style={{marginTop:4, color:'var(--muted)', fontSize:13, display:'flex', alignItems:'center', gap:8}}>
            <span style={{color:'#34D399', display:'inline-flex', alignItems:'center', gap:6}}>
              <span className="dot live" style={{background:'#34D399'}}/> Confirmed
            </span>
            · Direct Booking
          </div>
        </div>
        <button style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}><Icons.Chat size={18}/></button>
        <button style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}><Icons.Phone size={18}/></button>
        <button style={{width:40, height:40, borderRadius:10, display:'grid', placeItems:'center', color:'var(--text-2)', border:'1px solid var(--line)'}}><Icons.More size={18}/></button>
        <button className="btn-ghost-gold" style={{height:44, padding:'0 18px', borderRadius:11, display:'inline-flex', alignItems:'center', gap:8}}>
          <Icons.Edit size={16}/> Edit Reservation
        </button>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:18}}>
        <div style={{display:'flex', flexDirection:'column', gap:18}}>
          <div className="lux-card"><div className="inner" style={{padding:'28px 24px'}}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <Avatar size={120} online src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=70&auto=format" name="James Anderson"/>
              <div className="eyebrow" style={{marginTop:18}}>Guest</div>
              <div style={{fontFamily:'var(--font-display)', fontSize:28, marginTop:6}}>James Anderson</div>
              <div style={{color:'var(--text-2)', fontSize:13, marginTop:4}}>james.anderson@email.com</div>
              <div style={{color:'var(--text-2)', fontSize:13}}>+61 412 345 678</div>
              <div style={{display:'flex', gap:10, marginTop:14}}>
                <span style={{display:'inline-flex', alignItems:'center', gap:6, padding:'7px 14px', borderRadius:8, border:'1px solid rgba(212,178,122,0.35)', color:'var(--gold-2)', background:'rgba(212,178,122,0.06)', fontSize:13}}>
                  <Icons.Diamond size={14}/> VIP Guest
                </span>
                <span style={{display:'inline-flex', alignItems:'center', gap:6, padding:'7px 14px', borderRadius:8, border:'1px solid rgba(52,211,153,0.30)', color:'#34D399', background:'rgba(52,211,153,0.08)', fontSize:13}}>
                  <Icons.Refresh size={14}/> Returning
                </span>
              </div>
            </div>

            <div className="hr" style={{margin:'24px 0'}}/>

            <div className="eyebrow" style={{marginBottom:14}}>Stay Details</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:18}}>
              <div>
                <div style={{color:'var(--muted)', fontSize:12, display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={12}/> CHECK-IN</div>
                <div style={{fontSize:16, color:'var(--text)', marginTop:6}}>May 24, 2025</div>
                <div style={{fontSize:13, color:'var(--muted)'}}>3:00 PM</div>
              </div>
              <div>
                <div style={{color:'var(--muted)', fontSize:12, display:'flex', alignItems:'center', gap:6}}><Icons.Calendar size={12}/> CHECK-OUT</div>
                <div style={{fontSize:16, color:'var(--text)', marginTop:6}}>May 28, 2025</div>
                <div style={{fontSize:13, color:'var(--muted)'}}>11:00 AM</div>
              </div>
            </div>

            {[
              {ic: Icons.Moon, label:'NIGHTS', val:'4 Nights'},
              {ic: Icons.Door, label:'ROOM', val:'Beach Villa #2', sub:'Ocean View'},
              {ic: Icons.Users, label:'GUESTS', val:'2 Adults'},
              {ic: Icons.Crown, label:'PLAN', val:'Bed & Breakfast'},
            ].map((r,i)=>{
              const I = r.ic;
              return (
                <div key={i} style={{display:'flex', gap:14, padding:'10px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                  <div style={{width:30, height:30, borderRadius:8, display:'grid', placeItems:'center', color:'var(--gold-2)', background:'rgba(212,178,122,0.06)', border:'1px solid rgba(212,178,122,0.18)'}}>
                    <I size={14}/>
                  </div>
                  <div>
                    <div className="eyebrow" style={{fontSize:10}}>{r.label}</div>
                    <div style={{fontSize:15, color:'var(--text)', marginTop:2}}>{r.val}</div>
                    {r.sub && <div style={{fontSize:12, color:'var(--muted)'}}>{r.sub}</div>}
                  </div>
                </div>
              );
            })}
          </div></div>

          <div className="lux-card"><div className="inner">
            <div className="eyebrow" style={{marginBottom:14}}>Requests</div>
            {[
              {ic: Icons.Clock, label:'Early Check-in', status:'Confirmed', color:'#34D399', sIc: Icons.CheckCircle},
              {ic: Icons.Plane, label:'Airport Transfer', status:'Scheduled', color:'#60A5FA', sIc: Icons.Clock},
              {ic: Icons.Crown, label:'Anniversary Setup', status:'Confirmed', color:'#34D399', sIc: Icons.CheckCircle},
              {ic: Icons.Calendar, label:'Late Check-out', status:'On Request', color:'#F59E0B', sIc: Icons.Clock},
            ].map((r,i)=>{
              const I = r.ic; const S = r.sIc;
              return (
                <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                  <div style={{display:'flex', alignItems:'center', gap:12}}>
                    <div style={{width:32, height:32, borderRadius:8, display:'grid', placeItems:'center', color:'var(--gold-2)', background:'rgba(212,178,122,0.06)', border:'1px solid rgba(212,178,122,0.18)'}}>
                      <I size={14}/>
                    </div>
                    <span style={{fontSize:14, color:'var(--text)'}}>{r.label}</span>
                  </div>
                  <div style={{display:'flex', alignItems:'center', gap:8, color:r.color, fontSize:13}}>
                    {r.status} <S size={14}/>
                  </div>
                </div>
              );
            })}
          </div></div>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:18}}>
          <div className="lux-card" style={{padding:0, position:'relative', overflow:'hidden', minHeight:280}}>
            <img src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1600&q=70&auto=format" alt=""
              style={{width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0}}/>
            <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(4,9,26,0) 30%, rgba(4,9,26,0.85))'}}/>
            <div style={{position:'relative', padding:24, minHeight:280, display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>
              <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:18}}>
                <div>
                  <div style={{fontFamily:'var(--font-display)', fontSize:30, color:'#F4EBDB', fontWeight:500}}>Beach Villa #2</div>
                  <div style={{color:'rgba(244,235,219,0.75)', fontSize:14}}>Ocean View</div>
                </div>
                <div style={{display:'flex', gap:10}}>
                  <span className="glass" style={{padding:'7px 14px', borderRadius:8, color:'#F4EBDB', fontSize:13}}>Floor 1</span>
                  <span className="glass" style={{padding:'7px 14px', borderRadius:8, color:'#F4EBDB', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
                    <Icons.Users size={14}/> 2 Guests
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lux-card"><div className="inner">
            <div className="eyebrow" style={{marginBottom:16}}>Stay Summary</div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14}}>
              {[
                {label:'Total Amount', val:'₱ 48,750', sub:'Paid', subVal:'₱ 24,375', subColor:'#34D399'},
                {label:'Balance Due', val:'₱ 24,375', sub:'Due May 24', subColor:'#F59E0B'},
                {label:'Status', val:'Confirmed', valColor:'#34D399', icon: Icons.CheckCircle, sub:'Booking Confirmed'},
                {label:'Source', val:'Direct', valColor:'#A78BFA', icon: Icons.Globe, sub:'Website'},
              ].map((c, i)=>{
                const I = c.icon;
                return (
                  <div key={i} style={{padding:'14px', borderRadius:12, border:'1px solid var(--line)', background:'rgba(255,255,255,0.02)'}}>
                    <div className="eyebrow" style={{fontSize:10}}>{c.label}</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:22, color: c.valColor || 'var(--text)', marginTop:8}}>{c.val}</div>
                    {I && <div style={{marginTop:8, color:c.valColor || 'var(--text-2)'}}><I size={18}/></div>}
                    {c.subVal && <div style={{color: c.subColor, fontSize:13, marginTop:6}}>{c.subVal}</div>}
                    {!c.subVal && <div style={{color: c.subColor || 'var(--muted)', fontSize:12, marginTop:8}}>{c.sub}</div>}
                  </div>
                );
              })}
            </div>
          </div></div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18}}>
            <div className="lux-card"><div className="inner">
              <div className="eyebrow" style={{marginBottom:14}}>Billing Summary</div>
              {[
                {ic: Icons.Receipt, label:'Room Charge (4 Nights)', val:'₱ 36,000'},
                {ic: Icons.Refresh, label:'Service Charge (10%)', val:'₱ 3,600'},
                {ic: Icons.Tag, label:'Taxes & Fees (12%)', val:'₱ 4,320'},
                {ic: Icons.Crown, label:'Add-ons', val:'₱ 4,830'},
              ].map((b,i)=>{
                const I = b.ic;
                return (
                  <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 0', borderBottom: i<3 ? '1px solid var(--line)':'none'}}>
                    <div style={{display:'flex', alignItems:'center', gap:12, color:'var(--text-2)', fontSize:14}}>
                      <I size={16} style={{color:'var(--gold-2)'}}/> {b.label}
                    </div>
                    <div style={{color:'var(--text)', fontSize:14}}>{b.val}</div>
                  </div>
                );
              })}
              <div className="hr" style={{margin:'14px 0'}}/>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:18, color:'var(--gold-2)'}}>Total Amount</div>
                <div style={{fontFamily:'var(--font-display)', fontSize:22, color:'var(--gold-2)'}}>₱ 48,750</div>
              </div>
            </div></div>

            <div className="lux-card"><div className="inner">
              <div className="eyebrow" style={{marginBottom:14}}>Additional Services</div>
              {[
                {ic: Icons.Bed, label:'Airport Transfer', sub:'One Way', val:'₱ 1,500'},
                {ic: Icons.Crown, label:'Romantic Dinner', sub:'May 25, 7:00 PM', val:'₱ 2,800'},
                {ic: Icons.Spa, label:'Spa Treatment', sub:'May 26, 2:00 PM', val:'₱ 2,530'},
              ].map((s,i)=>{
                const I = s.ic;
                return (
                  <div key={i} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 0', borderBottom:'1px solid var(--line)'}}>
                    <div style={{display:'flex', alignItems:'center', gap:12}}>
                      <I size={16} style={{color:'var(--gold-2)'}}/>
                      <div>
                        <div style={{fontSize:14, color:'var(--text)'}}>{s.label}</div>
                        <div style={{fontSize:12, color:'var(--muted)'}}>{s.sub}</div>
                      </div>
                    </div>
                    <div style={{color:'var(--text)', fontSize:14}}>{s.val}</div>
                  </div>
                );
              })}
              <button className="btn-ghost-gold" style={{marginTop:14, width:'100%', height:42, borderRadius:11, display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8}}>
                <Icons.Plus size={16}/> Add Service
              </button>
            </div></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18}}>
            <div className="lux-card"><div className="inner">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div className="eyebrow">Payment Activity</div>
                <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
              </div>
              {[
                {date:'May 10, 2025', time:'10:24 AM', title:'Payment Received', sub:'Credit Card (**** 4242)', val:'₱ 24,375', valColor:'#34D399'},
                {date:'May 10, 2025', time:'10:20 AM', title:'Deposit Paid', sub:'Credit Card (**** 4242)', val:'₱ 10,000', valColor:'#34D399'},
              ].map((p,i)=>(
                <div key={i} style={{padding:'14px 0', borderBottom: i<1 ? '1px solid var(--line)':'none'}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>
                      <div style={{display:'flex', gap:14, fontSize:12, color:'var(--muted)'}}>
                        <span>{p.date}</span><span>{p.time}</span>
                      </div>
                      <div style={{color:p.valColor, fontSize:14, marginTop:4}}>{p.title}</div>
                      <div style={{color:'var(--muted)', fontSize:12, marginTop:2}}>{p.sub}</div>
                    </div>
                    <div style={{color:'var(--text)', fontSize:16}}>{p.val}</div>
                  </div>
                </div>
              ))}
            </div></div>

            <div className="lux-card"><div className="inner">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
                <div className="eyebrow">Notes</div>
                <button style={{color:'var(--gold-2)', fontSize:13}}>View All</button>
              </div>
              <div style={{display:'flex', gap:12, alignItems:'flex-start'}}>
                <div style={{flex:1}}>
                  <div style={{color:'var(--text)', fontSize:14, lineHeight:1.55}}>
                    Guest is celebrating wedding anniversary. Special setup requested.
                  </div>
                  <div style={{color:'var(--muted)', fontSize:12, marginTop:10}}>May 10, 2025 · by David</div>
                </div>
                <Avatar size={42} online src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=60&auto=format" name="David"/>
              </div>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

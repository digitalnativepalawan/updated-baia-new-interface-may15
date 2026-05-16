import { Icons } from '../icons.jsx';
import { Donut, TopBarRight } from '../components.jsx';

const buildLine = (points) => {
  if (points.length < 2) return '';
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const t = 0.18;
    const cp1x = p1.x + (p2.x - p0.x) * t;
    const cp1y = p1.y + (p2.y - p0.y) * t;
    const cp2x = p2.x - (p3.x - p1.x) * t;
    const cp2y = p2.y - (p3.y - p1.y) * t;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
};

const Sparkline = ({ data, color = '#34D399', w = 70, h = 26 }) => {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * (w - 4) + 2,
    y: h - ((v - min) / (max - min || 1)) * (h - 6) - 3,
  }));
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={buildLine(pts)} stroke={color} strokeWidth="1.5" fill="none"/>
    </svg>
  );
};

export const Reports = ({ onNavigate }) => {
  const revenue = [12, 28, 38, 36, 56, 60, 78, 70, 82];
  const labels = ['May 17','May 18','May 19','May 20','May 21','May 22','May 23','May 24'];
  const chartW = 760, chartH = 230, padL = 50, padR = 20, padT = 20, padB = 30;
  const ymax = 100;
  const points = revenue.map((v, i) => ({
    x: padL + (i / (revenue.length - 1)) * (chartW - padL - padR),
    y: padT + (1 - v / ymax) * (chartH - padT - padB),
  }));

  return (
    <div data-screen-label="Reports">
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:24, marginBottom:28}}>
        <div>
          <h1 className="serif" style={{margin:0, fontSize:38, fontWeight:500, letterSpacing:'-0.01em'}}>Reports &amp; Analytics</h1>
          <div style={{color:'var(--muted)', marginTop:6, fontSize:14}}>Real-time insights to drive better decisions.</div>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', gap:14}}>
          <TopBarRight weather user={{name:'David', role:'Manager'}}/>
          <button style={{display:'inline-flex', alignItems:'center', gap:10, padding:'10px 16px', borderRadius:10, border:'1px solid var(--line)', color:'var(--text)', background:'rgba(255,255,255,0.02)'}}>
            <Icons.Calendar size={16}/> May 18 – May 24, 2025 <Icons.ChevronDown size={14}/>
          </button>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:14, marginBottom:18}}>
        {[
          { label:'Revenue', val:'₱ 432,850', delta:'+12.4%', icon: Icons.DollarBadge, color:'#34D399' },
          { label:'Occupancy', val:'72%', delta:'+8.6%', icon: Icons.Bed, color:'#34D399' },
          { label:'ADR', val:'₱ 6,250', delta:'+5.3%', icon: Icons.DollarBadge, color:'#34D399' },
          { label:'RevPAR', val:'₱ 4,500', delta:'+14.1%', icon: Icons.TrendUp, color:'#34D399' },
          { label:'Total Guests', val:'186', delta:'+9.8%', icon: Icons.Users, color:'#34D399' },
        ].map((k,i) => {
          const I = k.icon;
          return (
            <div key={i} className="lux-card" style={{padding:'16px 18px'}}>
              <div style={{display:'flex', alignItems:'center', gap:10, color:'var(--text-2)', fontSize:13}}>
                <div style={{width:28, height:28, borderRadius:8, display:'grid', placeItems:'center', color:'var(--gold-2)', background:'rgba(212,178,122,0.08)', border:'1px solid rgba(212,178,122,0.20)'}}>
                  <I size={14}/>
                </div>
                {k.label}
              </div>
              <div style={{fontFamily:'var(--font-display)', fontSize:30, color:'var(--text)', marginTop:10, lineHeight:1}}>{k.val}</div>
              <div style={{color:k.color, fontSize:12, marginTop:8}}>▲ {k.delta} <span style={{color:'var(--muted)'}}>vs last week</span></div>
            </div>
          );
        })}
      </div>

      <div className="lux-card" style={{marginBottom:18}}><div className="inner">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16}}>
          <div style={{fontFamily:'var(--font-display)', fontSize:22}}>Revenue Overview</div>
          <button style={{display:'inline-flex', alignItems:'center', gap:8, padding:'8px 12px', borderRadius:9, border:'1px solid var(--line)', color:'var(--text-2)', fontSize:13}}>
            Daily <Icons.ChevronDown size={14}/>
          </button>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 220px', alignItems:'center', gap:24}}>
          <svg width="100%" viewBox={`0 0 ${chartW} ${chartH}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="revFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#D4B27A" stopOpacity="0.32"/>
                <stop offset="100%" stopColor="#D4B27A" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[0,20,40,60,80,100].map(v=>{
              const y = padT + (1 - v/ymax) * (chartH - padT - padB);
              return (
                <g key={v}>
                  <line x1={padL} x2={chartW-padR} y1={y} y2={y} stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4"/>
                  <text x={padL-10} y={y+4} textAnchor="end" className="tick">₱ {v}K</text>
                </g>
              );
            })}
            {labels.map((l,i)=>{
              const x = padL + (i/(labels.length-1)) * (chartW-padL-padR);
              return <text key={i} x={x} y={chartH-8} textAnchor="middle" className="tick">{l}</text>;
            })}
            <path d={`${buildLine(points)} L ${points[points.length-1].x} ${chartH-padB} L ${points[0].x} ${chartH-padB} Z`} fill="url(#revFill)"/>
            <path d={buildLine(points)} stroke="#D4B27A" strokeWidth="2" fill="none"/>
            {points.map((p,i)=>(
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="4" fill="#D4B27A"/>
                <circle cx={p.x} cy={p.y} r="2" fill="#04091A"/>
              </g>
            ))}
          </svg>
          <div style={{borderLeft:'1px solid var(--line)', paddingLeft:24}}>
            <div style={{color:'var(--text-2)', fontSize:13}}>Total Revenue</div>
            <div style={{fontFamily:'var(--font-display)', fontSize:36, marginTop:8}}>₱ 432,850</div>
            <div style={{color:'#34D399', fontSize:13, marginTop:8}}>▲ 12.4%</div>
            <div style={{color:'var(--muted)', fontSize:12, marginTop:2}}>vs May 11 – May 17, 2025</div>
          </div>
        </div>
      </div></div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18}}>
        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:14}}>Occupancy Rate</div>
          <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:32, alignItems:'center'}}>
            <Donut size={170} thickness={22}
              segments={[
                {value:72, color:'#34D399'},
                {value:18, color:'#60A5FA'},
                {value:6, color:'#A78BFA'},
                {value:4, color:'#EF4444'},
              ]}
              center={<><div style={{fontFamily:'var(--font-display)', fontSize:38, lineHeight:1}}>72%</div><div style={{fontSize:12, color:'var(--muted)', marginTop:4}}>Average</div></>}
            />
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              {[
                {label:'Occupied', val:'72%', color:'#34D399'},
                {label:'Available', val:'18%', color:'#60A5FA'},
                {label:'Blocked', val:'6%', color:'#A78BFA'},
                {label:'Out of Order', val:'4%', color:'#EF4444'},
              ].map(s=>(
                <div key={s.label} style={{display:'flex', alignItems:'center', justifyContent:'space-between', fontSize:14}}>
                  <span style={{display:'flex', alignItems:'center', gap:10, color:'var(--text-2)'}}>
                    <span className="dot" style={{background:s.color, width:8, height:8}}/>{s.label}
                  </span>
                  <span style={{color:'var(--text)'}}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:14, color:'#34D399', fontSize:13}}>▲ 8.6% <span style={{color:'var(--muted)'}}>vs last week</span></div>
        </div></div>

        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:14}}>Room Status Summary</div>
          <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:32, alignItems:'center'}}>
            <Donut size={170} thickness={22}
              segments={[
                {value:34, color:'#34D399'},
                {value:9, color:'#60A5FA'},
                {value:3, color:'#F59E0B'},
                {value:2, color:'#EF4444'},
              ]}
              center={<><Icons.Bed size={22} style={{color:'var(--gold-2)'}}/><div style={{fontFamily:'var(--font-display)', fontSize:30, lineHeight:1, marginTop:4}}>48</div><div style={{fontSize:11, color:'var(--muted)', marginTop:2}}>Total Rooms</div></>}
            />
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              {[
                {label:'Occupied', val:'34 (71%)', color:'#34D399'},
                {label:'Available', val:'9 (19%)', color:'#60A5FA'},
                {label:'To Clean', val:'3 (6%)', color:'#F59E0B'},
                {label:'Out of Order', val:'2 (4%)', color:'#EF4444'},
              ].map(s=>(
                <div key={s.label} style={{display:'flex', alignItems:'center', justifyContent:'space-between', fontSize:14}}>
                  <span style={{display:'flex', alignItems:'center', gap:10, color:'var(--text-2)'}}>
                    <span className="dot" style={{background:s.color, width:8, height:8}}/>{s.label}
                  </span>
                  <span style={{color:'var(--text)'}}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{marginTop:14}}>
            <button onClick={()=>onNavigate('housekeeping')} style={{color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
              View Housekeeping Board <Icons.ArrowRight size={14}/>
            </button>
          </div>
        </div></div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:18}}>
        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:18}}>Department Performance</div>
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            {[
              {label:'Kitchen', val:92, color:'#FBBF24'},
              {label:'Housekeeping', val:88, color:'#34D399'},
              {label:'Reception', val:84, color:'#60A5FA'},
              {label:'Maintenance', val:76, color:'#A78BFA'},
            ].map(d=>(
              <div key={d.label} style={{display:'grid', gridTemplateColumns:'120px 1fr 50px', gap:14, alignItems:'center'}}>
                <div style={{color:'var(--text-2)', fontSize:13}}>{d.label}</div>
                <div style={{height:8, borderRadius:4, background:'rgba(255,255,255,0.05)', overflow:'hidden'}}>
                  <div style={{height:'100%', width:`${d.val}%`, background:`linear-gradient(90deg, ${d.color}, ${d.color}cc)`, borderRadius:4}}/>
                </div>
                <div style={{textAlign:'right', color:'var(--text)', fontSize:13}}>{d.val}%</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex', justifyContent:'space-between', color:'var(--muted)', fontSize:11, marginTop:12, paddingLeft:134}}>
            <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
          </div>
          <button style={{marginTop:14, color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            View All Departments <Icons.ArrowRight size={14}/>
          </button>
        </div></div>

        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:14}}>Service Requests</div>
          <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:32, alignItems:'center'}}>
            <Donut size={170} thickness={22}
              segments={[
                {value:14, color:'#34D399'},
                {value:6, color:'#60A5FA'},
                {value:3, color:'#F59E0B'},
                {value:1, color:'#EF4444'},
              ]}
              center={<><div style={{fontFamily:'var(--font-display)', fontSize:34, lineHeight:1}}>24</div><div style={{fontSize:11, color:'var(--muted)', marginTop:4}}>Total</div></>}
            />
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              {[
                {label:'Completed', val:'14 (58%)', color:'#34D399'},
                {label:'In Progress', val:'6 (25%)', color:'#60A5FA'},
                {label:'Pending', val:'3 (13%)', color:'#F59E0B'},
                {label:'Overdue', val:'1 (4%)', color:'#EF4444'},
              ].map(s=>(
                <div key={s.label} style={{display:'flex', alignItems:'center', justifyContent:'space-between', fontSize:14}}>
                  <span style={{display:'flex', alignItems:'center', gap:10, color:'var(--text-2)'}}>
                    <span className="dot" style={{background:s.color, width:8, height:8}}/>{s.label}
                  </span>
                  <span style={{color:'var(--text)'}}>{s.val}</span>
                </div>
              ))}
            </div>
          </div>
          <button style={{marginTop:14, color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            View All Requests <Icons.ArrowRight size={14}/>
          </button>
        </div></div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:16}}>
        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:18}}>Top Revenue Sources</div>
          <div className="eyebrow" style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:10, paddingBottom:10, borderBottom:'1px solid var(--line)'}}>
            <span>Source</span><span>Revenue</span><span>Percentage</span><span>Trend</span>
          </div>
          {[
            {label:'Room Bookings', icon:Icons.Bed, rev:'₱ 298,450', pct:'69%', data:[40,42,48,46,52,58,60]},
            {label:'F&B', icon:Icons.Knife, rev:'₱ 78,900', pct:'18%', data:[20,28,24,32,30,38,34]},
            {label:'Spa Services', icon:Icons.Spa, rev:'₱ 32,600', pct:'8%', data:[10,14,12,18,16,22,20]},
            {label:'Other Services', icon:Icons.Box, rev:'₱ 22,900', pct:'5%', data:[8,12,10,14,12,18,16]},
          ].map((r,i)=>{
            const I = r.icon;
            return (
              <div key={i} style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:10, padding:'14px 0', borderBottom: i<3 ? '1px solid var(--line)' : 'none', alignItems:'center'}}>
                <div style={{display:'flex', alignItems:'center', gap:12}}>
                  <div style={{width:34, height:34, borderRadius:9, color:'var(--gold-2)', background:'rgba(212,178,122,0.06)', border:'1px solid rgba(212,178,122,0.20)', display:'grid', placeItems:'center'}}>
                    <I size={16}/>
                  </div>
                  <span style={{fontSize:14, color:'var(--text)'}}>{r.label}</span>
                </div>
                <span style={{fontSize:14, color:'var(--text)'}}>{r.rev}</span>
                <span style={{fontSize:14, color:'var(--text)'}}>{r.pct}</span>
                <Sparkline data={r.data} color="#34D399" w={120} h={28}/>
              </div>
            );
          })}
          <button style={{marginTop:12, color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            View Full Report <Icons.ArrowRight size={14}/>
          </button>
        </div></div>

        <div className="lux-card"><div className="inner">
          <div style={{fontFamily:'var(--font-display)', fontSize:20, marginBottom:14}}>Insights</div>
          <div style={{display:'flex', flexDirection:'column', gap:16}}>
            {[
              {icon: Icons.Sparkles, title:'Revenue is up 12.4%', body:'Great job! Your revenue increased compared to last week.', color:'#FBBF24'},
              {icon: Icons.TrendUp, title:'Occupancy improving', body:'Your occupancy rate improved by 8.6% this week.', color:'#34D399'},
              {icon: Icons.Users, title:'More guests', body:'You hosted 17 more guests compared to last week.', color:'#60A5FA'},
            ].map((ins, i)=>{
              const I = ins.icon;
              return (
                <div key={i} style={{display:'flex', gap:14, alignItems:'flex-start'}}>
                  <div style={{width:36, height:36, borderRadius:10, color:ins.color, background:`${ins.color}10`, border:`1px solid ${ins.color}30`, display:'grid', placeItems:'center', flexShrink:0}}>
                    <I size={16}/>
                  </div>
                  <div>
                    <div style={{fontSize:14, color:'var(--text)', fontWeight:500}}>{ins.title}</div>
                    <div style={{fontSize:13, color:'var(--muted)', marginTop:3, lineHeight:1.5}}>{ins.body}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <button style={{marginTop:18, color:'var(--gold-2)', fontSize:13, display:'inline-flex', alignItems:'center', gap:6}}>
            View All Insights <Icons.ArrowRight size={14}/>
          </button>
        </div></div>
      </div>
    </div>
  );
};

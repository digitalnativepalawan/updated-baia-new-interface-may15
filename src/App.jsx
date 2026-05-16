import { useState, useEffect } from 'react';
import { Shell } from './components.jsx';
import { Welcome } from './screens/Welcome.jsx';
import { Dashboard } from './screens/Dashboard.jsx';
import { ServiceMode } from './screens/ServiceMode.jsx';
import { Kitchen } from './screens/Kitchen.jsx';
import { Housekeeping } from './screens/Housekeeping.jsx';
import { Reports } from './screens/Reports.jsx';
import { Reservation } from './screens/Reservation.jsx';
import { Inventory } from './screens/Inventory.jsx';
import { GuestPortal } from './screens/GuestPortal.jsx';
import { GuestMobile } from './screens/GuestMobile.jsx';

const routeTitle = (r) => ({
  people:'People', settings:'Settings', notifications:'Notifications', profile:'My Profile'
}[r] || r);

const Placeholder = ({ title, onNavigate }) => (
  <div data-screen-label={title}>
    <h1 className="serif" style={{margin:0, fontSize:38, fontWeight:500}}>{title}</h1>
    <div style={{color:'var(--muted)', marginTop:6, fontSize:14}}>Module coming online soon.</div>
    <div className="lux-card" style={{marginTop:24, padding:'80px 30px', textAlign:'center'}}>
      <div style={{fontFamily:'var(--font-display)', fontSize:30, color:'var(--gold-2)'}}>Under Refinement</div>
      <div style={{color:'var(--muted)', marginTop:10, maxWidth:480, marginLeft:'auto', marginRight:'auto'}}>
        This area of the BAIA Boutique operating system is being prepared.
      </div>
      <div style={{marginTop:24, display:'flex', gap:12, justifyContent:'center'}}>
        <button onClick={()=>onNavigate('dashboard')} className="btn-primary" style={{height:44, padding:'0 22px', borderRadius:11}}>Back to Dashboard</button>
      </div>
    </div>
  </div>
);

export const App = () => {
  const initial = (() => {
    const h = (window.location.hash || '').replace('#', '');
    return h || 'welcome';
  })();
  const [route, setRoute] = useState(initial);

  useEffect(() => {
    const onHash = () => {
      const h = (window.location.hash || '').replace('#', '');
      if (h) setRoute(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (to) => {
    setRoute(to);
    window.location.hash = to;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (route === 'welcome') return <Welcome onContinue={navigate}/>;
  if (route === 'guest-portal') return <GuestPortal onNavigate={navigate}/>;
  if (route === 'guest-mobile') return <GuestMobile onNavigate={navigate}/>;

  const screen = () => {
    switch (route) {
      case 'dashboard': return <Dashboard onNavigate={navigate}/>;
      case 'service-mode': return <ServiceMode onNavigate={navigate}/>;
      case 'kitchen': return <Kitchen onNavigate={navigate}/>;
      case 'housekeeping': return <Housekeeping onNavigate={navigate}/>;
      case 'reports': return <Reports onNavigate={navigate}/>;
      case 'reservation': return <Reservation onNavigate={navigate}/>;
      case 'inventory': return <Inventory onNavigate={navigate}/>;
      case 'operations': return <Kitchen onNavigate={navigate}/>;
      case 'people':
      case 'settings':
      case 'notifications':
      case 'profile':
        return <Placeholder title={routeTitle(route)} onNavigate={navigate}/>;
      default: return <Dashboard onNavigate={navigate}/>;
    }
  };

  return (
    <Shell active={route} onNavigate={navigate}>
      {screen()}
    </Shell>
  );
};

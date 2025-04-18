import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import Service from './Service';
import TradeAction from './TradeAction';
import Ranking from './Ranking';

const Navigation = () => {
  return (
    <HashRouter>
      <div className='min-h-screen bg-gray-100'>
        <nav className='bg-gray-800 shadow-lg'>
          <div className='max-w-5xl mx-auto px-6 py-3 flex justity-center space-x-40'>
            <NavLink
              to="/"
              end 
              className={({ isAction }) =>
                `text-lg font-medium tracking-wide transition duration-150 ${
                  isActive
                    ? 'text-white border-b-2 border-white pd-1'
                    : 'text-gray-400 hover:text-white'
                }`
            }
              >
                ランキング
              </NavLink>
          </div>
        </nav>
        
        <div>
          <Routes>
            <Route path="/" element={<Service/>} />
            <Route path="/trade" element={<TradeAction />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default Navigation;
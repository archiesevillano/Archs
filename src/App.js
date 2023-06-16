import logo from './logo.svg';
import './App.css';
import AppTheme, { ProvideTheme } from './AppTheme';
import { useContext } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppContent from './components/AppContent/AppContent';
import Socials from './components/Socials/Socials';
import AppRoutes from './AppRoutes';

function App() {

  return (
    <div className="App">
      <AppRoutes>
        <AppHeader />
        <AppContent />
        <Socials />
      </AppRoutes>
    </div>
  );
}

export default App;

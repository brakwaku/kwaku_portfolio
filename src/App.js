import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import IBMPage from './pages/IBMPage';
import FlexsimPage from './pages/FlexsimPage';
import ChurchPage from './pages/ChurchPage';
import BuildingfitPage from './pages/BuildingfitPage';
import BYUIPage from './pages/BYUIPage';
import AboutPage from './pages/AboutPage';
import DesignerPage from './pages/DesignerPage';
import DeveloperPage from './pages/DeveloperPage';
import Footer from './components/Footer';
import RecurringMenu from './components/RecurringMenu';

function App() {
  return (
    <Router>
      <div className='main_wrapper'>
        <Header />
        <Routes>
          <Route className='home' path='/' element={<HomePage />} />
          <Route path='/ibm' element={<IBMPage />} />
          <Route path='/flexsim' element={<FlexsimPage />} />
          <Route
            path='/thechurchofjesuschristoflatterdaysaints'
            element={<ChurchPage />}
          />
          <Route path='/buildingfit' element={<BuildingfitPage />} />
          <Route path='/byui' element={<BYUIPage />} />
          <Route path='/about-me' element={<AboutPage />} />
          <Route path='/designer' element={<DesignerPage />} />
          <Route path='/developer' element={<DeveloperPage />} />
        </Routes>
      </div>
      <RecurringMenu />
      <Footer />
    </Router>
  );
}

export default App;

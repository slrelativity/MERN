//This component file is the storage container for the project and handles the routing of the function and files

import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

// Project function is created and maintained here
function App() {

  return (
        <div className="app">
  {/* The order or layout of this structure matters when displaying */}
    <Header/>
    <Navigation/>
    <MainContent/>
    <Subcontent/>
    <Advertisement/>
      </div>
  );
}
// This will export the project to your HTML
export default App
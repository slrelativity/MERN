import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {

  return (
        <div className="app">
  
    <Header/>
    <Navigation/>
    <MainContent/>
    <Subcontent/>
    <Advertisement/>
      </div>
  );
}
export default App
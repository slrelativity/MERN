import './App.css'
import Birthday from './assets/components/Birthday'


function App() {
return(
    <>   
    <Birthday fname="Jane" lname="Doe" age={45} hair="Black"/>
    <Birthday fname="John" lname="Smith" age={88} hair="Brown"/>

    </>
    );

}

export default App

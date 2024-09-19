import { Link, Route, Routes } from 'react-router-dom'
import DashBoard from './views/dashBoard'
import AddJob from './views/addJob'
import Details from './views/details'
import Update from './views/update'
import { BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <>
    <h1>Jobs Board</h1>
    <p>
      <Link to="/">Home</Link>
    </p>

    <Routes>
      <Route path="/" element= {<DashBoard />} />
      <Route path="/jobs/new" element= {<AddJob />} />
      <Route path="/jobs/:id" element= {<Details />} />
      <Route path="/jobs/:id/edit" element= {<Update />} />
    </Routes>
    {/* <Link to="/jobs/new">Add a New Job</Link> */}
    </>
  )
}

export default App

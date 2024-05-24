import './App.css'
import Sidebar from './components/sidebar'
import Contentarea from './components/Contentarea'
import Notes from './components/Notes'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Edit from './components/Edit'

function App() {
  return <>
    <div id="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={
            <>
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Contentarea />
                  <div className="container-fluid">
                    <Notes />
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/edit/:id" element={
            <>
              <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <Edit />
              </div>
            </>
          } />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>

}

export default App

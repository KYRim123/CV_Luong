import React, { Fragment } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import LayoutDefault from './layouts/layoutDefault/LayoutDefault'
import { routesPublic } from './routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routesPublic.map((route, index) => {
              let Layout = LayoutDefault
              route.layout ? Layout = route.layout : route.layout === null ? Layout = Fragment : Layout = LayoutDefault
              const Page = route.component
              return <Route
                key={index}
                path={route.path}
                element={<Layout><Page/></Layout>}
              ></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  )

}

export default App;

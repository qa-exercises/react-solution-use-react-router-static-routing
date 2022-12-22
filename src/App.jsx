import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './style.css'

/*

💪 Exercise: Use React Router to set up simple static routing

Here we have a simple static website with a "Home" page and an "About" page. However, the routing hasn't been set up quite yet.

🎯 Your task:

- In the <Navbar> component (found in src/components/Navbar.jsx), change the <p> tags to React Router's <Link> component instead.
  - You'll need to add an import statement to Navbar.jsx that imports the Link component from the 'react-router-dom' package.
  - Make sure the links have a "to" prop pointing to the correct routes.

- Set up the routing in App.jsx so that the <HomePage> component is displayed on the "/" route and the <AboutPage> component is displayed on the "/about" route.
  - The page components are found in the src/pages folder.
  - You'll need React Router's BrowserRouter, Routes and Route components from the 'react-router-dom' package.

💡 Tip:
- Use the example as a reference:
  https://stackblitz.com/edit/react-example-simple-static-routing?file=src/App.jsx 

*/

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

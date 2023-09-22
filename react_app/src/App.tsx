import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/scss/App.scss'
import Home from "./pages/Home";
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import AboutMe from './pages/AboutMe';
import WorkTimeLine from './pages/WorkTimeLine';
import Skills from './pages/Skills';

// function App() {
//   return (
//     <Resume/>
//   )
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work-history" element={<WorkTimeLine />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

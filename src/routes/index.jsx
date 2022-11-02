import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Films from '../pages/Films'
import Peoples from '../pages/Peoples'
import FilmsDetails from '../pages/FilmsDetails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Films />} />
      <Route path="/films" element={<Films />} />
      <Route path="/peoples" element={<Peoples />} />
      <Route path="/films-details" element={<FilmsDetails />} />
    </Routes>
  )
}

export default AppRoutes
import React from 'react'
import { Home } from './pages/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Country } from './pages/Country'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ maxWidth: 800, mx: 'auto', my: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Box>
    </>
  )
}

export default App

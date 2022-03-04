import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [country, setCountry] = useState('')

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setError(!country)
    console.log('country: ', country)
    navigate('/country', {
      state: { country },
    })
  }
  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: '30px', my: 10 }}>
        Weather App
      </Typography>

      <Box component={'form'} onSubmit={handleSubmit}>
        {error && (
          <Alert sx={{ my: 2 }} severity="error">
            Please Type the Country Name
          </Alert>
        )}
        <TextField
          fullWidth
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Enter Country"
          variant="filled"
        />

        <Button
          type="submit"
          sx={{ my: 2 }}
          fullWidth
          variant="contained"
          color="success"
          disabled={!country}
        >
          Submit
        </Button>
      </Box>
    </Box>
  )
}

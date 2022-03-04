import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  const [country, setCountry] = useState('')

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
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
        <FormControl fullWidth variant="outlined" sx={{ my: 2 }}>
          <InputLabel htmlFor="country">Enter Country</InputLabel>
          <Input
            sx={{ px: 2 }}
            fullWidth
            role="TextField"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </FormControl>

        <Button
          aria-label="Submit"
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

import React, { ReactNode, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { CenteredCircularProgress } from '../../components/CenteredCircularProgress'
import { ICountry } from '../../types/Country'
import { ShowErrorMessage } from '../../components/ShowErrorMessage'
import { WeatherInfo } from '../../components/WeatherInfo'
import { COUNTRIES_API } from '../../util/constants'

interface CountryProps {
  children?: ReactNode
}

export const Country: React.FC<CountryProps> = () => {
  const { state }: any = useLocation()
  if (!state.country) {
    return <Typography>Something Went Wrong. Please Try again</Typography>
  }
  const { data, loading, error } = useAxios<ICountry[]>(
    `${COUNTRIES_API}${state.country}`
  )

  const [showWeather, setShowWeather] = useState(false)

  const navigate = useNavigate()
  return (
    <Box sx={{ my: 5 }}>
      <CenteredCircularProgress loading={loading} />
      {error && <ShowErrorMessage errorMsg={'Invalid Country Name'} />}
      {data && (
        <Box role="CountryData">
          <Box sx={{ display: 'flex', alignItems: 'center', my: 5, gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/')}
            >
              Go Back
            </Button>
            <Typography sx={{ fontWeight: 700, fontSize: '30px' }}>
              Country Details
            </Typography>
          </Box>

          <Avatar
            alt={data[0].name.common}
            src={data[0].flags.svg}
            sx={{ width: 100, height: 100 }}
          />
          <Typography sx={{ my: 2, fontWeight: 600, fontSize: '20px' }}>
            Country Name: {data[0].name.common}
          </Typography>

          <Typography>Capital: {data[0].capital}</Typography>
          <Typography>
            Latitude: {data[0].latlng[0]}, Longitude: {data[0].latlng[1]}
          </Typography>
          <Typography>Total Population: {data[0].population}</Typography>

          <Button
            onClick={() => setShowWeather(!showWeather)}
            color="primary"
            variant="contained"
            sx={{ my: 2 }}
          >
            {showWeather ? 'Hide Capital Weather' : 'Show Capital Weather'}
          </Button>

          {showWeather && <WeatherInfo capital={data[0].capital} />}
        </Box>
      )}
    </Box>
  )
}

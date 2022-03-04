import React, { ReactNode } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import useAxios from '../../hooks/useAxios'
import { WEATHER_STACK_API } from '../../util/constants'
import { IWeatherResponse } from '../../types/weatherResponse'
import { CenteredCircularProgress } from '../CenteredCircularProgress'
import { ShowErrorMessage } from '../ShowErrorMessage'

interface WeatherInfoProps {
  children?: ReactNode
  capital: string
}

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ capital }) => {
  const { data, loading, error } = useAxios<IWeatherResponse | null>(
    `${WEATHER_STACK_API}&query=${capital}`
  )
  return (
    <Box>
      <CenteredCircularProgress loading={loading} />

      {data?.error && (
        <ShowErrorMessage errorMsg={'Could not find the data for this city'} />
      )}

      {data?.current && (
        <Box role="WeatherData">
          <Avatar
            alt={'Weather Icon'}
            src={data.current.weather_icons[0]}
            sx={{ width: 30, height: 30, my: 2 }}
          />
          <Typography>Temperature: {data.current.temperature}</Typography>
          <Typography>Wind Speed: {data.current.wind_speed}</Typography>
          <Typography>Precip: {data.current.precip}</Typography>
        </Box>
      )}
    </Box>
  )
}

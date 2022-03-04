import { Box, CircularProgress } from '@mui/material'
import React, { ReactNode } from 'react'

interface CenteredCircularProgressProps {
  children?: ReactNode
  loading?: boolean
}

export const CenteredCircularProgress = ({ loading = true }) => {
  if (!loading) {
    return <></>
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  )
}

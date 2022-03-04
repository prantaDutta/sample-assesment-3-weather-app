import React, { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'

interface ShowErrorMessageProps {
  children?: ReactNode
  errorMsg?: string
}

export const ShowErrorMessage: React.FC<ShowErrorMessageProps> = ({
  errorMsg = 'Something Went Wrong',
}) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: '30px', mt: 5 }}>
        {errorMsg}
      </Typography>
    </Box>
  )
}

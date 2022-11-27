import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function BasicCard() {
  const clickHandler = () => console.log('hello world')

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Hello MUI
        </Typography>
        <Typography variant='body2'>
          Try edit me, to see magic happen
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={clickHandler}>
          Click me
        </Button>
      </CardActions>
    </Card>
  )
}

export function App(props) {
  return (
    <div className='App'>
      <BasicCard />
    </div>
  )
}

// Log to console
console.log('Hello console')
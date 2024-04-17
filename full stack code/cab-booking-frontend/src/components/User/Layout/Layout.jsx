import React, { Children } from 'react'
import {Grid,TextField,Button} from '@mui/material'

const Layout = ({children}) => {
  return (
    <main className="h-screen border-red-500 border-">
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
          { children}k
        </Grid>
        <Grid item className="h-screen w-full " xs={0} md={4} lg={7}>
          <img
            className="w-full h-full object-cover object-right-top"
            src={
             "https://olawebcdn.com/images/v1/bg_city.jpg" || "/car.jpg"
            }
          ></img>
        </Grid>
      </Grid>
    </main>
  )
}

export default Layout
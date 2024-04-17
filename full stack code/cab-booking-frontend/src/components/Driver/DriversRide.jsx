"use client"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useSelector } from 'react-redux'

// ** Icons Imports
// import TrendingUp from 'mdi-material-ui/TrendingUp'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import DotsVertical from 'mdi-material-ui/DotsVertical'
// import CellphoneLink from 'mdi-material-ui/CellphoneLink'
// import AccountOutline from 'mdi-material-ui/AccountOutline'


const renderStats = () => {
  const { auth, driver, ride } = useSelector((store) => store);
  const salesData = [
    {
        stats: driver.currentRide?1:0,
        color: '#F7CD2E',
        title: 'Current',
        icon:"https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
        // icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
      },
  {
    stats: '2',
    title: 'Cancle',
    color: '#D82E2F',
    icon:"https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
    // icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: driver.completedRides?.length,
    title: 'Completed',
    color: '#00D84A',
    icon:"https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_640.png"
    // icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  
  {
    stats: "₹"+auth.user?.totalRevenue || "₹0",
    color: '#5A20CB',
    title: 'Revenue',
    icon: "https://shopwithzosh.vercel.app/images/misc/trophy.png" 
  }
]


  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            // width: 44,
            height: 44,
            // boxShadow: 3,
            // color: 'common.white',
            // backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar> */}
        <img className='h-20 w-20 rounded-md content-start mr-5 p-2' src={item.icon} alt="" />
        
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems:'center' }}>
          <Typography sx={{color:item.color}} color={item.color} className='font-semibold' >{item.title}</Typography>
          <Typography sx={{color:item.color}}>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const DriversRide = () => {
  return (
    <Card className='w-full'>
      <CardHeader
        title='My Rides'
      
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important',
            fontWeight: "bold"
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container >
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DriversRide

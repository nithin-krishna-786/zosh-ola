import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { startRideAction } from '@/Redux/Ride/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OTPModal({open,handleClose,rideId}) {
    const dispatch=useDispatch();
 
    const { ride } = useSelector((store) => store);
    const [otp,setOtp]=React.useState();

    const handleStartRide = () => {
        dispatch(startRideAction({id:rideId,data:{otp}}));
        console.log("start ride");
    };
    
  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div>
                <p className='mb-5 font-bold text-2xl text-center'>ENTER OTP</p>
                <TextField onChange={(e)=>setOtp(e.target.value)} className='w-full py-5' color='secondary' size='small' id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        
        <div className='mt-5 flex flex-col justify-center'>
        <Button onClick={handleStartRide} color={"secondary"} variant='contained' className='mt-5'>Start Ride</Button> 

       {ride.startRide && <p className={`py-5 ${ride.startRide.error?"text-red-500":'text-green-600'} text-center`}>{ride.startRide?.error?ride.startRide.error:ride.startRide?.message}</p>}

        </div>
               </Box>
      </Modal>
    </div>
  );
}
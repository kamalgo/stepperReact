import React,{useContext} from 'react';
import { Button, TextField } from "@mui/material";
import { multiStepContext } from '../StepContext';


const ComDetails = () => {

    const{setStep, userData, setUserData, submitData} = useContext(multiStepContext);

    return (
        <div>
        <div>
            <TextField label="Address" value={userData['address']} onChange={(e)=>setUserData({...userData,"address" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
        <div>
            <TextField label="Pincode" value={userData['pincode']} onChange={(e)=>setUserData({...userData,"pincode" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <Button variant='contained' onClick={()=>setStep(2)} color="secondary">Back</Button><span> </span>
            <Button variant='contained' onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>
    );
}

export default ComDetails;

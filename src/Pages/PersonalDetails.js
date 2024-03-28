import React,{useContext} from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from '../StepContext';


const PersonalDetails = () => {
    const{setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div>
        <div>
            <TextField label="Full Name" value={userData['fullname']} onChange={(e)=>setUserData({...userData,"fullname" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
        <div>
            <TextField label="Email" value={userData['email']} onChange={(e)=>setUserData({...userData,"email" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <Button variant='contained' onClick={()=>setStep(2)} color="primary">Next</Button>
            </div>
        </div>
    );
}

export default PersonalDetails;

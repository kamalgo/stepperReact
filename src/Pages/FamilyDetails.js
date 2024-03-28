import React, { useContext } from 'react';
import { Button, TextField } from "@mui/material";
import { multiStepContext } from '../StepContext';

const FamilyDetails = () => {
    const{setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div>

        <div>
            <TextField label="Father's Name" value={userData['fathersname']} onChange={(e)=>setUserData({...userData,"fathersname" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
            <TextField label="Mother's Name" value={userData['mothersname']} onChange={(e)=>setUserData({...userData,"mothersname" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        </div>

        <div>
        <Button variant='contained' onClick={()=>setStep(1)} color="primary">Back</Button><span> </span>
        <Button variant='contained' onClick={()=>setStep(3)} color="primary">Next</Button>     
        </div>

        </div>
    );
}

export default FamilyDetails;

import React from 'react'
import { Button, TextField } from '@mui/material'


export default function StudentDetails() {
    return (
        <div>
      
             <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            />
            <br/>
             <TextField
            helperText="Please enter your city"
            id="demo-helper-text-aligned"
            label="City"
            />
               <br/>
             <TextField
            helperText="Please enter your age"
            id="demo-helper-text-aligned"
            label="Age"
            />
               <br/>
                <TextField
            helperText="Please enter your education"
            id="demo-helper-text-aligned"
            label="Edducation"
            />
              <br/>
             <TextField
            helperText="Please enter your gender"
            id="demo-helper-text-aligned"
            label="Gender"
            />
               <br/>
                <TextField
            helperText="Please enter your conatct"
            id="demo-helper-text-aligned"
            label="Number"
            />
            <br/>
            <Button variant="contained">Submit</Button>
          
        </div>
    )
}


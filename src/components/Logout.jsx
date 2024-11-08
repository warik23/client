import { Button } from '@mui/material'
import React from 'react'

export const Logout = ({setIsLoggedIn}) => {
  return (
    <div>
       <Button variant="contained"
        sx={{position: "fixed", top:"5px", right:"5px"}}
        onClick={()=>setIsLoggedIn(false)}
       >Logout</Button>
    </div>
  )
}



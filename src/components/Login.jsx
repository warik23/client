import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const Login = ({setIsLoggedIn}) => {
    const [username,setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(null);
    const [isValidPw, setIsValidPw] = useState(null);

    const handleLogin=()=>{
        console.log(username,pw);
        import.meta.env.VITE_USERNAME==username && import.meta.env.VITE_PW==pw ? setIsLoggedIn(true) : setIsLoggedIn(false)

    }


  return (
    <div className='login'>
        <h3>Login Form</h3>
        <TextField id="standard-basic" label="Username" variant="standard"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            error={!isValidUsername && isValidUsername!=null}
            onBlur={()=>setIsValidUsername(import.meta.env.VITE_USERNAME==username)}
        />
        <TextField id="standard-basic" label="Password" type="password" variant="standard"
            value={pw}
            onChange={(e)=>setPw(e.target.value)}
            error={!isValidPw && isValidPw!=null}
            onBlur={()=>setIsValidPw(import.meta.env.VITE_PW==pw)}
        
        />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  )
}



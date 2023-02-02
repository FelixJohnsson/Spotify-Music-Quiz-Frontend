import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const LoginForm = () => {
    return (
        <div >
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 2, width: '40ch' },
                }}
                autoComplete="off"
                className="LoginScreen-Container"
                >
                <h1 className="LoginScreenHeader">
                    Login
                </h1>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                />
                <TextField
                    required
                    id="outlined-disabled"
                    label="Password"
                />
            </Box>
        </div>
    )
}

interface LoginButtonProps {
    onClick: () => void
}
const LoginButton = ({ onClick }: LoginButtonProps) => {
    return (
        <Button variant="contained" color="success" size="large" onClick={onClick}>Login through Spotify</Button>
    )
}

export default LoginButton;
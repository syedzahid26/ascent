'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { MdVisibility } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        console.log("remember me" + rememberMe);


    };
    const [emailInput, setEmailInput] = useState();
    const [passwordInput, setInputPassword] = useState();
    // Input error 
    const [emailAddresError, setEmailAddresError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    // validation for onBlur Email Address;
    const isEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
    const handleEmail = () => {
        if (!isEmail(emailInput)) {
            setEmailAddresError(true);
            return;
        }
        setEmailAddresError(false)
    }
    // Validation for onBlur password
    const handlePassword = () => {
        if (!passwordInput || passwordInput.length < 5 || passwordInput > 20) {
            setPasswordError(true)
            return;
        }
        setPasswordError(false)
    }
    // show password icon 
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    // checked validation of checkbox
    const [rememberMe, setRememberMe] = useState();

    return (
        <div className='login_wrapper mb20'>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={emailInput}
                                onChange={(event) => setEmailInput(event.target.value)}
                                error={emailAddresError}
                                onBlur={handleEmail}
                            />

                            <span>{ }</span>
                            <TextField
                                margin='noraml'
                                required
                                fullWidth
                                label='Password'
                                variant="outlined"
                                id='password'
                                name='password'
                                autoFocus
                                autoComplete="current-password"
                                value={passwordInput}
                                onBlur={handlePassword}
                                error={passwordError}
                                type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                                onChange={(event) => setInputPassword(event.target.value)}
                                InputProps={{ // <-- This is where the toggle button is added.
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Checkbox
                                onChange={(event) => setRememberMe(event.target.checked)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> <span className='text-align bold500'>Remember me</span>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/createaccount" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}
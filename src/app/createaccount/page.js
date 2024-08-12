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
import { AiFillLock } from 'react-icons/ai'
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

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        console.log(firstNameInput, lastnameInput);
    };

    // validation for first name 
    const [firstNameInput, setFirstNameInput] = useState()
    const [firstNameError, setFirstNameError] = useState(false)
    const handleFirstName = () => {
        if (!firstNameInput || firstNameInput.length < 4 || firstNameInput.length > 20) {
            setFirstNameError(true);
            return;
        }
        setFirstNameError(false);
    }

    // validation for last name 
    const [lastnameInput, setLastNameInput] = useState()
    const [lastnameError, setLastNameError] = useState(false)
    const handleLastName = () => {
        if (!lastnameInput || lastnameInput.length < 4 || lastnameInput.length > 20) {
            setLastNameError(true);
            return;
        }
        setLastNameError(false)
    }
    // validation for onBlur Email Address;
    const [emailAddresError, setEmailAddresError] = useState(false)

    const [emailInput, setEmailInput] = useState();


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
    const [passwordInput, setInputPassword] = useState();
    const [passwordError, setPasswordError] = useState(false)
    const handlePassword = () => {
        if (!passwordInput || passwordInput.length < 5 || passwordInput > 20) {
            setPasswordError(true)
            return;
        }
        setPasswordError(false);
    }
    // show password icon 
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    // check box
    const [rememberMe, setRememberMe] = useState();
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" className='mb20'>
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
                        <AiFillLock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={firstNameError}
                                    onChange={(event) => setFirstNameInput(event.target.value)}
                                    onBlur={handleFirstName}
                                    value={firstNameInput}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    error={lastnameError}
                                    onBlur={handleLastName}
                                    value={lastnameInput}
                                    onChange={(event) => setLastNameInput(event.target.value)}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={emailInput}
                                    onChange={(event) => setEmailInput(event.target.value)}
                                    error={emailAddresError}
                                    onBlur={handleEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
                                <Checkbox
                                    onChange={(event) => setRememberMe(event.target.checked)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                /> <span className='text-align bold500'>Remember me</span>
                            </Grid>
                        </Grid>
                        <Button

                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
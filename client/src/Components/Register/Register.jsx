import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function RegistrationForm() {
    document.documentElement.style.backgroundColor = "#1F0A4E";
    return (
        <Container
            displayGutters
            sx={{
                backgroundColor: '#4618AC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '5%',
                width: '600px',
                minHeight: '80vh',
                borderRadius: '15px',
                boxShadow:'0px 10px 100px 5px #400857'
            }}
        >
            <Typography component="h1" variant="h5" sx={{
                color: "white",
                fontFamily: 'Barlow, sans-serif',
                textAlign:'center',
                marginBottom:'10%',
                fontSize:'30px',
                fontWeight: '500',

            }}>
                Crear una cuenta
            </Typography>

            <form>

                <Grid container spacing={2} justifyContent="center">
                    
                    <Grid item xs={12} sm={6}>

                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Nombre"
                            margin="normal"
                            required 
                                sx={{
                                    '& input': {
                                        color: 'white',
                                    },
                                    "& fieldset": { 
                                        border: 'none',
                                    },
                                    backgroundColor: '#360f8c',
                                    borderRadius: '5px',
                                    outline: 'none',
                                    '&:hover': {
                                        backgroundColor: '#2a0875',
                                        border: 0,
                                        boxShadow: "inset 0 0 0 2px white"
                                    }
                                }}
                        />


                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            placeholder="Apellidos"
                            variant="outlined"
                            margin="normal"
                                sx={{
                                    '& input': {
                                        color: 'white',
                                    },
                                    "& fieldset": { 
                                        border: 'none',
                                    },
                                    backgroundColor: '#360f8c',
                                    borderRadius: '5px',
                                    outline: 'none',
                                    '&:hover': {
                                        backgroundColor: '#2a0875',
                                        border: 0,
                                        boxShadow: "inset 0 0 0 2px white"
                                    }
                                }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            placeholder="Email"
                            type="email"
                            variant="outlined"
                            margin="normal"
                            required
                            sx={{
                                '& input': {
                                    color: 'white',
                                },
                                "& fieldset": { 
                                    border: 'none',
                                },
                                backgroundColor: '#360f8c',
                                borderRadius: '5px',
                                outline: 'none',
                                '&:hover': {
                                    backgroundColor: '#2a0875',
                                    border: 0,
                                    boxShadow: "inset 0 0 0 2px white"
                                }
                            }}
                        />
                    </Grid>
                    
                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            placeholder="Contraseña"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                                sx={{
                                    '& input': {
                                        color: 'white',
                                    },
                                    "& fieldset": { 
                                        border: 'none',
                                    },
                                    backgroundColor: '#360f8c',
                                    borderRadius: '5px',
                                    outline: 'none',
                                    '&:hover': {
                                        backgroundColor: '#2a0875',
                                        border: 0,
                                        boxShadow: "inset 0 0 0 2px white"
                                    }
                                }}
                        /> 
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            fullWidth
                            placeholder="Direccion"
                            variant="outlined"
                            margin="normal"
                            required
                                sx={{
                                    '& input': {
                                        color: 'white',
                                    },
                                    "& fieldset": { 
                                        border: 'none',
                                    },
                                    backgroundColor: '#360f8c',
                                    borderRadius: '5px',
                                    outline: 'none',
                                    '&:hover': {
                                        backgroundColor: '#2a0875',
                                        border: 0,
                                        boxShadow: "inset 0 0 0 2px white"
                                    }
                                }}
                        />
                    </Grid>
                </Grid>

                <Button sx={{
                    backgroundColor: 'yellow',
                    color: 'black',
                    width: '80%',
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '1px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '17px',
                    fontWeight: '800',
                    display: 'flex',
                    '&:hover': {
                        backgroundColor: '#e3bf14',
                    },
                }}>
                    Crear una cuenta
                </Button>

            </form>
        </Container>
    )
}

export default RegistrationForm;

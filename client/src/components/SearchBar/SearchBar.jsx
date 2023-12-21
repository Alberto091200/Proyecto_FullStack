import React from 'react';
import TextField from '@mui/material/TextField';
import { useProducts } from 'src/hooks';

function SearchBar( ) {

    const {query, setQuery, cart} = useProducts()
    

  return (
    <>

    <TextField
    placeholder="Buscar..."
    variant="outlined"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    margin="normal"
    sx={{
        '& input': {
        color: 'white',
        height: '100%',
        },
        "& fieldset": {
        border: 'none',
        },
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '20px',
        outline: 'none',
        width: '500px',
        height: '40px', 
        lineHeight: '40px', 
        display: 'flex',
        justifyContent: 'center', 
        '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
    }}
    />

    <h2>{cart.length}</h2>

    </>
  )
}

export default SearchBar;

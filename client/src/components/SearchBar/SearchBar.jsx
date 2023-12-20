import React from 'react';
import TextField from '@mui/material/TextField';
import { useProducts } from 'src/hooks';

function SearchBar( ) {

    const {query, setQuery, cart} = useProducts()
    console.log(cart)

  return (
    <>

    <h2>{cart.length}</h2>
    
    <TextField
        placeholder= 'Buscar...'
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        margin="normal"
            sx={{
                '& input': {
                    color: 'white',
                },
                "& fieldset": { 
                    border: 'none'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '15px',
                outline: 'none',
                width:'500px',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                },
            }}
    />
    </>
  )
}

export default SearchBar;

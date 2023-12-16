import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function productCard() {

    return (
        <Card sx={{
            maxHeight: 600,
            maxWidth: 345,
            marginTop: "6%",
            marginLeft: "2%",
            boxShadow: '0 15px 15px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#1F0A4D',
        }}>
            <CardMedia
                component="img"
                alt="Cyberpunk"
                height="250" 
                image="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/cKZ4tKNFj9C00giTzYtH8PF1.png"
            />

            <CardContent sx={{ color: "white", display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Typography sx={{
                        fontSize: '30px',
                        marginBottom: '15px'
                        }}
                    >
                        Cyberpunk
                    </Typography>

                    <Typography variant="body2" fontSize="25px">
                        30€
                    </Typography>
                </div>

                <IconButton style={{ color: 'white' }}>
                    <FavoriteBorderIcon style={{ fontSize: '2.2rem' }} />
                </IconButton>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center' }}>
                <Button sx={{
                    backgroundColor: 'yellow',
                    color: 'black',
                    width: '80%',
                    margin: '3%',
                    borderRadius: '1px',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '17px',
                    fontWeight: '800',
                    '&:hover': {
                        backgroundColor: '#e3bf14',
                    },
                }}>
                    Add to cart
                </Button>
            </CardActions>




        </Card>
      )
      
    }  

export default productCard

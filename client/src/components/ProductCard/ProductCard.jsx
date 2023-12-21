
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
function ProductCard({product, onAddCart}) {
  return (
    <Card
              sx={{
                maxHeight: 600,
                maxWidth: 345,
                boxShadow: '0 15px 20px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#1F0A4D',
              }}
            >
              <Link to = {`/products/description/${product.name}`}>
              <CardMedia
                component="img"
                alt={product.name}
                height="250"
                image={product.imageURL}
              />
              </Link>

              <CardContent sx={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Link to = {`/products/description/${product.name}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                      }}
                    >
                    <Typography
                      sx={{
                        fontSize: '30px',
                        marginBottom: '15px',
                      }}
                    >
                      
                      {product.name}
                    </Typography>
                  </Link>

                  <Typography variant="body2" fontSize="25px">
                    {`${product.price}€`}
                  </Typography>
                </div>

                <IconButton onClick={() =>{}} style={{ color: 'white' }}>
                 <FavoriteBorderIcon style={{ fontSize: '2.2rem' }} />
                </IconButton>
                
              </CardContent>

              <CardActions sx={{ justifyContent: 'center' }}>
                <Button

                    onClick={(e) => onAddCart(product)}
                  sx={{
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
                  }}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
  )
}

export default ProductCard

import React, { useState, useEffect } from 'react'
import { useAuth } from 'src/hooks'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import axios from 'axios'
import {useProducts} from 'hooks'
import apiClient from 'services/api-client'
function ProductCard(){
  const [user] = useAuth()
 

  const {products, setProducts, query}= useProducts()

  const handleAddCart = (productToCart) => {

    setProducts(products.map(product => {

     if(product !== productToCart) {
      return product
     } else {
      return {...product, cart: !product.cart}
     }

    }))

  }

  const filteredProducts = !query ? products : products.filter(product => product.name?.toLowerCase().startsWith(query.toLowerCase()))

  const [isFaved, setIsFaved] = useState(false)

  useEffect(() => {
    apiClient.get("/products/")
      .then(({data}) =>  setProducts(data))
    
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  const handleToggleFaved = () => {
    setIsFaved(!isFaved);
  }

  return (
    <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px',
    }}
    >
        {filteredProducts && (
          filteredProducts.map((product) => (
            <Card
              key={product.name}
              sx={{
                maxHeight: 600,
                maxWidth: 345,
                marginTop: '13%',
                marginLeft: '2%',
                boxShadow: '0 15px 20px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#1F0A4D',
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="250"
                image={product.imageURL}
              />

              <CardContent sx={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Typography
                    sx={{
                      fontSize: '30px',
                      marginBottom: '15px',
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography variant="body2" fontSize="25px">
                    {`${product.price}€`}
                  </Typography>
                </div>

                <IconButton onClick={handleToggleFaved} style={{ color: 'white' }}>
                  {isFaved ? <FavoriteIcon style={{ fontSize: '2.2rem', color: 'red' }} /> : <FavoriteBorderIcon style={{ fontSize: '2.2rem' }} />}
                </IconButton>
                
              </CardContent>

              <CardActions sx={{ justifyContent: 'center' }}>
                <Button

                    onClick={(e) => handleAddCart(product)}
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
          ))
        )}
      </div>
  )
}

export default ProductCard;

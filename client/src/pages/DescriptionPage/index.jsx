import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from 'src/components/ProductCard/ProductCard';
import apiClient from 'services/api-client';
import { Container, Divider, useMediaQuery, useTheme } from '@mui/material';

function DescriptionPage() {
  document.documentElement.style.backgroundColor = "#1F0A4E";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { name } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    apiClient.get(`/products/${name}`)
    .then(({ data }) => {
      console.log('Detalle:', data);
      setSelectedProduct(data);
      console.log(selectedProduct)
    })
  }, [])

  return (
    <Container 
      displayGutters
      sx={{
        backgroundColor: '#4618AC',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        marginTop: '150px',
        maxWidth: 'auto',
        borderRadius: '15px',
        boxShadow: '0px 10px 100px 50px #400857',
        padding: '30px'
      }}
    >
      {selectedProduct && (
        <>
          <div style={{ width:"100%", marginBottom: isMobile ? '20px' : '0px' }}>
            <ProductCard product={selectedProduct} />
          </div>

          <Divider
              orientation="horizontal"
              flexItem
              sx={{
                opacity: isMobile ? '0' : '1',
                borderWidth: '0.5px',
                marginLeft: '30px',
                backgroundColor: 'white',
              }}
            />
          
          <div
            style={{
              width: isMobile ? '100%' : 'auto',
              marginLeft: isMobile ? '0px' : '30px',
              fontFamily: 'Montserrat, sans-serif',
              marginRight: isMobile ? '0px' : '30px'
            }}>
            <h2
              style={{
                color: 'white',
                fontSize: '40px',
                borderBottom: '2px solid white',
                paddingBottom: '10px',
              }}>
              Descripción
            </h2>

            <p
              style={{
                color: 'white',
                marginTop: isMobile ? '20px' : '50px',
                fontSize: isMobile ? '20px' : '20px',
                textAlign: 'justify',
              }}>
              {selectedProduct.descripcion}
            </p>
          </div>
        </>
      )}
    </Container>
  )
}

export default DescriptionPage;

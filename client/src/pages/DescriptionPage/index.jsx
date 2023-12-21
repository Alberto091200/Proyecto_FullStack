import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from 'src/components/ProductCard/ProductCard';
import apiClient from 'services/api-client';
import { Container } from '@mui/material';

function DescriptionPage() {
  document.documentElement.style.backgroundColor = "#1F0A4E";


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
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '175px',
        alignItems: 'flex-start',
        maxWidth: 'auto',
        maxHeight: 'auto',
        borderRadius: '15px',
        boxShadow: '0px 10px 100px 50px #400857',
        padding: '30px'
      }}
    >
      {selectedProduct && (
        <>
          <div style={{ flex: 1 }}>
            <ProductCard product={selectedProduct} />
          </div>

          <div style={{ flex: 1, marginRight: '40px' }}>
            <h2 style={{ color: 'white' }}>Descripción</h2>
            <p style={{ color: 'white' }}>{selectedProduct.description}</p>
          </div>
        </>
      )}
    </Container>



  )
}

export default DescriptionPage
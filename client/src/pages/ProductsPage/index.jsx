import * as React from "react";
import Catalog from "src/components/Catalog/Catalog"

function ProductsPage() {

  document.documentElement.style.backgroundColor = "#4618AC"
  return (
    <>
    <div style={{marginTop:'100px'}}>
      <Catalog />
    </div>
    </>
  )
}

export default ProductsPage;

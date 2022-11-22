import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from './ProductCard';

export default function Products({ products, cart, setCart }) {
   return (
      <div >
         <Row gutter={[10, 10]}>
            {products.map(product =>
               <Col xs={24} sm={12} md={8} key={product.id}>
                  <ProductCard
                     product={product}
                     cart={cart}
                     setCart={setCart}
                  />
               </Col>
            )}
         </Row>
      </div>
   )
};

import React from 'react';
import { Col, Row } from 'antd';
import ProductCard from './ProductCard';

export default function Products({ products }) {
   return (
      <div >
         <Row gutter={[10,10]}> 
            {products.map(item =>
               <Col xs={24} sm={12} md={8} key={item.id}>
                  <ProductCard item={item}/>
               </Col>
            )}
         </Row>
      </div>
   )
};

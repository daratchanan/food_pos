import React from 'react';
import {
   Col,
   Row,
   Space,
   Typography
} from 'antd';

export default function ProductCard({ product, cart, setCart }) {
   const onSelectProduct = () => {
      const oldCart = [...cart];
      const targetProduct = oldCart.find(f => f.id === product.id)

      if (!targetProduct) {
         oldCart.push({ ...product, qty: 1 })
         setCart(oldCart);
      } else {
         const index = oldCart.indexOf(targetProduct);
         oldCart[index].qty += 1;
         setCart(oldCart)
      }
   };



   console.log('cart=>', cart);

   return (
      <div
         style={{
            border: '1px solid white',
            borderRadius: '10px',
            background: 'white',
            padding: '20px',
            cursor: 'pointer'
         }}
         onClick={onSelectProduct}
      >
         <Row >
            <Col xs={24}>
               <Typography.Title level={3} >{product.name}</Typography.Title>
            </Col>

            <Col xs={24}>
               <Row justify='space-between' >
                  <Col >
                     <Space
                        align='end'
                        style={{ height: '100%' }}
                     >
                        <Typography.Title level={3} style={{ color: '#F38100', margin: '0px' }}>
                           ฿ {product.price}
                        </Typography.Title>
                     </Space>
                  </Col>
                  <Col xs={12}>
                     <img
                        src={product.img}
                        alt={product.name}
                        width='100%'
                        style={{ borderRadius: '10px' }}
                     />
                  </Col>
               </Row>

            </Col>
         </Row>
      </div>
   )
};

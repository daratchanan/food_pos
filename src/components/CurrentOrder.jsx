import React from 'react';
import {
   Button,
   Col,
   Row,
   Typography
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import CardOrder from './CardOrder';
import TotalOrder from './TotalOrder';

export default function CurrentOrder({ products, cart, setCart }) {
   // console.log('cart=>', cart);
   const onClear = () => {
      const temCart = [...cart];
      const newCarts = temCart.filter(f => f.id === products.id)
      setCart(newCarts)
   };

   return (
      <div style={{ margin: '30px' }} >
         <Row>
            <Col xs={24}>
               <Row gutter={[10, 10]}>
                  <Col flex={1}>
                     <Typography.Title level={3}>Current Order</Typography.Title>
                  </Col>
                  <Col>
                     <Button
                        type='primary'
                        onClick={onClear}
                     >
                        Clear All
                     </Button>
                  </Col>
                  <Col>
                     <Button icon={<SettingOutlined />} />
                  </Col>
               </Row>
            </Col>

            {cart.map(item =>
               <Col key={item.id}>
                  <CardOrder
                     orderItem={item}
                     cart={cart}
                     setCart={setCart}
                  />
               </Col>
            )}

            <Col xs={24} style={{ marginTop: '10px' }}>
               <TotalOrder
                  cart={cart}
                  setCart={setCart}
               />
            </Col>
         </Row>
      </div>
   )
};

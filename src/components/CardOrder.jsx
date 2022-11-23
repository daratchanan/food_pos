import React from 'react';
import {
   Button,
   Col,
   Row,
   Space,
   Statistic,
   Typography
} from 'antd';
import {
   MinusOutlined,
   PlusOutlined,
   DeleteOutlined
} from '@ant-design/icons';

export default function CardOrder({ orderItem, cart, setCart }) {
   const onMinus = () => {
      const newCarts = [...cart];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty -= 1;
      setCart(newCarts);
   };

   const onPlus = () => {
      const newCarts = [...cart];
      const index = newCarts.indexOf(orderItem);
      newCarts[index].qty += 1;
      setCart(newCarts);
   };

   const onDelete = () => {
      const tempCart = [...cart];
      const newCarts = tempCart.filter(f => f.id !== orderItem.id);
      setCart(newCarts);
   };


   return (
      <div style={{ padding: '10px 0px' }}>
         <Row gutter={[10, 0]}>
            <Col xs={4}>
               <img
                  src={orderItem.img}
                  alt={orderItem.name}
                  width='100%'
                  style={{ borderRadius: '8px' }}
               />
            </Col>

            <Col xs={8}
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
               }}
            >
               <Typography.Text>{orderItem.name}</Typography.Text>
            </Col>

            <Col flex={1}>
               <Space >
                  {orderItem.qty <= 1 ?
                     <Button
                        icon={<DeleteOutlined />}
                        size='large'
                        type='primary'
                        onClick={onDelete}
                     />
                     :
                     <Button
                        icon={<MinusOutlined />}
                        size='large'
                        onClick={onMinus}
                     />
                  }

                  <Typography.Text
                     style={{
                        padding: '0px 5px',
                        fontWeight: 'bold'
                     }}
                  >
                     {orderItem.qty}
                  </Typography.Text>

                  <Button
                     icon={<PlusOutlined />}
                     size='large'
                     onClick={onPlus}
                  />
               </Space>
            </Col>

            <Col>
               <Space
                  style={{ height: '100%' }}
                  align='center'
               >
                  <Statistic
                     prefix='฿'
                     precision={2}
                     value={orderItem.price * orderItem.qty}
                     valueStyle={{ fontSize: '14px', fontWeight: 'bold' }}
                  />
               </Space>
            </Col>

         </Row>
      </div>
   )
};

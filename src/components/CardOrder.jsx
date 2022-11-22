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
   PlusOutlined
} from '@ant-design/icons';

export default function CardOrder({ orderItem, cart, setCart }) {
   return (
      <div>
         <Row gutter={[10, 10]} >
            <Col xs={4}>
               <img
                  src={orderItem.img}
                  alt={orderItem.name}
                  width='100%'
                  style={{ borderRadius: '8px' }}
               />
            </Col>

            <Col xs={8}>
               <Typography.Text>{orderItem.name}</Typography.Text>
            </Col>

            <Col flex={1}>
               <Space >
                  <Button
                     icon={<MinusOutlined />}
                     size='large'
                  />

                  <Typography.Text style={{ padding: '0px 5px' }}>2</Typography.Text>

                  <Button
                     icon={<PlusOutlined />}
                     size='large'
                  />
               </Space>
            </Col>

            <Col>
               <Statistic
                  value={orderItem.price}
               />
            </Col>
         </Row>
      </div>
   )
};

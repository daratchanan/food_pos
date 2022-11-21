import React from 'react';
import {
   Col,
   Row,
   Space,
   Typography
} from 'antd';

export default function ProductCard({ item }) {
   return (
      <div style={{
         border: '1px solid white',
         borderRadius: '10px',
         background: 'white',
         padding: '20px',
      }}
      >
         <Row >
            <Col xs={24}>
               <Typography.Title level={3} >{item.name}</Typography.Title>
            </Col>

            <Col xs={24}>
               <Row style={{ justifyContent: 'space-between' }} >
                  <Col >
                     <Typography.Title level={3} style={{ color: '#F38100' }}>
                        $ {item.price}
                     </Typography.Title>
                  </Col>
                  <Col xs={12}>
                     <img
                        src={item.img}
                        alt={item.name}
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

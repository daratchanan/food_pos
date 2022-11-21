import React from 'react';
import {
   Button,
   Col,
   Row,
   Typography
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import CardOrder from './CardOrder';

export default function CurrentOrder() {
   return (
      <div style={{ margin: '30px' }} >
         <Row>
            <Col xs={24}>
               <Row gutter={[10, 10]}>
                  <Col flex={1}>
                     <Typography.Title level={3}>Current Order</Typography.Title>
                  </Col>
                  <Col>
                     <Button type='primary'>
                        Clear All
                     </Button>
                  </Col>
                  <Col>
                     <Button icon={<SettingOutlined />} />
                  </Col>
               </Row>
            </Col>

            <Col>
               <CardOrder />
            </Col>
         </Row>
      </div>
   )
};

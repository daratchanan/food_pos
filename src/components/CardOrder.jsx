import React from 'react';
import {
   Button,
   Col,
   Input,
   Row,
   Space,
   Statistic,
   Typography
} from 'antd';
import {
   MinusOutlined,
   PlusOutlined
} from '@ant-design/icons';

export default function CardOrder() {
   return (
      <div>
         <Row gutter={[10, 10]}>
            <Col>
               <img
                  src='https://www.mk1642.com/getmetafile/5b1e38b2-c15a-4677-80e1-a753e4e6c637/K0170.aspx?maxsidesize=1900'
                  alt='image'
                  width='100%'
               />
            </Col>

            <Col>
               <Typography.Text>Corn</Typography.Text>
            </Col>

            <Col>
               <Space>
                  <Button
                     icon={<MinusOutlined />}
                  />
                  <Typography.Text>2</Typography.Text>
                  <Button
                     icon={<PlusOutlined />} />
               </Space>
            </Col>

            <Col>
               <Statistic
                  value={200}
               />
            </Col>
         </Row>
      </div>
   )
};

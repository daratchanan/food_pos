import React from 'react'
import {
   Button,
   Col,
   Layout,
   Row,
   theme,
   Typography
} from 'antd';
import { categories } from '../mockup/data';
import Products from '../components/Products';
import { products } from '../mockup/data';
import CurrentOrder from '../components/CurrentOrder';

const { Header, Sider, Content } = Layout;


export default function Home() {
   const { token } = theme.useToken();

   return (
      <Layout>
         <Layout style={{ margin: '30px' }}>
            <Header
               style={{ backgroundColor: token.headerColor }}
            >
               <Typography.Title style={{ marginTop: '10px' }}>Simons's BBQ Team</Typography.Title>
            </Header>

            <Content>
               <Row >
                  {categories.map(cat =>
                     <Col key={cat.key} style={{ paddingRight: '10px' }}>
                        <Button
                           type='primary'
                           style={{ margin: '20px 0px' }}
                        >
                           {cat.label}
                        </Button>
                     </Col>
                  )}

                  <Col xs={24}>
                     <Products products={products} />
                  </Col>
               </Row>
            </Content>
         </Layout>

         <Sider
            width={500}
            style={{ background: token.siderColor }}
         >
            <CurrentOrder />
         </Sider>
      </Layout>
   )
};

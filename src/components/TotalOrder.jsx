import React from 'react';
import {
	Col,
	Divider,
	Row,
	Statistic,
	Typography
} from 'antd';

export default function TotalOrder({ cart, setCart }) {
	const subTotal = cart.reduce((prev, cur) => prev + (cur.price * cur.qty), 0);
	const discount = 10;
	const total = subTotal - discount;

	return (
		<div
			style={{
				boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
				padding: '10px',
				borderRadius: '10px'
			}}
		>
			<Row >
				<Col xs={24}>
					<Row justify='space-between'>
						<Col>
							<Typography.Title level={5}>Subtotal</Typography.Title>
						</Col>
						<Col>
							<Statistic
								prefix='฿'
								precision={2}
								value={subTotal}
								valueStyle={{ fontSize: '14px', fontWeight: 'bold' }}
							/>
						</Col>
					</Row>
				</Col>

				<Col xs={24}>
					<Row justify='space-between'>
						<Col>
							<Typography.Title level={5}>Discounts</Typography.Title>
						</Col>
						<Col>
							<Statistic
								prefix='- ฿'
								precision={2}
								value={discount}
								valueStyle={{ fontSize: '14px', fontWeight: 'bold' }}
							/>
						</Col>
					</Row>
				</Col>

				<Divider style={{ margin: '10px 0px' }} />

				<Col xs={24}>
					<Row justify='space-between'>
						<Col>
							<Typography.Title level={3} style={{ marginBottom: '0px' }}>Total</Typography.Title>
						</Col>
						<Col>
							<Statistic
								prefix='฿'
								precision={2}
								value={total}
								valueStyle={{ fontSize: '16px', fontWeight: 'bold' }}
							/>
						</Col>
					</Row>
				</Col>

			</Row>
		</div>
	)
};

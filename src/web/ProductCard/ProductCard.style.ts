import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	padding: 16px;
	margin: 16px;
	border-radius: 8px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 8px;
	margin-right: 16px;
`;

export const ProductDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ProductName = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 4px;
	color: #30363c;
`;

export const PriceDetails = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
`;

export const MRP = styled.div`
	font-size: 14px;
	text-decoration: line-through;
	color: #888;
	margin-right: 8px;
`;

export const Discount = styled.div`
	font-size: 14px;
	color: red;
	margin-right: 8px;
`;

export const SellingPrice = styled.div`
	font-size: 16px;
	color: #000;
`;

export const AddToCartButton = styled.button`
	margin-top: 8px;
	padding: 10px 15px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;

export const ManufacturerDetails = styled.div``;

export const ManufacturerName = styled.div`
	font-size: 12px;
	color: #8897a2;
`;

export const MeasurementUnit = styled.div`
	color: #8897a2;
	font-size: 12px;
	line-height: 1.5;
	margin-bottom: 5px;
	margin-top: 0;
	text-transform: uppercase;
`;

import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";

const Card = styled.View`
	flex-direction: row;
	padding: 16px;
	margin: 16px;
	border-radius: 8px;
	background-color: #fff;
	shadow-color: #000;
	shadow-offset: 0px 2px;
	shadow-opacity: 0.1;
	shadow-radius: 4px;
	elevation: 2;
`;

const ProductImage = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 8px;
	margin-right: 16px;
`;

const ProductDetails = styled.View`
	flex: 1;
	justify-content: center;
`;

const ProductName = styled.Text`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 4px;
`;

const PriceDetails = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 8px;
`;

const MRP = styled.Text`
	font-size: 14px;
	text-decoration: line-through;
	color: #888;
	margin-right: 8px;
`;

const Discount = styled.Text`
	font-size: 14px;
	color: red;
	margin-right: 8px;
`;

const SellingPrice = styled.Text`
	font-size: 16px;
	color: #000;
`;

const AddToCartButton = styled(Button)`
	margin-top: 8px;
`;

const ManufacturerDetails = styled.View``;

const ManufacturerName = styled.Text`
	font-size: 12px;
	color: #8897a2;
`;

const MeasurementUnit = styled.Text`
	color: #8897a2;
	font-size: 12px;
	line-height: 1.5;
	margin-bottom: 5px;
	margin-top: 0;
	text-transform: uppercase;
`;

/* 
 const product = {
    image: "",
    name: "Doloforce Dt 20mg Strip Of 10 Tablets",
    measurementUnit: "10 Tablet(s) in Strip",
    mrp: "100.00",
    discount: "20",

    salePriceDecimal: "77.69",
    mrpDecimal: "83.54",

    manufacturer: "MANKIND PHARMACEUTICALS LTD",
  };
*/

const ProductCard = ({ product }) => {
	return (
		<Card>
			<ProductImage source={{ uri: product.image }} />
			<ProductDetails>
				<ProductName>{product.name}</ProductName>
				<ManufacturerDetails>
					<ManufacturerName>{product.manufacturer}</ManufacturerName>
					<MeasurementUnit>{product.measurementUnit}</MeasurementUnit>
				</ManufacturerDetails>
				<PriceDetails>
					<SellingPrice>{`$${product.salePriceDecimal}`}</SellingPrice>
					<MRP>{`MRP: $${product.mrpDecimal}`}</MRP>
					<Discount>{`${product.discount}% off`}</Discount>
				</PriceDetails>
				<AddToCartButton
					title='Add to Cart'
					onPress={() => alert("Added to Cart")}
				/>
			</ProductDetails>
		</Card>
	);
};

export default ProductCard;

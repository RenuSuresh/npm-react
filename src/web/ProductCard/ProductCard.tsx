import React from "react";
import {
	AddToCartButton,
	Card,
	Discount,
	ManufacturerDetails,
	ManufacturerName,
	MeasurementUnit,
	MRP,
	PriceDetails,
	ProductDetails,
	ProductImage,
	ProductName,
	SellingPrice,
} from "./ProductCard.style";
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
			<ProductImage src={product.image} alt={product.name} />
			<ProductDetails>
				<ProductName>{product.name}</ProductName>
				<ManufacturerDetails>
					<ManufacturerName>{product.manufacturer}</ManufacturerName>
					<MeasurementUnit>{product.measurementUnit}</MeasurementUnit>
				</ManufacturerDetails>
				<PriceDetails>
					<SellingPrice>{`₹${product.salePriceDecimal}`}</SellingPrice>
					<MRP>{`MRP: ₹${product.mrpDecimal}`}</MRP>
					<Discount>{`${product.discount}% off`}</Discount>
				</PriceDetails>
				<AddToCartButton onClick={() => alert("Added to Cart")}>
					Add to Cart
				</AddToCartButton>
			</ProductDetails>
		</Card>
	);
};

export default ProductCard;

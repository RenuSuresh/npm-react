import React from "react";
import { StyledText, StyledView } from "./ProductCard.styles";

const ProductCard = (props: any) => {
	const { buttonCb, isNative } = props;
	return (
		<StyledView>
			<StyledText>Hello World!</StyledText>
		</StyledView>
	);
};

export default ProductCard;

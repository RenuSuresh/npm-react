import React from "react";
import { View, Text } from "react-native";

const Button = (props: any) => {
	const { buttonCb, isNative } = props;
	return (
		<View>
			<Text>Native</Text>
		</View>
	);
};

export default Button;

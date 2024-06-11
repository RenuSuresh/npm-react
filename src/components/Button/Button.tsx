import React from "react";
import { View, Text } from "react-native";

const Button = (props: any) => {
	const { buttonCb, isNative } = props;
	if (isNative)
		return (
			<View>
				<Text>Native</Text>
			</View>
		);
	return <button onClick={buttonCb}>Button</button>;
};

export default Button;

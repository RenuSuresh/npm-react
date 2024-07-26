import React from "react";
import { View, Button } from "react-native";

const NativeButton = (props: any) => {
	const { buttonCb, isNative } = props;
	return (
		<View>
			<Button title='Native Button' onPress={() => alert("Button Pressed!")} />
		</View>
	);
};

export default NativeButton;

import React from "react";

const Button = (props: any) => {
	const { buttonCb } = props;

	return <button onClick={buttonCb}>Button</button>;
};

export default Button;

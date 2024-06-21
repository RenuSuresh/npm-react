import React from "react";

const Button = (props: any) => {
	const { buttonCb } = props;

	return <button onClick={buttonCb}>Button new</button>;
};

export default Button;

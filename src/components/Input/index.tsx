import React, { FC, ChangeEvent, CSSProperties } from 'react';

interface MyProps {
	name: string;
	type: string;
	change: (e: ChangeEvent<HTMLInputElement>) => void;
	style?: CSSProperties; // Allow passing style
}

export const Input: FC<MyProps> = ({ name, type, change, style }) => {
	return (
		<label>
			Enter {name}
			<input name={name} type={type} onChange={change} style={style} />
		</label>
	);
};

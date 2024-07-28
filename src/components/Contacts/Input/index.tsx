import { FC, ChangeEvent } from 'react';

interface MyProps {
	name: string;
	type: string;
	change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<MyProps> = ({ name, type, change }) => {
	return (
		<label>
			Enter {name}
			<input name={name} type={type} onChange={change} />
		</label>
	);
};

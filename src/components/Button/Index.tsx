import { FC } from 'react';

interface MyProps {
	children: string;
	type: 'submit';
}

export const Button: FC<MyProps> = ({ children, type }) => {
	return <button type={type}>{children}</button>;
};

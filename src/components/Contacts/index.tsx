import { useState, ChangeEvent, FC } from 'react';
import { Input } from './Input';
import { Button } from '../Button/Index';

export const Contact: FC = () => {
	const [stateName, setName] = useState<string>('');
	const [stateAge, setAge] = useState<number>(0);
	const [statePhone, setPhone] = useState<number>(0);
	const [stateBoolean, setBoolean] = useState<boolean>(false);

	const updateName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const updateAge = (e: ChangeEvent<HTMLInputElement>) => {
		setAge(Number(e.target.value));
	};

	const updatePhone = (e: ChangeEvent<HTMLInputElement>) => {
		setPhone(Number(e.target.value));
	};

	const updateBoolean = (e: ChangeEvent<HTMLInputElement>) => {
		setBoolean(e.target.checked);
	};

	console.log(stateName, stateAge, statePhone, stateBoolean);

	const handleSubmit = () => {
		if (updateAge && updateName && updatePhone && updateBoolean) {
			console.log('great');
		} else {
			alert('Add input');
		}
	};

	return (
		<>
			<form method="post" onSubmit={handleSubmit}>
				<Input name="name" type="text" change={updateName} />
				<Input name="age" type="number" change={updateAge} />
				<Input name="phone" type="number" change={updatePhone} />
				<Input name="boolean" type="checkbox" change={updateBoolean} />
				<Button type="submit">Submit</Button>
			</form>
		</>
	);
};

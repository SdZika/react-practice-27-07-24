import { useState, ChangeEvent, FC } from 'react';
import { Input } from '../Input';
import { Button } from '../Button/Index';

export const Contact: FC = () => {
	const [stateName, setName] = useState<string>('');
	const [stateAge, setAge] = useState<number | ''>(0);
	const [statePhone, setPhone] = useState<number | ''>(0);
	const [stateBoolean, setBoolean] = useState<boolean>(false);

	// Error state
	const [errors, setErrors] = useState({
		name: false,
		age: false,
		phone: false,
	});

	const updateName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
		// Clear error when input changes
		setErrors((prevErrors) => ({ ...prevErrors, name: false }));
	};

	const updateAge = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value ? Number(e.target.value) : '';
		setAge(value);
		// Clear error when input changes
		setErrors((prevErrors) => ({ ...prevErrors, age: false }));
	};

	const updatePhone = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value ? Number(e.target.value) : '';
		setPhone(value);
		// Clear error when input changes
		setErrors((prevErrors) => ({ ...prevErrors, phone: false }));
	};

	const updateBoolean = (e: ChangeEvent<HTMLInputElement>) => {
		setBoolean(e.target.checked);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Validate fields
		const newErrors = {
			name: stateName.trim() === '',
			age: typeof stateAge !== 'number' || isNaN(stateAge),
			phone: typeof statePhone !== 'number' || isNaN(statePhone),
		};

		if (newErrors.name || newErrors.age || newErrors.phone) {
			setErrors(newErrors);
			alert('Please fill out all required fields correctly.');
			return;
		}

		// If no errors, proceed with submission
		console.log('Form Submitted', {
			stateName,
			stateAge,
			statePhone,
			stateBoolean,
		});
	};

	return (
		<>
			<form method="post" onSubmit={handleSubmit}>
				<Input
					name="name"
					type="text"
					change={updateName}
					style={{ border: errors.name ? '1px solid red' : '1px solid black' }}
				/>
				<Input
					name="age"
					type="number"
					change={updateAge}
					style={{ border: errors.age ? '1px solid red' : '1px solid black' }}
				/>
				<Input
					name="phone"
					type="number"
					change={updatePhone}
					style={{ border: errors.phone ? '1px solid red' : '1px solid black' }}
				/>
				<Input name="boolean" type="checkbox" change={updateBoolean} />
				<Button type="submit">Submit</Button>
			</form>
		</>
	);
};

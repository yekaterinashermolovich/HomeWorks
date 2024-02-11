

import Form from './components/Form/Form';

export type InputData = {
	type: string,
	labelText: string,
	name: string,
	pattern: string,
	key?: string
}

const App = () => {
	
	const inputsData: InputData[] = ([
		{
			type: 'text',
			labelText: 'Name',
			name: 'name',
			pattern: '\\w{1,4}'
		},
		{
			type: 'text',
			labelText: 'Surname',
			name: 'surname',
			pattern: '\\w{1,5}'
		},
		{
			type: 'text',
			labelText: 'Middle name 1',
			name: 'middle-name',
			pattern: '\\w{1,6}'
		},
		{
			type: 'text',
			labelText: 'Middle name 2',
			name: 'middle-name',
			pattern: '\\w{1,7}'
		}
	]as InputData[]).map(x => {
		x.key = crypto.randomUUID();

		return x;
	})

	const handleSubmit = (formData: FormData) => {
		console.log(formData);
	}

	return (
		<>
			<Form onSubmit={handleSubmit} inputsData={inputsData}/>
		</>
	);
}

export default App;

/*
a && b && c && d && ... && z

a || b || c || d || ... || z


condition ? ifTrue : ifFalse
*/

import express from 'express';

const app = express();
const PORT = 3004;


app.get('/', (req, res) => {
	res.send('API with SQLite');
});

app.get('/employees', (req, res) => {
	const employees = [
		{
			firstName: "fff",
			lastName: "lll"
		},
		{
			firstName: "fff",
			lastName: "lll"
		}
	];
	res.send(employees);
});





app.listen(PORT, (req,res) => {
	console.log(`now listening on http://localhost:${PORT}`);
});
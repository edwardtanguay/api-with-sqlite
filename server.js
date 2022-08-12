import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3004;

const getRecordsWithSql = (sql) => {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database('./northwind_database.sqlite');
		db.all(sql, function (err, records) {
			if (records === undefined) {
				reject(err);
			} else if (records.length === 0) {
				resolve([]);
			} else {
				resolve(records);
			}
		});
		db.close();
	});
};

app.get('/', (req, res) => {
	res.send('API with SQLite');
});

app.get('/employees', async (req, res) => {
	const employees = await getRecordsWithSql('SELECT * FROM Employees');
	console.log(employees);
		
	res.send(employees);
});

app.get('/uk-employees', async (req, res) => {
	const employees = await getRecordsWithSql('SELECT * FROM Employees WHERE Country = "UK"');
	console.log(employees);
		
	res.send(employees);
});

app.get('/usa-employees', async (req, res) => {
	const employees = await getRecordsWithSql('SELECT * FROM Employees WHERE Country = "USA"');
	console.log(employees);
		
	res.send(employees);
});





app.listen(PORT, (req,res) => {
	console.log(`now listening on http://localhost:${PORT}`);
});
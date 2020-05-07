const express = require('express');
const app = express();

app.get('/', (req, res) => {
	let browser = req.header("user-agent");
	res.send(browser);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
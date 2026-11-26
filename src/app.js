const express = require('express');

const app = express();

app.use('/products', require('./routes/search'));
app.use('/files', require('./routes/files'));
app.use('/tools', require('./routes/tools'));
app.use('/auth', require('./routes/login'));
app.use('/account', require('./routes/preferences'));
app.use('/', require('./routes/welcome'));

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`node-shop listening on http://localhost:${port}`));

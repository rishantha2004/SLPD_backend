const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const registerRouter = require('./routes/register.route');
const productRouter = require('./routes/products.route');
const loginRouter = require('./routes/login.route');
const adminRouter = require('./routes/admin.route');
const userLoginRouter = require('./routes/userLogin.route')
const caseRouter = require('./routes/cases.route');
require('./db')

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));
app.use(express.json());

app.use('/api/register', registerRouter)
app.use('/api/products', productRouter);
app.use('/api/login', loginRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user-login', userLoginRouter);
app.use('/api/cases', caseRouter);

app.listen(8000, () => {
    console.log('Server start!')
})
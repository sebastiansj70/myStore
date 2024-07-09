import express from 'express'
const bodyParser = require('body-parser');
import productRoutes from './ '
import cors from 'cors';


const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send('Error en el servidor');
});

app.use('/api/products', productRoutes);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
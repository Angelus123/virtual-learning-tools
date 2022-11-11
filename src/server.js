import app from './app';
import config from './config/config';

const currentConfig = config[process.env.NODE_ENV];
const { port } = currentConfig;

app.listen(port||process.env.PORT, () =>
console.log(`App listening on ${port}!....`)
);
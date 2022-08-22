import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import routes from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json()); //body parser needs to be above routes
app.use(morgan('dev'));
app.use(routes); //change it to this from app.use(apiRouter); this is to simplify and keep things consistent

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html'))); 
//catch all get all wildcard need to import above "hey was this route matched inside of this routes variable"
//if it is not a get request to path given then it is going to go to this wildcard and if it doesn't match anything else
//express will send a response.
//this also allows us to do both frontend and backend routing withouth any issues

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));

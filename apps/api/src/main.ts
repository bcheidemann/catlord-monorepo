import * as express from 'express';
import { Message } from '@catlord/api-interfaces';
import cors from 'cors';

const app = express();

app.use(cors({origin: true}))

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

import { createServer } from 'node:http';

const profile = {
  name: 'Heitor Gaddo Ataíde',
  role: 'Software Engineer in progress',
  education: 'Engenharia de Software · UniDomBosco-RJ · conclusão em dezembro de 2029'
};

createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Access-Control-Allow-Origin', '*');

  if (request.url === '/api/profile') {
    response.writeHead(200);
    response.end(JSON.stringify(profile));
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: 'Rota não encontrada' }));
}).listen(3333, () => console.log('Node API running at http://localhost:3333'));

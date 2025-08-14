import { fastify } from 'fastify';


const server = fastify();

server.post('/videos', () => {
  return "Hello"
});

server.get('/videos', () => {
  return "hello get"
})

server.put('/videos/:id', () => {
  return "hello node"
})

server.delete('/videos/:id', () => {
  return "hello get"
})

server.listen({ port: 3333 })
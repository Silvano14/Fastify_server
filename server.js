import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify()
await fastify.register(cors, {
  // put your options here
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { data: "Drago meteora bestia assurda" };
});

// Start the server
fastify.listen(3000);
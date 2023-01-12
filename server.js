// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
  return { data: "Drago meteora bestia assurda" };
});

// Start the server
fastify.listen(3000);
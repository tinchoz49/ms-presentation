const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
  nodeID: 'node-1',
  logger: console,
  logLevel: 'debug',
  requestTimeout: 5 * 1000,
  requestRetry: 3
});

broker.createService(require('./services/songs'));

broker.start()
    // Call service
    .then(() => broker.call("math.add", { a: 5, b: 3 }))
    .then(res => console.log("5 + 3 =", res))
    .catch(err => console.error(`Error occured! ${err.message}`));

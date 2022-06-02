const argv = require('../utils/argv');

const DEFAULT_PORT = 8000;

const portFromArguments = argv('port');

if (portFromArguments) {
  process.env.PORT = portFromArguments;
} else {
  process.env.PORT = DEFAULT_PORT;
}

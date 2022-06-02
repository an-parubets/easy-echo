const morgan = require('morgan');

morgan.token('headers', function (request) {
  return Object.entries(request.headers).reduce((result, [header, value]) => {
    return result
      ? `${result}, "${header}":"${value}"`
      : `"${header}":"${value}"`;
  }, '');
});

const logger = morgan(function (tokens, request, response) {
  return [
    tokens.method(request, response),
    tokens.url(request, response),
    tokens.status(request, response),
    '-',
    tokens['response-time'](request, response),
    'ms\n',
    tokens.headers(request),
    '\n',
  ].join(' ');
});

module.exports = logger;

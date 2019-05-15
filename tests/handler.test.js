import * as handler from '../handler';

const event = { pathParameters : { 'index' : '10'}};
const context = 'context';
const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe("string");
    let body = JSON.parse(response.body)
    expect(body.result).toEqual(89);
  };

test('fibonacci', () => handler.fibonacci(event, context, callback));

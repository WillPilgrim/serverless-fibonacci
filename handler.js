export const fibonacci = function (event, context, callback) {
  const data = event.pathParameters;
  let count = parseInt(data.index);
  let result = 1;
  let prev1 = 0;
  let prev2 = 0;
  for (let j=0;j<count;j++){
    prev2 = prev1;
    prev1 = result;
    result = prev1 + prev2;
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      result : result
    }),
  });
};

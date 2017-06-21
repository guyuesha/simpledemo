onmessage = function(e) {
  var fibonacci =function(n) {
      return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
  };
  var start = Date.now();
  console.log('Message received from main script ',  start);
  var workerResult = fibonacci(e.data[0]);
  // var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script ', Date.now(), Date.now()-start);
  postMessage(workerResult);
}

var first = document.querySelector('#number1');
var second = document.querySelector('#number2');
var third = document.querySelector('#number3');

var result = document.querySelector('.result');
var fibonacci =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};
if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker/worker.js");

// onkeyup could be used instead of onchange if you wanted to update the answer every time
// an entered value is changed, and you don't want to have to unfocus the field to update its .value
  var startTime, endTime;
	first.onchange = function() {
		startTime = Date.now();
	  myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
		let start = Date.now();
	  console.log('Message posted to worker', start);
		// fibonacci(first.value);
		console.log('main caculated current', Date.now(), Date.now()-start);
	};

	second.onchange = function() {
		startTime = Date.now();
	  // myWorker.postMessage([first.value,second.value]);
    result.textContent = first.value+ second.value + third.value
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		endTime = Date.now();
		console.log('Message received from worker', endTime, endTime-startTime);
	};
}

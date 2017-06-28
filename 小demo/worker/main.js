var first = document.querySelector('#number1');
var second = document.querySelector('#number2');
var third = document.querySelector('#number3');

var result1 = document.querySelector('.result1');
var result2 = document.querySelector('.result2');
var fibonacci =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};
if (window.Worker) {
	var myWorker = new Worker("worker/worker.js");
  var startTime, endTime;
	first.onchange = function() {
		startTime = Date.now();
		result1.textContent = '计算中';
	  myWorker.postMessage([first.value]);
    console.log('Message send from main')
	};

	second.onchange = function() {
    result2.textContent = second.value * third.value
	};
	third.onchange = function() {
    result2.textContent = second.value * third.value
	};

	myWorker.onmessage = function(e) {
		result1.textContent = e.data;
		endTime = Date.now();
		console.log('Message received from worker', endTime, endTime-startTime);
	};
}

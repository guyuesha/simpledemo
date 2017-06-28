var first = document.querySelector('#number1');
var second = document.querySelector('#number2');
var third = document.querySelector('#number3');

var result1 = document.querySelector('.result1');
var result2 = document.querySelector('.result2');

var fibonacci =function(n) {
    return n <2? n : arguments.callee(n -1) + arguments.callee(n -2);
};

	first.onchange = function() {
		let start = Date.now();
	  console.log('caculate start ', start);
		result1.textContent = fibonacci(first.value);
		console.log('caculate end', Date.now(), Date.now()-start);
	};

	second.onchange = function() {
    result2.textContent = second.value * third.value
	};

  third.onchange = function() {
    result2.textContent = second.value * third.value
	};

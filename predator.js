//This is the actual iife (an iife is an immediately invoked function)

// The iife is the house - anything inside of it is (private; local scope)


var Predator = (function () {
  var carnivores = [];

  return {
    loadCarnivores: function (callbackFnctnToInvoke) {
      	var xhr = new XMLHttpRequest();
      	xhr.open('GET', 'carnivores.json');
      	xhr.send();
      

      	xhr.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
      	callbackFnctnToInvoke(carnivores);
      }); 
    }, loadHerbivores: function (callbackFnctnToInvoke) {
       		var xhr = new XMLHttpRequest();
      		xhr.open('GET', 'herbivores.json');
       		xhr.send();
      

      		xhr.addEventListener("load", function () {
         	// Set the value of the private array
         	herbivores = JSON.parse(this.responseText);

         	// Invoke the callback function so that the caller knows
         	// that the process is complete. Make sure to pass the 
         	// carnivore array as an argument.
       		callbackFnctnToInvoke(herbivores);
       }); 
     }
  };
})();


function popDomWCarnivoreData (carnivoresData) {
	console.log(carnivoresData);
	
}

function popDomWHerbivoreData (herbivoreData) {
	console.log(herbivoreData);

}

Predator.loadCarnivores(popDomWCarnivoreData);

Predator.loadHerbivores(popDomWHerbivoreData);

// This is where you populate the Dom; like the view


//This is like a factory; this is where you call things; an object that returns functions

// callbackFunctionToinvoke is what you're expecting to receive

// Line 23 is a reference to Line 45 becasue line 55 invokes line 10 and passes line 45 in
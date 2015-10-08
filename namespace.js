(function () {
  if (window.Awesome === undefined) { window.Awesome = {}; }

  var myPerson = Awesome.Person = function () {
    this.name = "mike";
    this.age = 27;
  };

  Awesome.Person.prototype.sayHi = function () {
    console.log("Hi, I am " + this.name);
    return null;
  };

  var testHash = { "a": "apple", "b": "beer" };



})();

// person1 = new Awesome.Person({age: 21, name:"mike"})
// person1.sayHi()

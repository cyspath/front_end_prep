(function () {
  if (window.Bull === undefined) { window.Bull = {}; }

  Bull.t = "train"

  Awesome.Person.prototype.sayBye = function () {
    console.log("Bye " + this.name);
    return null;
  };


})();


fun = function () {
  console.log(this.t);
}

hash1 = { a: "apple"};
hash2 = function () {
  this.b = "beer"
}

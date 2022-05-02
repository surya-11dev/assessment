function counter() {
  var _counter = 0;
  return {
    add: function (increment) {
      _counter += increment;
    },
  };
}

var c = counter();
c.add(5);
c.add(9);

// What is the value of _counter, print the output

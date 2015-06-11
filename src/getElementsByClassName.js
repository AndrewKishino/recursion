// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var match = [];
  var items = document.body;

  var digDeeper = function(element) {
    if(element.classList){
      if (element.classList.contains(className)) {
        match.push(element);
      }
    }
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        digDeeper(children[i]);
      }
    }
  };
  
  digDeeper(items);
  return match;
};

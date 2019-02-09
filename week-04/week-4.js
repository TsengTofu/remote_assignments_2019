// Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback) {
    window.setTimeout(function() {
        var result = n1 + n2;
        callback(result)
    }, delayTime);
}
delayedResult(4, 5, 3000, function(result) {
    console.log(result);
});
delayedResult(-5, 10, 2000, function(result) {
    window.alert(result);
});



// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
  var xhr = new XMLHttpRequest();
  var str = '';
  xhr.addEventListener("load", render);
  xhr.open("GET", src);
  xhr.send();
  
}
function render(data){
  // console.log(this.responseText);
  var datalist = JSON.parse(this.responseText);
  console.log(datalist);
  document.getElementById('res').textContent = this.responseText;
  var li = '';
  for(var i in this.responseText) {
     li += '<li>' + this.responseText[i] +'</li>' 
  }
  document.getElementById('jsonUL').appendChild(li);
  // document.createElement() and appendChild() methods are preferred.
}
ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
  render(response);
}); // you should get product information in JSON format and render data in the page


//Assignment 3: Re-Implement Layout by React (Front-End Only)

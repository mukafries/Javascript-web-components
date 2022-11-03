
let data = '';
xmlHttpRequest();


function xmlHttpRequest() {
  const request = new XMLHttpRequest();

  request.open('GET', "http://localhost/rest_api/api/comments/read.php", false);

  request.onload = function(){

    if (request.status === 200) {
      console.log(request.statusText);
      data = JSON.parse(request.responseText)['data'];
    }else{
      console.log(request.statusText);
    }
  }

  request.onerror = function(){
    data = "Error, could not get nor access url";
  }

  request.send();
}

// returns object/element with the passed id
function O(i){
  return typeof i == 'object'? i : document.getElementById(i);
}

// returns an array of elemts with the passed classname
function C(c){
  return document.getElementsByClassName(c);
}
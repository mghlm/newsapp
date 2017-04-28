var request = new XMLHttpRequest();
request.open('GET', 'http://content.guardianapis.com/search?api-key=67ed4a43-635b-4457-96d6-1b7b9281bb62');
request.onload = function() {
  var newsData = JSON.parson(request.responeText);
request.send();
};

function connection(params, theGame) {
  var request = new XMLHttpRequest()

  request.open('GET', 'https://api.rawg.io/api/platforms?key=5b38613725994eb09004251c11250686', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      console.log(data)
      if (params == "support") {
        //console.log(data.results)
        for (i = 0; i < data.results.length; i++) {
          //console.log(data.results[i])
          if (data.results[i].name === theGame) {
            $('<button class="prout" onclick="games(' + "'" + [i] + "'" + ')" >' + data.results[i].name + '</button>').appendTo('body');
          }
        }
      }
      //console.log(data)
    } else {
      console.log('error')
    }
  }
  
  request.send()
}

function games(nomGame) {
  var request = new XMLHttpRequest()
  
  request.open('GET', 'https://api.rawg.io/api/platforms?key=5b38613725994eb09004251c11250686', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      //$('<div/>').text(data.results[nomGame].image_background).appendTo('body');
      console.log(data.results[nomGame].image_background)
      image(data.results[nomGame].image_background)
        for (i = 0; i < data.results[nomGame].games.length; i++) {
          console.log(data.results[nomGame].games[i])
          $('<div/>').text(data.results[nomGame].games[i].name).appendTo('body');

        }
    } else {
      console.log('error')
    }
  }
  request.send()
}

function image(url) {
  var img1 = new Image();
  img1.src = url;
  img1.alt = 'alt';
  document.body.appendChild(img1);
}

function choiceGame() {
  var val = document.getElementById("poiu").value
  console.log(val)
  connection("support", val)
}
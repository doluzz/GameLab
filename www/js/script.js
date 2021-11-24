function connection(params, other) {
  var request = new XMLHttpRequest()

  request.open('GET', 'https://api.rawg.io/api/platforms?key=5b38613725994eb09004251c11250686', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
      if (params == "support") {
        //console.log(data.results)
        for (i = 0; i < data.results.length; i++) {
          //console.log(data.results[i])
          $('<button class="prout" onclick="games(' + "'" + [i] + "'" + ')" >' + data.results[i].name + '</button>').appendTo('body');
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
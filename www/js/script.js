function newCall(app) {
  app.request({
    url: 'https://api.rawg.io/api/platforms?key=5b38613725994eb09004251c11250686',
    method: "GET", 
    dataType: "json",
    beforeSend: function () {
      app.dialog.preloader();
    },
    success: function (data) {

      app.dialog.close();
    }
  });
}

//Les jeux selon la platforme avec le input
function choiceGame() {
  //console.log(data)
  var val = document.getElementById("poiu").value
  console.log(val)
  //games(val, data)
}


function ListePlat(theGame, data) {
  //everyGame()
  //console.log(data.results)
  for (i = 0; i < data.results.length; i++) {
    //console.log(data.results[i])
    if (data.results[i].name === theGame) {
      $('<button class="prout" onclick="games(' + "'" + [i] + "'" + ')" >' + data.results[i].name + '</button>').appendTo('.ret');
    }
  }
}


//Affiche l'image et la liste des jeux de la platforme
function games(nomGame, data) {
  console.log(data.results[nomGame].image_background)
  image(data.results[nomGame].image_background)
    for (i = 0; i < data.results[nomGame].games.length; i++) {
      console.log(data.results[nomGame].games[i])
      $('<div/>').text(data.results[nomGame].games[i].name).appendTo('body');
    }
} 



//Pemet d'afficher une image
function image(url) {
  var img1 = new Image();
  img1.src = url;
  img1.alt = 'alt';
  document.body.appendChild(img1);
}





// Voir apres tout

function everyGame() {
  var glovalG = []
    for (i = 0; i < data.results.length; i++) {
      for (y = 0; y < 6; y++) {
        //console.log(data.results[i].games[y])
        let importGame = {
          id : data.results[i].games[y].id,
          name : data.results[i].games[y].name
        }
        glovalG.push(importGame)
      }
    }
    console.log(glovalG)
  } 
  




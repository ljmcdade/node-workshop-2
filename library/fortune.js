function getYourFortune(){

    var fortunes = ["outlook is good", "outlook is not so good", "outlook is hazy; try again later"];
    
    var yourFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  
    console.log(yourFortune);
}

getYourFortune();
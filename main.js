function addUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value; 
    console.log("player 1 name is: ",player1_name);

    localStorage.setItem("plyer1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    console.log("hello 2");

    window.location.replace("game_page.html");
    console.log("hello 3");
}   
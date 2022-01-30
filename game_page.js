player1_name = localStorage.getItem("player1_name");
player1_name = localStorage.getItem("player2_name");
console.log;
player1_score = 0;
player2_score = 0;
console.log;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player1_name + ":";
console.log;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
console.log;
document.getElementById("player_question").innerHTML = "Question Turn- "+ player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- "+ player2_name;
console.log;

function send() {
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1)*parseInt(number2);
    question_word = "<h4 id='word_display'>"+number1+"x"+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_checkbox'>";
    check_button = "<br><br><button onclick='check()' class=btn btn-info'>check</button>";
    row = question_word + input_box + check_button;
    console.log("hello 1", row);
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
console.log;
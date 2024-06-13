p1name = localStorage.getItem("player1name");
p2name = localStorage.getItem("player2name");
p1score = 0;
p2score = 0;
questionturn = "p1";
answerturn = "p2";
document.getElementById("player1_name").innerHTML = p1name;
document.getElementById("player2_name").innerHTML = p2name;
document.getElementById("player1_score").innerHTML = p1score;
document.getElementById("player2_score").innerHTML = p2score;
document.getElementById("player_question").innerHTML = "Question turn:" + p1name;
document.getElementById("player_answer").innerHTML = "Answer turn:" + p2name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x" + number2+"</h4> <br>";
    input_box = "answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row= question_number+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
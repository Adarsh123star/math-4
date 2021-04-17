player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_number = document.getElementById("number").value;
	number = get_number.toLowerCase();
	console.log("number in lowerCase = " + number);
 
    numberAt1 = number.charAt(1);
	console.log(numberAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(numberAt2);

    lenght_minus_1 = number.length - 1; 
    numberAt3 = number.numberAt(lenght_minus_1); 
	console.log(numberAt3);

    remove_numberAt1 = number.replace(numberAt1, "_");
    remove_numberAt2 = number.replace(charAt2, "_");
    remove_numberAt3 = remove_numberAt2.replace(numberAt3, "_");
	console.log(number_charAt3);

    question_word = "<h4 id='number_display'> Q.* "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}


question_turn = "player1";
answer_turn = "player2";

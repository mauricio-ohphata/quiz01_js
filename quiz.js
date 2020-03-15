//quiz parameters

//socre
let score = 0;

//answer
let answer = ["1A", "2B", "3C", "4D", "5E"]

//chance por question
let chance = 1;

//current quesntion nunber
let q_nun = 0;

//feddback content
let pictures = ["img/img_feed3.png", "img/img_feed2.png", "img/img_feed1.png"];
let t_text = ["Not this time", "Don't worry", "GreatJob"];
let c_text = [
    ["The right answer is answer 1.", "You have one more chance, read carefully and select the right answer.", "Congratulations, right answer."],
    ["The right answer is answer 2.", "You have one more chance, read carefully and select the right answer.", "Congratulations, right answer."],
    ["The right answer is answer 3.", "You have one more chance, read carefully and select the right answer.", "Congratulations, right answer."],
    ["The right answer is answer 4.", "You have one more chance, read carefully and select the right answer.", "Congratulations, right answer."],
    ["The right answer is answer 5.", "You have one more chance, read carefully and select the right answer.", "Congratulations, right answer."]
];
let q_tag = ["quest01-tab", "quest02-tab", "quest03-tab", "quest04-tab", "quest05-tab", "result-tab"]
let s_tag = ['a[href="#quest01"]', 'a[href="#quest02"]', 'a[href="#quest03"]', 'a[href="#quest04"]', 'a[href="#quest05"]', 'a[href="#result"]']

//submit button functions
function check(q) {
    q_nun = q;
    let a_nun = 0;

    switch (q_nun) {
        case 0:
            a_nun = document.quiz0.question.value;
            check_a(a_nun);
            break;
        case 1:
            a_nun = document.quiz1.question.value;
            check_a(a_nun);
            break;
        case 2:
            a_nun = document.quiz2.question.value;
            check_a(a_nun);
            break;
        case 3:
            a_nun = document.quiz3.question.value;
            check_a(a_nun);
            break;
        case 4:
            a_nun = document.quiz4.question.value;
            check_a(a_nun);
            break;
    }
}

//check right answer and call feedback
function check_a(a_nun) {

    if (a_nun == answer[q_nun]) {
        score++;
        chance = 1;
        q_finish();
        q_next();
        feed(2);
    } else if (a_nun != answer[q_nun] && chance > "0") {
        chance--;
        feed(1);
    } else {
        chance = 1;
        q_finish();
        q_next();
        feed(0);
    }
}

//show feedback
function feed(i) {
    document.getElementById("t_message").innerHTML = t_text[i];
    document.getElementById("c_message").innerHTML = c_text[q_nun][i];
    document.getElementById("m_picture").src = pictures[i];
    $('#quizfeed').modal('show')
}

//disable options buttons
function q_finish() {
    var elems = document.getElementsByClassName("bt_qa" + q_nun);
    for (var i = 0; i < elems.length; i++) {
        elems[i].disabled = true;
    }

    document.getElementById("bt_conf" + q_nun).disabled = true;

    document.getElementById(answer[q_nun]).style.background = "rgba(255,244,0,1";
    document.getElementById(answer[q_nun]).style.backgroundImage = "url('img/ic_certo.png')";
}

//next question
function q_next() {
    //disable next tab
    document.getElementById(q_tag[q_nun + 1]).className =
        document.getElementById(q_tag[q_nun + 1]).className.replace(/(?:^|\s)disabled(?!\S)/g, '')

    //show popinfo
    document.getElementById("sp" + [q_nun + 1]).style.visibility = "visible";

    //show next tab
    //$('#nav-tab ' + s_tag[q_nun + 1]).tab('show')

    if (q_nun == 4) {
        q_result();
    }
}

//disable pop
function h_pop(i) {
    document.getElementById("sp" + i).style.visibility = "hidden";
}

//show result
function q_result() {
    document.getElementById("r_score").innerHTML = "Your score is " + score + " points";
    document.getElementById("r_text").innerHTML = "Text for quiz result information.";
}
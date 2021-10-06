var index = 0;
var crct = 0;


function displayQn() {

    document.getElementById("question").innerHTML = `${index + 1}` + ". " + qna[index].qn;
    document.getElementById("op1").innerHTML = qna[index].ans.a;
    document.getElementById("op2").innerHTML = qna[index].ans.b;
    document.getElementById("op3").innerHTML = qna[index].ans.c;
    document.getElementById("op4").innerHTML = qna[index].ans.d;

    if (index >= (9)) {
        document.getElementById("buttondiv").innerHTML = "<button id='next' onclick='submitQuiz()'>Submit</button>";
    }

}

function nextQn() {
    checkAns();
    var x = document.getElementById(qna[index].cans);
    x.checked = false;
    index++;
    displayQn();
}
function checkAns() {
    var x = document.getElementById(qna[index].cans);
    if (x.checked == true)
        crct++;
}
function submitQuiz() {
    checkAns();
    var ob1 = document.getElementById("question");
    var ob2 = document.getElementById("a1");
    var ob3 = document.getElementById("b1");
    var ob4 = document.getElementById("c1");
    var ob5 = document.getElementById("d1");
    var ob6 = document.getElementById("buttondiv");
    var ob7 = document.getElementById("line");
    ob1.remove();
    ob2.remove();
    ob3.remove();
    ob4.remove();
    ob5.remove();
    ob6.remove();
    ob7.remove();
    var cdiv = document.createElement("div");
    cdiv.innerText = "Your score is: " + crct;
    cdiv.id = "newdiv";
    document.body.appendChild(cdiv);
    var ansdiv = document.createElement("div");
    ansdiv.innerHTML = "Answers:<br>"
    for (var i = 0; i < 10; i++)
        if (qna[i].cans == 'a')
            ansdiv.innerHTML += `${i + 1}` + ". " + qna[i].ans.a + "<br>";
        else if (qna[i].cans == 'b')
            ansdiv.innerHTML += `${i + 1}` + ". " + qna[i].ans.b + "<br>";
        else if (qna[i].cans == 'c')
            ansdiv.innerHTML += `${i + 1}` + ". " + qna[i].ans.c + "<br>";
        else if (qna[i].cans == 'd')
            ansdiv.innerHTML += `${i + 1}` + ". " + qna[i].ans.d + "<br>";
    ansdiv.id = "newdiv";
    document.body.appendChild(ansdiv);
}

qna = [
    {
        qn: "Who was first test captain of Indian cricket team ?",
        ans: {
            'a': "Bapu Nadkarni",
            'b': "CK Nayudu",
            'c': "Ajit Wadekar",
            'd': "Vijay Hazare"
        },
        cans: 'b'
    },
    {
        qn: "Which is first Indian cricket tournament ?",
        ans: {
            'a': "Bombay Triangular",
            'b': "Pepsi Cup",
            'c': "Bombay Series",
            'd': "None of these"
        },
        cans: 'a'
    },
    {
        qn: "Which of the following is first cricket club in India ?",
        ans: {
            'a': "East Indian Cricket Club",
            'b': "Maharashtra Cricket Club",
            'c': "Bombay Cricket Club",
            'd': "Oriental Cricket Club"
        },
        cans: 'd'
    },
    {
        qn: "Who scored the first triple hundred in international test cricket for India?",
        ans: {
            'a': "Sachin Tendulkar",
            'b': "Kapil Dev",
            'c': "Virender Sehwag",
            'd': "Rahul Dravid"
        },
        cans: 'c'
    },
    {
        qn: "Which country did India play its first test match against?",
        ans: {
            'a': "South Africa",
            'b': "Australia",
            'c': "England",
            'd': "Pakistan"
        },
        cans: 'c'
    },
    {
        qn: "Who was the first foreign coach appointed for the Indian team ?",
        ans: {
            'a': "John Wright",
            'b': "Brian Lara",
            'c': "Garry Kerstern",
            'd': "Imran Khan"
        },
        cans: 'a'
    },
    {
        qn: "Which is First stadium to host a Test match in India ?",
        ans: {
            'a': "Wankhede Stadium, Mumbai",
            'b': "Nehru Cricket Stadium, Pune",
            'c': "Eden Garden, Kolkata",
            'd': "Gymkhana Ground in Bombay"
        },
        cans: 'd'
    },
    {
        qn: "Who is first Indian batsman to score 20 ducks ?",
        ans: {
            'a': "Yuvaraj Singh",
            'b': "Sachin Tendulkar",
            'c': "Zaheer Khan",
            'd': "Javagal Srinath"
        },
        cans: 'b'
    },
    {
        qn: "What is color of ball used in limited over match ?",
        ans: {
            'a': "Red",
            'b': "Pink",
            'c': "White",
            'd': "Orange"
        },
        cans: 'c'
    },
    {
        qn: "Which batsman has the most runs in international cricket?",
        ans: {
            'a': "Virat Kholi",
            'b': "Sachin Tendulkar",
            'c': "Ricky Ponting",
            'd': "Brian Lara"
        },
        cans: 'b'
    }
]
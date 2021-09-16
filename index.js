// Movies quiz app

//frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
//index = readlineSync.keyInSelect(frameworks, 'Which framework?');
//console.log(frameworks[index] + ' is enabled.');







var readlinesync=require('readline-sync');//get the package
var score=0;//global variable
var username=readlinesync.question("What's your name ");
console.log("Welcome "+ username + " to Movie Quiz App");

function play(question,answer,option)
{  
 // var userAnswer= readlinesync.question(question);
var index = readlinesync.keyInSelect(option,question); //its way of getting input by giving option to the users(here //"keyInSelect" method is used )
  if(option[index]===answer)
  {
    console.log("RIGHT!");
    score++;
    console.log('Current score :'+ score);
  }
  else
  {
    console.log('WRONG!');
    console.log('Current score :'+ score);
  }

};
//list of objects
var questionBank=[
    {
    question:"Shershah movie is based on which army officer? ",
    option:["Rohan batra","Vikram batra","v.k singh","Vishal batra"],
    answer:"Vikram batra",
    },

    {
    question:"What's the name of actrees in movie kabir singh? ",
    answer:"Preeti",
    option:["Dimple","Priya","Rashmi","Preeti"],
    },
    {
    question:"Which movie has dialogUe 'YEH DIL MAANGE MORE'? ",
    answer:"Shershah",
    option:["Uri","Shershah","War","Airlift"],
    },
    {
    question:"Which movie has the highest world wide box office collection? ",
    answer:"Bahubali2",
    option:["Dangal","Bajrangi bhaijaan","Bahubali2","pk"],
    },
    {
    question:"Movie Shershah is based on which incident? ",
    answer:"Kargil war",
    option:["Surgical strike","Air strike","Kargil war","Indo-china war"],
    },

    ];

    var highScore=[
      {
       name:"Abhinav",
       score:5,
      },
      {
        name:"Bhagwaan",
        score:4,
      },
    ];

    for(var i=0;i<questionBank.length;i++)
    {
     var currentQuestion=questionBank[i];
      play(currentQuestion.question,currentQuestion.answer,currentQuestion.option)
    }
  console.log('\n');
  console.log("YAY! YOU SCORED :" + score);
  console.log("-------------");
  console.log("List of top two scorers are ---");

  for(var i=0;i<highScore.length;i++)
  {
    var topScorer=highScore[i];
    if(topScorer.score < score)
    {
      console.log(username);
      console.log("score: " + score)
      topScorer.name=username;
      topScorer.score=score;

    }
    else
    {
    console.log(topScorer.name);
    console.log("score: " + topScorer.score);
    }
  };



  'use strict';

  console.log('Welcome to Globetrotter!');

  // Hide quiz section until click the top button
  $('#quiz').hide();

  // Array of questions and answers
  // function countryQandAs(country, question, answer){
  //   this.country = country;
  //   this.question = question;
  //   this.answer = answer;
  // };

  var questions = [{
    country: 'Austria',
    question: 'What is the capital of Austria?',
    choices: ['Salzburg', 'Vienna', 'Linz'],
    correctAnswer: 1,
    image: '<img src=\'images/Austria.jpg\'>'
  }, {
    country: 'Germany',
    question: 'When did the Berlin Wall fall?',
    choices: ['1990', '1989', '1987'],
    correctAnswer: 1,
    image: '<img src=\'images/Germany.jpg\'>'
  }, {
    country: 'United Kingdom',
    question: "Using the picture to the right, what does 'Big Ben' refer to?",
    choices: ['The tower', 'The clock', 'The bell of the clock'],
    correctAnswer: 2,
    image: '<img src=\'images/United_Kingdom.jpg\'>'
  },
  {
    country: 'Albania',
    question: "What is the main religion in Albania?",
    choices: ['Christianity', 'Islam', 'Judaism'],
    correctAnswer: 1,
    image: '<img src=\'images/Albania.jpg\'>'
  },
  {
    country: 'Belgium',
    question: "How many airports does Belgium have?",
    choices: ['32', '67', '41'],
    correctAnswer: 2,
    image: '<img src=\'images/Albania.jpg\'>'
  },
  ];

  var quiz = $('#quiz');
  var score = 0;
  var selection;
  var randomNumber = Math.round(Math.random() * 3); //need to change the 2 to the number of questions -1
  var randomQuestion = questions[randomNumber];

  function newQuestion() {
    console.log('made it!');
    $('#country-name').text(randomQuestion.country);
    $('img').replaceWith(randomQuestion.image);
    $('#country-question').text(randomQuestion.question);
    $('#answer-one').text(randomQuestion.choices[0]);
    $('#answer-two').text(randomQuestion.choices[1]);
    $('#answer-three').text(randomQuestion.choices[2]);
  };

  // Show quiz section until click the top button
  $('#main-button').click(function() {
    $('#travel').hide(800);
    $('#quiz').show(1000, newQuestion());
  });

  $('#myForm input').on('change', function() {
    selection = ($('input[name="optradio"]:checked', '#myForm').val());
    // console.log('answer is ' + randomQuestion.correctAnswer);
    if (selection == randomQuestion.correctAnswer) {
      alert("You're correct!");
    }
    else {
      alert("You're wrong. Try again.");
    }
  });

  $('#next-button').click(function() {
    randomNumber = Math.round(Math.random() * 3);
    randomQuestion = questions[randomNumber];
    $('#quiz').show(1000, newQuestion())
  });

  // if $('#correctAnswer')
  // if ($('.radio') == randomQuestion.correctAnswer){
  // $('#quiz').show(1000, function(New));

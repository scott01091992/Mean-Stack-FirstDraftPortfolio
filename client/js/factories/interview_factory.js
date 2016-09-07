myApp.factory('interview_factory', function(){
	var factory = {};

  factory.questions = [
    {
      question: "Who is Brandon Scott?",
      answer: "I am an aspiring Web Designer who just recently graduated from the Coding Dojo in Bellevue Washingon. My previous academic goal was to earn my BA in network administration, then I learned how to code and fell in love with it. I am truly greatful that I found a profession that I love. I have always enjoyed problem solving, technology and photography; web development brings all those ideas together and gives me a great creative outlet. "
    },
    {
      question: "What do I do with my time?",
      answer: "When I am not at work, you will find me cooking, cleaning, coding, or on my daily run. Outside of that time, I'm currently watching the Office on Netflix, and I got Deus Ex to play. Sadly, I have only played for an hour or so."
    },
    {
      question: "Where do I see myself in 5 years?",
      answer: "In 5 years I will be a Web Designer, working on learning more technologies and finishing my BA in Network Engineering. I will have paid off my school loans and be living in an affordable apartment. I might have found time to build a YouTube channel and learn more about video editing."
    },
    {
      question: "What inspires me?",
      answer: "I get a lot of my inspriation from science. I love to learn about Physics, Computer Science, Quantum Physics, Cosmology, Psychology, and whatever else you can think of that describes or calculates how the universe works. Nature really does find a way to amaze and inspire."
    },
    {
      question: "What do I consider my strengths?",
      answer: "The strengths I would attribute to a lot of who I am are my positivity and very steep learning curve. I can learn new things very fast, and I have a mind that leans on the side of logic and mathmatics. My optimism creates a positive collaboration where more ideas can be shared and more productivity can occur. Working in the customer service industry has taught me a lot about the real life user experience, which can be projected into the UX/UI concepts in the development process as well."
    },
    {
      question: "What are my weaknessess?",
      answer: "Perfectionist. When I take something on I can really get too deep into the details. When I start something I always try to optimize and take care of every issue that arises. Sometimes it is better to just leave some stuff alone and move on."
    },
    {
      question: "Why should you take interest in me?",
      answer: "I have constantly been told that I don't have enough experience. I dont believe that is true at all. I have the motivation. I have the skill. The only thing I am missing, is the opportunity."
    }
  ];

  factory.get_questions = function(callback){
    callback(factory.questions);
  };

	return factory;
});

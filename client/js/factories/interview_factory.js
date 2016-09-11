myApp.factory('interview_factory', function(){
	var factory = {};

  factory.questions = [
    {
      question: "Who is Brandon Scott?",
      answer: "I am an aspiring Web Developer who just recently graduated from the Coding Dojo in Bellevue Washingon. My previous academic goal was to earn my BA degree in network administration. I then learned how to code and fell in love with this practice. I am truly greatful that I found a profession that I love. I have always enjoyed problem solving, technology and photography; web development brings all those ideas together and gives me a great creative outlet. "
    },
    {
      question: "What do you do with your spare time?",
      answer: "When I am not at work, you will find me cooking, cleaning, coding, practicing design, or on my daily run. Outside of that time, I play strategy games or go out to the movies."
    },
    {
      question: "Where do you see yourself in 5 years?",
      answer: "In 5 years I will be a Web Developer/Designer, working on learning more technologies and finishing my BA in Network Engineering. After completing that degree I would continue my education focusing on design and physics. I will have paid off my school loans and have a savings account with 6 months salary in place. Lastly, I will have started my personal brand on YouTube, and produce weekly developer/designer educational videos."
    },
    {
      question: "What inspires you?",
      answer: "I get a lot of my inspriation from science. I love to learn about Physics, Computer Science, Quantum Physics, Cosmology, Psychology, and whatever else you can think of that describes or calculates how the universe works. Recently I've found inspiration from developers and designers on YouTube as well."
    },
    {
      question: "What do you consider your strengths?",
      answer: "The strengths I would attribute to a lot of who I am are; my positivity and very steep learning curve. I can learn new things very fast, and I have a mind that leans on the side of logic and mathmatics. My optimism creates a positive environment for collaboration, where ideas can be shared and increased productivity can occur. Working in the customer service industry has taught me a lot about what consumers expect, which can be projected into the UX/UI concepts in the development process as well."
    },
    {
      question: "What are your weaknessess?",
      answer: "Perfectionist. When I start the dive into a project, the project never feels completely finished. I can always reiterate and find something to change, which can be a burden in some cases. I always try to optimize and take care to pay attention to every detail. Sometimes it is better to just leave some stuff alone and move on."
    },
    {
      question: "Why should we take interest in you?",
      answer: "I am honest with the people I meet. I love to help others learn, and love to learn from others. I am smart, determined, and charismatic. The only thing I am missing, is the opportunity."
    }
  ];

  factory.get_questions = function(callback){
    callback(factory.questions);
  };

	return factory;
});

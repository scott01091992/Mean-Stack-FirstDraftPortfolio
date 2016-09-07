myApp.config(function ($routeProvider){
  $routeProvider
    .when('/home',{
      templateUrl: '../partials/home.html',
    })
    .when('/Skills',{
      templateUrl: '../partials/skills.html',
    })
    .when('/Resume',{
      templateUrl: '../partials/resume.html',
    })
    .when('/Workflow',{
      templateUrl: '../partials/workflow.html',
    })
    .when('/Projects',{
      templateUrl: '../partials/projects.html',
    })
    .when('/Interview',{
      templateUrl: '../partials/interview.html',
    })
    .otherwise({
      redirectTo: '/home',
    })
});

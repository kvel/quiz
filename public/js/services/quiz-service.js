app.factory('QuizSvc',['$http', function($http) { 
        var questions = [
        {
            question: "Which is not an advantage of using a closure?",
            options: [
                {label: "Prevent pollution of global scope"}, {label: "Encapsulation"}, {label: "Private properties and methods"}, {label: "Allow conditional use of ‘strict mode’"}
            ],
            answer: "Allow conditional use of ‘strict mode’",
            selectedAnswer: ''
        },{
            question: "To create a columned list of twoline email subjects and dates for a masterdetail view, which are the most semantically correct?",
            options: [
                {label: "<div>+<span>"}, {label: "<tr>+<td>"}, {label: "<ul>+<li>"}, {label: "<p>+<br>"},{label: "none of these"},{label: "all of these"}
            ],            
            answer: "<tr>+<td>",
            selectedAnswer: ''
        },
        {
            question: "To pass an array of strings to a function, you should not use...",
            options: [
                {label: "fn.apply(this, stringsArray)"}, {label: "fn.call(this, stringsArray)"}, {label: "fn.bind(this, stringsArray)"}
            ],            
            answer: "fn.bind(this, stringsArray)",
            selectedAnswer: ''
        },
        {
            question: "Given <div id=”outer”><div class=”inner”></div></div>, which of these two is the most performant way to select the inner div?",
            options: [
                {label: "getElementById(\"outer\").children[0]"}, {label: "getElementsByClassName(\"inner\")[0]"}
            ],            
            answer: "getElementById(\"outer\").children[0]",
            selectedAnswer: ''
        },
        {
            question: "Given the below code, Which message will be returned by injecting this service and executing “myService.getMessage()”",
            code:'angular.module("myModule",[]).service("myService",(function() { <br/>'
            +'  var message = "Message one!"<br/>'
            +'  var getMessage = function() {<br/>'
            +'    return this.message<br/>'
            +'  }<br/>' 
            +'  this.message ="Message two!"<br/>'
            +'  this.getMessage = function() { return message }<br/>'
            +'  return function() {<br/>'
            +'   return {<br/>'
            +'    getMessage: getMessage,<br/>'
            +'    message: "Message three!"<br/>'
            +'   }<br/>'
            +' }<br/>'
            +'})())<br/>',
            options: [
                {label: "1"}, {label: "2"}, {label: "3"}
            ],            
            answer: "3",
            selectedAnswer: ''
        }];
        
        function getQuestion(i){
            if(i==questions.length)
                return null;
            return questions[i];
        };
        function reset(){
            for(var i=0;i<questions.length;i++){
                questions[i].selectedAnswer='';
            }
        };
        function getQuizLength(){
            reset();
            return questions.length;
        };
        return {
            getQuizLength:getQuizLength,
            getQuestion:getQuestion
        }
    
}]);
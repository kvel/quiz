app.controller('QuizCtrl', ['$scope', 'QuizSvc', '$sce', function($scope , QuizSvc, $sce) {   
    
    var verify = function(){
        var qs=$scope.currentQuestion;
        if(qs.selectedAnswer==qs.answer)
            $scope.success++;
        $scope.result.push({q:qs.question, a:qs.selectedAnswer, c:qs.answer});
    };
    
    var loadQuestion = function(i){
        $scope.currentQuestion=QuizSvc.getQuestion(i);    
        if($scope.currentQuestion.code){
            $scope.currentQuestion.htmlSafe=$sce.trustAsHtml($scope.currentQuestion.code);
        }
    };
    
    $scope.verifyAndLoad=function(){             
        verify();
        $scope.cIndex++;
        loadQuestion($scope.cIndex);
    };
    
    $scope.verifyAndShowResult=function(){             
        verify();
        $scope.score=Math.round(($scope.success/$scope.qlen)*100);
        $scope.currentQuestion=null;
    };
    
    $scope.init = function(){
        $scope.success=0;
        $scope.qlen=QuizSvc.getQuizLength();
        $scope.cIndex=0;
        $scope.result=[];
        loadQuestion($scope.cIndex);
    };
    $scope.init();
    
}]);
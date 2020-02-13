// Code goes here

(function(){
  var app = angular.module('todoApp',[]);
  
  app.controller('TodoCtrl',['$scope',function($scope){
    $scope.todos=[
    {
        title:'cooking',
        completed:true,
        createdAt:Date.now()
    },
    {
        title:'workout',
        completed:false,
        createdAt:Date.now()
    },
    {
        title:'studying',
        completed:false,
        createdAt:Date.now()
    }
    ];
    
    $scope.add=function(newTodoTitle){
      //alert(newTodoTitle);
      var newTodo ={
        title:newTodoTitle,
        completed:false,
        createdAt:Date.now()
      };
      $scope.todos.push(newTodo);
      //push : 배열의 맨 마지막에 추가됨
      
      $scope.newTodoTitle="";
    }
    
    $scope.remove=function(todo){
      var idx = $scope.todos.findIndex(function(item){
        return item.id === todo.id;
      });
      if(idx > -1){
        $scope.todos.splice(idx,1)
        //splice : 해당 idx만 삭제
      }
      //idx번호가 -1보다 클 때:idx번호가 존재할 때
      //idx번호가 -1보다 작을 때 : idx번호가 존재하지 않을 때
    }
    /*making object*/
   /* $scope.name='myeongin in the building';*/
  }]);
})();
/*use the angular todo module*/
/*start capital on controller name */

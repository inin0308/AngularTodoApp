/*app.directive*/
angular.module('todoApp').directive('todoTitle',function(){
  //javascript 이름을 지정할 때 - 없이 카멜 기법으로
  return{
    template: '<h1>Todolist</h1>'
  }
  
});
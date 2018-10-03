import $ from 'jquery'
import './src/css/index.css'

$(function(){
  $("li:odd").css("backgroundColor", 'yellow');
  $("li:even").css("backgroundColor", function(){
    return "pink"
  });

})

class Person {
  static say(){
    alert('hi')
  }
}

 let p = new Person()

 Person.say()
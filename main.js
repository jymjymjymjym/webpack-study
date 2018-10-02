import $ from 'jquery'
import './src/css/index.css'
import "./src/css/index.less"

$(function(){
  $("li:odd").css("backgroundColor", 'yellow');
  $("li:even").css("backgroundColor", function(){
    return "pink"
  });

})
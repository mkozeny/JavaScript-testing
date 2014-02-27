/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


var start = null;

var d = document.getElementById("titleDiv");

function step(timestamp) {
  var progress;
  if (start === null) start = timestamp;
  progress = timestamp - start;
  d.style.left = Math.min(progress/10, 200) + "px";
  if (progress < 20000000) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
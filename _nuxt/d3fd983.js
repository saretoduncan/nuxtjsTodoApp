(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(n,e,t){t(183),n.exports=t(184)},249:function(n,e,t){var content=t(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(130).default)("f52d43e0",content,!0,{sourceMap:!1})},250:function(n,e,t){var o=t(129)(!1);o.push([n.i,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Fira sans",sans-serif}body{background-color:#262336;color:#fff}main{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;padding-top:2rem}main h1{font-size:2.5rem;text-transform:capitalize;margin-bottom:.5rem}main h1~p{margin-bottom:2rem}main .create-new{display:flex;justify-content:center;align-items:center;max-width:480px}main .create-new input{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;border-bottom:1px solid #fff;background-color:transparent;color:#fff;font-size:1.5rem;padding-top:.5rem;padding-bottom:.5rem;margin:0;transition:.4s}main .create-new input:focus{border-bottom-color:#2fd66f}main .create-new button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;background-color:#2fd66f;text-transform:uppercase;font-weight:700;color:#000;font-size:1.5rem;padding:.5rem 1rem;border-radius:.5rem;margin-left:.5rem;cursor:pointer}main .tasks{width:100%;max-width:480px;margin-top:2rem}main .tasks .task{display:flex;align-items:center;justify-content:space-between;background-color:#342f4e;padding:1rem;border-radius:.5rem;margin-bottom:1rem}main .tasks .task .buttons{min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}main .tasks .task button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;background-color:#2fd66f;text-transform:uppercase;font-weight:700;color:#000;font-size:.875rem;padding:.5rem 1rem;border-radius:.5rem;margin-left:.5rem;cursor:pointer}main .tasks .task button.delete{background-color:#dc143c;color:#eee}.tasks .task.is-complete{opacity:.7}.tasks .task.is-complete .content{text-decoration:line-through}',""]),n.exports=o},251:function(n,e,t){"use strict";t.r(e),t.d(e,"state",(function(){return r})),t.d(e,"mutations",(function(){return c})),t.d(e,"getters",(function(){return m})),t.d(e,"actions",(function(){return d}));var o=t(181),r=(t(96),t(174),function(){return{tasks:[]}}),c={ADD_TASK:function(n,e){n.tasks=[{content:e,done:!1}].concat(Object(o.a)(n.tasks))},REMOVE_TASK:function(n,e){n.tasks.splice(n.tasks.indexOf(e),1)},TOGGLE_TASK:function(n,e){e.done=!e.done}},m={},d={}}},[[182,4,1,5]]]);
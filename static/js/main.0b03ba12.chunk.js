(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a(2),l=a(3),o=a(7),r=a(4),c=a(8),s=a(0),m=a.n(s),u=a(5),d=a.n(u);a(15);var h=function(e){return e.wholeList.map(function(t,a){return m.a.createElement("div",{id:"todoList",role:"list",className:"ui divided middle aligned list"},m.a.createElement("div",{role:"listitem",className:"item"},m.a.createElement("label",{className:"w3-animate-opacity",id:"lines"},m.a.createElement("span",{className:"singleItem"},t)),m.a.createElement("div",{className:"right floated content"},m.a.createElement("button",{className:"ui circular icon button",value:a,onClick:e.onComplete},m.a.createElement("i",{"aria-hidden":"true",className:"checkmark icon"})),m.a.createElement("button",{className:"ui circular icon button",value:a,onClick:e.onDelete},m.a.createElement("i",{"aria-hidden":"true",className:"trash icon"})))))})},p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={items:[],currentItem:""},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"addToDo",value:function(e){e.preventDefault(),this.state.currentItem&&(this.setState({items:[].concat(Object(n.a)(this.state.items),[this.state.currentItem])}),e.currentTarget.reset())}},{key:"handleInput",value:function(e){e.preventDefault(),this.setState({currentItem:e.target.value})}},{key:"deleteToDo",value:function(e){void 0===e&&console.log(e);var t=this.state.items;t.splice(e.currentTarget.value,1),this.setState({items:t})}},{key:"completeToDo",value:function(e){e.preventDefault(),void 0===e&&console.log(e);var t=document.getElementsByClassName("singleItem");console.log(t),t[e.currentTarget.value].style.setProperty("text-decoration","line-through")}},{key:"render",value:function(){var e=(new Date).getDate(),t=(new Date).getMonth(),a=(new Date).getFullYear();return 0===this.state.items.length?m.a.createElement("div",{className:"w3-animate-opacity"},m.a.createElement("div",{id:"header"},m.a.createElement("h2",null,"Welcome to your ToDo list"),m.a.createElement("p",null,"TODAY'S DATE: ",e,"/",t,"/",a),m.a.createElement("form",{className:"ui medium form",id:"myForm",name:"myForm",onSubmit:this.addToDo.bind(this)},m.a.createElement("input",{placeholder:"What do you need to do?",type:"text",onChange:this.handleInput.bind(this)}),m.a.createElement("button",{id:"addBut",className:"ui button"},"ADD"))),m.a.createElement("div",{id:"list"},m.a.createElement("h2",{id:"header"},"Your list is currently empty!"))):m.a.createElement("div",null,m.a.createElement("div",{id:"header"},m.a.createElement("h2",null,"Welcome to your ToDo list"),m.a.createElement("p",null,"TODAY'S DATE: ",e,"/",t,"/",a),m.a.createElement("form",{className:"ui medium form",onSubmit:this.addToDo.bind(this)},m.a.createElement("input",{placeholder:"What do you need to do?",type:"text",onChange:this.handleInput.bind(this)}),m.a.createElement("button",{className:"ui button"},"ADD"))),m.a.createElement("div",{id:"list",className:"w3-animate-opacity"},m.a.createElement(h,{wholeList:this.state.items,onDelete:this.deleteToDo.bind(this),onComplete:this.completeToDo.bind(this)})))}}]),t}(m.a.Component);d.a.render(m.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0b03ba12.chunk.js.map
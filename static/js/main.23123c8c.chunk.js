(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),c=(a(13),a(1)),u=a(2),l=a(4),o=a(3),m=a(5),h="ca6fee0f88df528c206afa9b4d1dacdbc29febc2684aee9ece11f69dacaa7459",d="https://api.unsplash.com/search/photos",p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={queries:[],query:"random",inputValue:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleImageSave",value:function(e){var t=this.state.savedImages.slice();t[t.length]=e,this.setState({savedImages:t})}},{key:"handleQueries",value:function(e){var t=this.state.queries.slice();t.push(e),this.setState({queries:t})}},{key:"handleInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"handleQuery",value:function(){var e=this.state.queries.slice();e.push(this.state.inputValue),this.setState({query:this.state.inputValue,queries:e})}},{key:"handleTagQuery",value:function(e){var t=e.target.value;this.setState({query:t})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"grid-container"},i.a.createElement("div",{className:"imageSearch grid-item"},i.a.createElement(f,{value:this.state.inputValue,onValueChange:function(t){return e.handleInputValue(t)}})),i.a.createElement("div",{className:"actionMenu grid-item"},i.a.createElement("div",{className:"actionMenu-container"},i.a.createElement("button",{className:"action-container-item action-button action-button-search",onClick:function(){return e.handleQuery()}},i.a.createElement("span",null,"Search")))),i.a.createElement("div",{className:"imagePlacard grid-item"},i.a.createElement("h2",null,"Results Placard"),i.a.createElement(v,{query:this.state.query})),i.a.createElement("div",{className:"imageSaved grid-item"},i.a.createElement("h2",null,"Saved Queries"),this.state.queries.map(function(t){return i.a.createElement("button",{className:"keyword",value:t,onClick:function(t){return e.handleTagQuery(t)}},i.a.createElement("span",null,t))}))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("span",{className:"fa fa-search"}),i.a.createElement("input",{className:"input-field searchField",placeholder:"Search for Images",value:this.props.value,onChange:this.props.onValueChange}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={isClicked:!0,pictures:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("I have loaded");var t=d+"?query="+this.props.query+"&client_id="+h,a=[];fetch(t).then(function(e){return e.json()}).then(function(t){return t.results.map(function(t){a.push({id:t.id,image:t.urls.regular}),e.setState({pictures:a})})})}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.query!==e.query){console.log("Update has loaded");var a=d+"?query="+this.props.query+"&client_id="+h,n=[];fetch(a).then(function(e){return e.json()}).then(function(e){return e.results.map(function(e){n.push({id:e.id,image:e.urls.regular}),t.setState({pictures:n})})})}}},{key:"render",value:function(){return i.a.createElement("div",{className:"imagePlacards-container"},this.state.pictures.map(function(e){return i.a.createElement("div",{className:"image-item-container"},i.a.createElement("div",{key:e.id},i.a.createElement("img",{className:"image-item",src:e.image})),i.a.createElement("button",{className:"image-item-zoom"},i.a.createElement("i",{className:"fa fa-search-plus","aria-hidden":"true"})),i.a.createElement("button",{className:"image-item-save",id:e.id},i.a.createElement("i",{className:"fa fa-plus"})))}))}}]),t}(n.Component),g=(n.Component,p);a(15);s.a.render(i.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.23123c8c.chunk.js.map
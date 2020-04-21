(this["webpackJsonpreact-03-image-finder"]=this["webpackJsonpreact-03-image-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(65)},21:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);a(21);var n=a(7),r=a(3),c=a(4),i=a(5),o=a(6),u=a(0),l=a.n(u),s=(a(23),a(17)),p=a.n(s),m=a(18),d=a.n(m),g=function(e,t){return d.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=".concat("15321800-0af55316b9677918b25647eb1","&q=").concat(e,"&page=").concat(t)).then((function(e){return e.data.hits}))},h=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={searchQuery:""},e.handleChange=function(t){t.preventDefault(),e.setState(Object(n.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.updateQuery(e.state.searchQuery)},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},l.a.createElement("button",{type:"submit",className:"search-form__button"},l.a.createElement("span",{className:"search-form__button-label"},"\u041f\u043e\u0438\u0441\u043a")),l.a.createElement("input",{onChange:this.handleChange,name:"searchQuery",className:"search-form__input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0439\u0442\u0438..."}))}}]),a}(u.Component),f=function(e){var t=e.updateQuery;return l.a.createElement("header",{className:"search-bar"},l.a.createElement(h,{updateQuery:t}))},y=function(e){var t=e.picture;return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{"data-src":t.largeImageURL,src:t.webformatURL,alt:t.id,className:"image-gallery__img"}))},b=function(e){var t=e.pictures,a=e.getBigPicture;return l.a.createElement("ul",{className:"image-gallery"},t.map((function(e){return l.a.createElement("li",{className:"image-gallery__item",onClick:a,id:e.id,key:e.id},l.a.createElement(y,{picture:e}))})))},v=function(e){var t=e.title,a=e.page,n=e.handler;return l.a.createElement("div",{className:"button-wrap"},l.a.createElement("button",{type:"button",className:"button-wrap__btn",onClick:function(){return n(a)}},t))},E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).backdropRef=Object(u.createRef)(),e.handleKeypress=function(t){"Escape"===t.code&&e.props.closeModal()},e.handleBackdropClick=function(t){var a=e.backdropRef.current;a&&t.target!==a||e.props.closeModal()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeypress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeypress)}},{key:"render",value:function(){var e=this.props.bigPicture;return l.a.createElement("div",{className:"overlay",ref:this.backdropRef,onClick:this.handleBackdropClick},l.a.createElement("div",{className:"modal"},l.a.createElement("img",{className:"modal__img",src:e,alt:"bigPicture"})))}}]),a}(u.Component),k=function(e){var t=e.message;return l.a.createElement("div",{className:"notification"},l.a.createElement("span",{className:"notification__message"},t))},w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={pictures:[],bigPicture:"",query:"",page:1,isEmpty:!1,isLoading:!1,isModal:!1,error:null},e.updateState=function(t,a){e.setState(Object(n.a)({},t,a))},e.updateQuery=function(t){t!==e.state.query&&e.resetBeforeNewQuery(),e.updateState("query",t)},e.loadMorePictures=function(t){t++,e.updateState("page",t)},e.resetBeforeNewQuery=function(){e.updateState("page",1),e.updateState("pictures",[])},e.scrollToTarget=function(e){var t=document.getElementById(e).getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:t,behavior:"smooth"})},e.getBigPicture=function(t){e.updateState("bigPicture",t.target.dataset.src),e.openModal()},e.openModal=function(){e.updateState("isModal",!0)},e.closeModal=function(){e.updateState("isModal",!1),e.updateState("bigPicture","")},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.query,c=n.page;t.query===r&&t.page===c||(this.setState({isLoading:!0,isEmpty:!1,error:null}),g(r,c).then((function(e){a.setState((function(t){return{pictures:t.pictures.concat(e)}})),!e.length&&a.updateState("isEmpty",!0),e.length&&a.scrollToTarget(e[0].id)})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({isLoading:!1})})))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.bigPicture,n=e.page,r=e.error,c=e.isModal,i=e.isLoading,o=e.isEmpty;return l.a.createElement("div",{className:"page-container"},l.a.createElement(f,{updateQuery:this.updateQuery}),r&&l.a.createElement(k,{message:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(r.message)}),o&&l.a.createElement(k,{message:"\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442 :("}),t.length>0&&l.a.createElement(b,{pictures:t,getBigPicture:this.getBigPicture}),i&&l.a.createElement(p.a,{className:"loader",type:"ThreeDots",color:"#e4e4e4",height:80,width:80}),t.length>=12&&l.a.createElement(v,{title:"\u0411\u043e\u043b\u044c\u0448\u0435",page:n,handler:this.loadMorePictures}),c&&l.a.createElement(E,{bigPicture:a,closeModal:this.closeModal}))}}]),a}(u.Component),S=a(19);a.n(S).a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.519bd071.chunk.js.map
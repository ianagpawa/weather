(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{154:function(e,t,a){e.exports=a(370)},369:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);a(155);var n=a(1),r=a.n(n),c=a(76),i=a(20),s=a(21),o=a(23),l=a(22),u=a(77),m=a(35),h=a(149),d=a(150),E=a(55),f=a(110),p=a(151),v=a.n(p);var y=function(e){var t=e.type,a=e.city,n=e.units,r=e.fetchFunc,c=e.fetchSuccessFunc,i=e.fetchFailureFunc;return function(e){return e(r()),v()(function(e){var t=e.type,a=e.city,n=e.units;return"https://api.openweathermap.org/data/2.5/".concat(t,"?q=").concat(a,"&units=").concat(n,"&appid=8a4604e1c9724c6c163653f91c504862")}({type:t,city:a,units:n})).then((function(e){return e.json()})).then((function(t){return e(c(t))})).catch((function(t){return e(i(t))}))}};function b(){return{type:"FETCH_CURRENT_WEATHER"}}function g(e){return{type:"FETCH_CURRENT_WEATHER_SUCCESS",payload:e}}function O(e){return{type:"FETCH_CURRENT_WEATHER_FAILURE",payload:e}}function F(){return{type:"FETCH_FORECAST_WEATHER"}}function W(e){return{type:"FETCH_FORECAST_WEATHER_SUCCESS",payload:e}}function N(e){return{type:"FETCH_FORECAST_WEATHER_FAILURE",payload:e}}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New York",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"imperial",a={type:"weather",city:e,units:t,fetchFunc:b,fetchSuccessFunc:g,fetchFailureFunc:O};return y(a)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New York",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"imperial",a={type:"forecast",city:e,units:t,fetchFunc:F,fetchSuccessFunc:W,fetchFailureFunc:N};return y(a)}var _=Object(m.c)({currentWeatherDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENT_WEATHER_SUCCESS":return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},forecastWeatherDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CURRENT_WEATHER_SUCCESS":return[t.payload].concat(Object(E.a)(e));case"FETCH_FORECAST_WEATHER_SUCCESS":return[].concat(Object(E.a)(e),Object(E.a)(t.payload.list.filter((function(e){return e.dt_txt.indexOf("12:00:00")>-1}))));default:return e}},todayForecastWeatherDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FORECAST_WEATHER_SUCCESS":return[].concat(Object(E.a)(e),Object(E.a)(t.payload.list.slice(0,6)));default:return e}}}),D=Object(d.createLogger)();var T=a(152),w=a.n(T),R=function(e,t){return w()(e).format(t)},S=function(e){return R(e,"dddd")},H=function(e){return R(e,"Do MMM")},k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.forecastWeatherDetails,a=e.todayForecastWeatherDetails;return(t||a).map((function(e,a){var n=t?"forecast".concat(a):"today".concat(a),c=e&&e.weather&&e.weather[0],i=e.dt_txt,s=parseInt(e&&e.main&&e.main.temp),o=c.main,l="https://openweathermap.org/img/wn/".concat(c.icon,"@2x.png"),u=S(i),m=R(i,"LT"),h=-1!==n.indexOf("forecast")?u:m,d=-1!==n.indexOf("forecast")?H(i):null;return r.a.createElement("div",{key:n,className:"forecast"},r.a.createElement("div",{className:"forecast-header"},r.a.createElement("div",{className:"day"},h),r.a.createElement("div",null,d)),r.a.createElement("div",{className:"forecast-content"},r.a.createElement("div",{className:"forecast-icon"},r.a.createElement("img",{src:l})),r.a.createElement("div",{className:"description"},o),r.a.createElement("div",{className:"degree"},s,r.a.createElement("sup",null,"o"),"F")))}))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentWeatherDetails,a=e.todayForecastWeatherDetails,n=parseInt(t&&t.main&&t.main.temp),c=t&&t.weather&&t.weather[0],i="https://openweathermap.org/img/wn/".concat(c&&c.icon,"@2x.png"),s=c&&c.main,o=t.dt_txt,l=t.name,u=S(o),m=H(o);return r.a.createElement("div",{className:"forecast-table"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"forecast-container"},r.a.createElement("div",{className:"today forecast"},r.a.createElement("div",{className:"forecast-header"},r.a.createElement("div",{className:"day"},u),r.a.createElement("div",{className:"date"},m)),r.a.createElement("div",{className:"forecast-content"},r.a.createElement("div",{className:"location"},l),r.a.createElement("div",{className:"degree"},r.a.createElement("div",{className:"num"},n,r.a.createElement("sup",null,"o"),"F"),r.a.createElement("div",{className:"forecast-icon"},r.a.createElement("img",{src:i}),r.a.createElement("p",null,s))))),r.a.createElement(k,{todayForecastWeatherDetails:a}))))}}]),a}(n.Component),U=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.forecastWeatherDetails;return r.a.createElement("div",{className:"forecast-table forecast-div"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"forecast-container"},r.a.createElement(k,{forecastWeatherDetails:e}))))}}]),a}(n.Component),x=a(61),I=a(78),L=a(153),M=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentWeatherDetails,a=e.forecastWeatherDetails,n=e.todayForecastWeatherDetails;return r.a.createElement("div",{className:"site-content"},r.a.createElement("div",{className:"site-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"branding"},r.a.createElement("div",{className:"logo-type"},r.a.createElement("h1",{className:"site-title"},"Weather Forecast"))))),r.a.createElement(A,{currentWeatherDetails:t,todayForecastWeatherDetails:n}),r.a.createElement(U,{forecastWeatherDetails:a}),r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-md-offset-6"},r.a.createElement("div",{className:"social-links col-md-offset-6"},r.a.createElement("a",{href:"https://github.com/ianagpawa",target:"_blank"},r.a.createElement(x.a,{icon:I.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ianagpawa",target:"_blank"},r.a.createElement(x.a,{icon:I.c})),r.a.createElement("a",{href:"https://ianagpawa.github.io/portfolio",target:"_blank"},r.a.createElement(x.a,{icon:I.a})),r.a.createElement("a",{href:"https://github.com/ianagpawa/weather",target:"_blank"},r.a.createElement(x.a,{icon:L.a}))))),r.a.createElement("p",{className:"colophon"},"Copyright \xa9",(new Date).getFullYear()," ",r.a.createElement("span",{className:"ian"},"Ian Agpawa"),". Designed by Themezy. All rights reserved"))))}}]),a}(n.Component),Y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getCurrentWeather,a=e.getForecastWeather;t(),a()}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.currentWeatherDetails,a=e.forecastWeatherDetails,n=e.todayForecastWeatherDetails;return r.a.createElement(M,{currentWeatherDetails:t,forecastWeatherDetails:a,todayForecastWeatherDetails:n})}}]),a}(n.Component);var J,q=Object(u.b)((function(e){return{currentWeatherDetails:e.currentWeatherDetails,forecastWeatherDetails:e.forecastWeatherDetails,todayForecastWeatherDetails:e.todayForecastWeatherDetails}}),(function(e){return Object(m.b)({getCurrentWeather:C,getForecastWeather:j},e)}))(Y),z=Object(m.d)(_,J,Object(m.a)(h.a,D)),B=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{store:z},r.a.createElement(q,null))}}]),a}(n.Component);a(369);Object(c.render)(r.a.createElement(B,null),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.57e2e0c2.chunk.js.map
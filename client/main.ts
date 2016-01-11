/// <reference path="../typings/meteor/meteor.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="app.tsx" />
Meteor.startup(function () {
  // Use Meteor.startup to render the component after the page is ready
  ReactDOM.render(React.createElement(App.Main),
    document.getElementById("render-target"));
});

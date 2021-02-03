import { registerApplication, start } from "single-spa";



let data = [
  {
      "name": "@App/navbar",
      "app": "@App/navbar",
      "activeWhen": "/"
  },
  {
      "name": "@App/homepage",
      "app": "http://localhost:8002/App-homepage.js",
      "activeWhen": "/"
  },
  {
      "name": "@App/section",
      "app": "http://localhost:8002/App-section.js",
      "activeWhen": "/"
  }
]

data.forEach(function(item) {
  registerApplication({
    name: item.name,
    app: () => System.import(item.app),
    activeWhen: [item.activeWhen]
  });
});



// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@App/navbar",
//   app: () => System.import("@App/navbar"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@App/homepage",
//   app: () => System.import("http://localhost:8002/App-homepage.js"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@App/section",
//   app: () => System.import("http://localhost:8003/App-section.js"),
//   activeWhen: ["/homepage"]
// });



start({
  urlRerouteOnly: true,
});

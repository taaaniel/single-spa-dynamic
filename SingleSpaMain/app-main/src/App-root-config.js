import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@App/navbar",
  app: () => System.import("http://localhost:8001/App-navbar.js"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@app/homepage",
  app: () => System.import("http://localhost:8002/App-homepage.js"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

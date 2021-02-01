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
  app: () => System.import("@App/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@App/homepage",
  app: () => System.import("http://localhost:8002/App-homepage.js"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@App/section",
  app: () => System.import("http://localhost:8003/App-section.js"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});

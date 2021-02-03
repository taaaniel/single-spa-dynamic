const scriptEl = document.createElement('script')
scriptEl.type = 'systemjs-importmap'
scriptEl.textContent = `
{
  "imports": {
    "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.development.js",
    "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.development.js",
    "@App/root-config": "//localhost:8000/App-root-config.js",
    "@App/navbar": "//localhost:8001/App-navbar.js",
    "@App/homepage": "http://localhost:8002/App-homepage.js",
    "@App/section": "http://localhost:8003/App-section.js"
  }
}`

document.head.appendChild(scriptEl);
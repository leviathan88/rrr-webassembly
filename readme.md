### React with Redux Observable for Webassembly

```
This project contains everything you need to start running webassembly
in React app, with help of Redux Observables for some Functional Reactive flair.
```

```
To start:
- download this project,
- in package.json/devDependencies reference your pkg file,
- correctly import referenced file in index.js
- $npm start
```

```
wasm and wasmMemory are passed from top container of your app,
into wasmService, from where you can create different service functions,
and use them throughout the app, 

we recommend implementing all wasm calls in Epics, and just pass Action functions from your containers
```


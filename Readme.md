create button component

<!-- import React from "react";

const Button = (props) => {
  return <div>Hello</div>;
};

export default Button; -->

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

vite.config.js
import { resolve } from "path";

 entry: resolve(__dirname, "./src/components/index.ts"),   

  name: "component-library-mh",
      // the proper extensions will be added
      fileName: "component-library-mh",



    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDom",
        },
      },
    },    

don't put tailwind.css to the external dependency
1:40

package.json

 "files": [
    "dist"
  ],
  "main": "./dist/component-library-mh.umd.cjs",
  "module": "./dist/component-library-mh.js",

  "exports": {
    ".": {
      "import": "./dist/my-lib.js",
      "require": "./dist/my-lib.umd.cjs"
    }
  }


  yarn run  build
  you will see dist/component-library-mh.js
  component-library-mh.umd.cjs

  npm pack

  get a component-library-mh-0.0.0.tgz like a zip file

  test module locally

  npm add component-library-mh-0.0.0.tgz

  create TestArea.jsx

  const TestArea = ({ children }) => {
  return (
    <section style={{ bo: "2px solid #ccc", margin: "2rem", padding: "2rem" }}>
      <div>{children}</div>
    </section>
  );
};

export default TestArea;

in App.jsx
import "./App.css";
// import Button from "./components/Button";
import Button from "component-library-mh";
import TestArea from "./TestArea";
const App = () => {
  return (
    <main>
      <section>
        <Button />
      </section>
      <TestArea>
        <Button />
      </TestArea>
    </main>
  );
};

export default App;


error 
fix
import {Button} from "component-library-mh";


now it will work 

how to pass props to the component 


if we comment tailwind.css from index.jsx , 
the styles will be removed from the button component 

button.tsx
 <button
      onClick={onClick}
      {...rest}
      className="bg-blue-400 text-blue-50 m-2 p-2 rounded-md"
    >
      {children}
  </button>


npm uninstall component-library-mh
rm -rf component-library-mh-0.0.0.tgz

npm run build
npm pack

npm add component-library-mh-0.0.1.tgz


export css to the component

create tailwind.css in component
 add @tailwind base;
@tailwind components;
@tailwind utilities;

package.json
 "./dist/style.css": {
      "import": "./dist/style.css",
      "require": "./dist/style.css"
    }

    component index.js
    import Button from "./Button";
import "./tailwind.css";
export { Button };

then run yarn run build 
style.css is created

npm ri=un build 

npm pack 

npm add component-library-mh-0.0.1.tgz

 import "component-library-mh/dist/style.css";


 pass css style to button component

 read more about tailwind merge


 






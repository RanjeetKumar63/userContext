// import React, { createContext, useState } from "react";
// import "./App.css";
// import ChildA from "./components/ChildA";

// //step1. create context
// const UserContext = createContext();

// // step2: wrap all the child inside a provider

// // step3: value pass

// // step4:consumer inside of do consume

// const App = () => {
//   const [user, setUser] = useState({ name: "Ranjeet" });

//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <ChildA />
//       </UserContext.Provider>
//     </>
//   );
// };

// export default App;
// export { UserContext };

import React, { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
export { ThemeContext };

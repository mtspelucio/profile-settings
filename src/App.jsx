import { useState } from "react";
import ProfileSettings from "./components/ProfileSettings";
import Menu from "./components/Menu";

export default function App() {
  const [isMenu, setIsMenu] = useState(true);

  return (
    <div className="App">
      { 
        isMenu ? <Menu setMenu={setIsMenu} /> :
        <ProfileSettings setMenu={setIsMenu} />
      }
    </div>
  );
}
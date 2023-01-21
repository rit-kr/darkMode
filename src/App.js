import './App.css';
import './DarkMode.css';
import{ImSun} from "react-icons/im";
import{HiMoon} from "react-icons/hi";


import useDarkMode from './useDarkMode'
function App() {
  const { theme, toggleTheme } = useDarkMode()
console.log();
  return (
    <div className='margin' style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
      <div>
      <div className='darkMode-container'>
        <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme} />
        <label htmlFor="checkbox" className="label" style={{
            background: theme === 'dark' ? '#fff' : '#000',
          }}
        >
          <HiMoon className='moon'/>
          <ImSun  className='sun'/>
          <div className='ball' style={{
            background: theme === 'dark' ? '#000' : '#fff',
          }}
          ></div>
        </label>
    </div>
    </div>
        <input></input>
    <h1>Dark mode using react hooks</h1>
      <p>In this quick article, I will be implementing dark mode to a quick React app with a custom React hook,<br></br>
          So let’s get started!
      </p>
    </div>
  );
}

export default App;

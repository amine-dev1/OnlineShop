import { Navbar } from "./components/navbar";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/ui/ThemeProvider";
import ThemeSwitcher from "./components/ui/themeSwitcher";
import Register from './components/register';

function App() {

  return (
    <ThemeProvider defaultTheme="system">
      <div>
        <Register/>
      </div>
    </ThemeProvider>
  )
}

export default App;



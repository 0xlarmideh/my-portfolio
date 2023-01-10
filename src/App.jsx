import './App.css'
import Articles from './sections/Articles'
import Overview from './sections/Overview'
import Projects from './sections/Projects'

function App() {

  return (
    <div className="grid grid-cols-2 gap-[50px]">
      <div className="grid-1 ">
        <Overview />
      </div>
      <div className="grid-2 bg-dark p-[30px] my-[30px] ">
        <Projects />
        <Articles />
      </div>
    </div>
  );
}

export default App

import './App.css'
import Articles from './sections/Articles'
import Overview from './sections/Overview'
import Projects from './sections/Projects'

function App() {

  return (
    <div className="max-sm:block grid grid-cols-2 gap-[50px]">
      <div className="grid-1 ">
        <Overview />
      </div>
      <div className="grid-2 p-[36px] my-[60px] mr-[60px] max-sm:m-[0px] ">
        <Projects />
        <Articles />
      </div>
    </div>
  );
}

export default App

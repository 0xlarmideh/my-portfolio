import './App.css'
import Articles from './sections/Articles'
import Overview from './sections/Overview'
import Projects from './sections/Projects'

function App() {

  return (
    <div className="max-md:block grid grid-cols-[1fr,1fr] gap-[50px]">
      <div className="grid-1 max-md:relative fixed ">
        <Overview />
      </div>
      <div className="grid-2 p-[36px] my-[60px] w-[50%] absolute right-0 mr-[60px] max-laptop:m-[0px] ">
        <Projects />
        <Articles />
      </div>
    </div>
  );
}

export default App

import './App.css'
import Articles from './sections/Articles'
import Overview from './sections/Overview'
import Projects from './sections/Projects'
import Stack from './sections/Stack'

function App() {

  return (
    <div className="max-md:block ">
      <div className="grid-1 max-md:relative fixed w-[50%] max-md:w-[100%] ">
        <Overview />
      </div>
      <div className="grid-2 p-[36px] my-[60px] w-[50%] max-md:w-[100%] absolute right-0 mr-[60px] max-laptop:m-[0px] ">
        <Projects />
        <Articles />
        <Stack />
      </div>
    </div>
  );
}

export default App

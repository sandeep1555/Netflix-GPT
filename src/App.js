
import { Provider, useSelector } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import WatchPage from './components/WatchPage';
import Header from './components/Header';
import GptSearchPage from './components/GptSearchPage';
import ComingSoon from './components/ComingSoon';


function App() {

  const  changegptPage=useSelector(store=>store.gpt.gptSearch);
  return (
    <div className="">
            <Header/>
      {changegptPage ? <GptSearchPage/>: <Body/>}
    </div>
  );
}

export const appRouter=createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Login/>,
      },
        {
          path:"/browse",
          element:<Browse/>,
      },
      {
          path:"/watch",
          element:<WatchPage/>,
      },
      
      ]
  },
  {
    path:"/coming",
    element:<ComingSoon/>,
  },
  
])
export default App;

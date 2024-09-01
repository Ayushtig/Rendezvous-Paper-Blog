import './App.css';
import NavBar from './NavBar';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="page-body">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/articles' element={<ArticlesList/>}/>
        <Route path='/articles/:articleId' element={<Article/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


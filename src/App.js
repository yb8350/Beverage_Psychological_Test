import { Link, BrowserRouter , Route} from 'react-router-dom'
import Button from './Button';
import UiMatcher from './UiMatcher.js';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/ui/button">버튼</Link>
      <Link to="/ui/text">텍스트</Link>
      <Link to="/ui/box">박스</Link>
    </div>
    <div>
      <Route path="/ui/:name" component={UiMatcher} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;

import './Nav.css';
import { Link } from 'react-router-dom';

function Nav(){
    return (
      <>  
      <h1 style={{color:'purple'}}>Hello</h1>
      <ul>
      <Link to ='/'><li>Home</li></Link>
      <Link to ='/about'><li>About</li></Link>
      <Link to ='/contact'><li>Contact</li></Link> 
      <Link to ='/ecom'><li>Ecom</li></Link>
      <Link to ='/api'><li>Myapi</li></Link>
      <Link to ='/button'><li>Counter</li></Link>
      </ul>
        </>
    );
}
export default Nav;
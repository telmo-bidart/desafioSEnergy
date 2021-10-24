import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <nav>
       <h3>
       <Link to="/">
           Logo
       </Link>
           <ul>
               <Link to="/contribuitors">
               <li>Contribuitors</li>
               </Link>
               <Link to ="/suport">
               <li>Suporte</li>
               </Link>
           </ul>
       </h3>
   </nav>
  );
}

export default Nav;

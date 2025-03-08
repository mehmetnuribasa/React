import {Routes, Route} from "react-router-dom";

// BrowserRouter
// The component that wraps the entire application for routing. Updates the components when the URL changes.
<BrowserRouter>
  <App />
</BrowserRouter>


const App = () => {
    
    return(
        <div>
            
            {/* Routes and Route */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>


            {/* Link and NavLink */}
            <Link to="/">Ana Sayfa</Link>
            <NavLink to="/about" activeClassName="active">About</NavLink>   {/* in addition to Link, it indicates active class and make easier to change style and etc. */}
        
        </div>
    );
}





// useNavigate
// It is used to redirect to another page within the code.
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate("/about")}>
      Go to about page
    </button>
  );
}




// useParams (Getting paramters from URL)
// it is used to get data from the dynamic URLs.
import { useParams } from "react-router-dom";

// A different react component. (it returns xml value for displaying)
function UserProfile() {
  const { id } = useParams();       //  it gets the changeable id variable
  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/users/:id" element={<UserProfile />} />     {/* Here colon (:) indicates that id is changeable */}
    </Routes>
  );
}

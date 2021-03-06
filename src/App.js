import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './Components/Navbar';
import Footer from "./Components/Footer";
import Blog from "./Components/NewBlog/NewBlog";
import Shop from "./Components/Shop/Shop";
import Shirt from "./Components/Shirt/Shirt";
import Products from "./Components/Products/Product";
import Home from "./Components/NewHome/NewHome";
// const Home = React.lazy(() => import('./Components/NewHome/NewHome'));
import ProductCat from "./Components/Printing/Product_Category";
import Pagination from "./Components/Printing/Print_pagination";
import Portfolio from "./Components/Portfolio/Portfolio";
import Post from "./Components/Post/Post";
import Contact from "./Components/Contact/Contact";
import Career from "./Components/Careers/Careers";
import Cart from "./Components/Cart/Cart";
import Order from "./Components/Order/Order";
// import NewOrder from './Components/NewOrder/NewOrder';
import Privacy from "./Components/Privacy/Privacy";
import Profile from "./Components/Profile/Profile";
import Store from "./Components/Store/Store";
import Term from "./Components/Term/Term";
import Whoweserve from "./Components/Who_We_Serve/Whoweserve";
import About from "./Components/About/About";
// import WebDev from "./Components/Web_dev/Web_dev";
import ProductList from "./Components/Printing/ProductLists";
import Glasscase from "./Components/Printing/Glasscase";
// import Test from './Components/Test/Test';
import ProductView from "./Components/Printing/ProductView";
import NewNavBar from "./Components/NewNavBar/NewNavBar";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Web from "./Components/Services/Web";
import DigitalMkt from "./Components/Services/DigitalMkt";
import Mktcomingsoon from "./Components/ComingSoon/Mktcomingsoon";
import PortalSoon from "./Components/ComingSoon/PortalSoon";
import NewAboutUs from "./Components/NewAboutUs/NewAboutUs";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <NewNavBar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/newnavbar" component={NewNavBar} /> */}
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/shop" component={Shop} />
          <Route path="/shirt" component={Shirt} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/productcategory" component={ProductCat} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/career" component={Career} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/profile" component={Profile} />
          <Route path="/store" component={Store} />
          <Route path="/term" component={Term} />
          <Route path="/web" component={Web} />
          <Route path="/aboutus" component={NewAboutUs} />
          {/* <Route path="/category" component={WebDev} /> */}
          <Route path="/pagination" component={Pagination} />
          <Route path="/productlists" component={ProductList} />
          <Route path="/glasscase" component={Glasscase} />
          <Route path="/digital" component={DigitalMkt} />
          {/* <Route path='/test' component={ Test } /> */}
          <Route path="/viewall" component={ProductView} />
          <Route path="/marketplace" component={ComingSoon} />
          <Route path="/training" component={Mktcomingsoon} />
          <Route path="/portal" component={PortalSoon} />
          <Route
            path="/tenpluslabs-portal"
            component={() => {
              window.location.replace("https://portal.tenpluslabs.com");
              return null;
            }}
          />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

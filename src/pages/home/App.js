import react, {Component} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidepanel from "../../components/Sidepanel";
class App extends Component {
render() {
  return(
    <div className="container">
      {/* header */}
        <Header />




      {/* main content */}
      <div className="row">
        <div className="col-sm-8">
          <h4>Home page</h4>
          <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components. 
            It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. 
            However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.[7]</p>
        
        </div>

      {/* side bar */}
      
        <Sidepanel />
        
      </div>
      

      {/* footer */}
    <Footer />
    </div>

    );
    
}
}
export default App;
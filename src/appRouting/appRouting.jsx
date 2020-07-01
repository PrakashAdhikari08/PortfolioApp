import React from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Home from '../components/body/homepage/home';
import About from '../components/body/about/aboutUs';



const PublicRoute=({component: Component,...props })=>{
    return(
    <Route {...props} render={()=>(
        
        <div>
                        <div className = "">
                            <Header/>
                        </div>  
                        <div className="">
                            <Component/>
                        </div>
                        <div className="container-fluid">
                        <Footer />             
                        </div>
                        
        </div>
      
    )}/>
    )
}
const ProtectedRoute=({component: Component,...props })=>{
    return(
    <Route {...props} render={()=>(
        
        <div>
                        <div className = "">
                            <Header/>
                        </div>  
                        <div className="">
                            <Component/>
                        </div>
                        
                        <Footer />             
                        
        </div>
      
    )}/>
    )
}
const AdminRoute=({component: Component,...props })=>{
    return(
    <Route {...props} render={()=>(
        
        <div>
                        <div className = "">
                            <Header/>
                        </div>  
                        <div className="">
                            <Component/>
                        </div>
                        
                        <Footer />             
                        
        </div>
      
    )}/>
    )
}

const Routing = () => {
    return ( 
                <Router>
                    <Switch>
                    <PublicRoute path = "/"    exact     component = {Home}/>
                    <PublicRoute path = "/home"    exact     component = {Home}/>
                    <PublicRoute path = "/about"    exact     component = {About}/>


                    
                    </Switch>
                </Router>
     );
}
 
export default Routing;

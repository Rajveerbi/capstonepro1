import React from 'react'
import ReactDOM from 'react-dom';

class Header extends React.Component{
  
    render(){
        const mystyle={
            color: "white",
            backgroundColor: "black",
            padding: "13px",
            textAlign: "center",
            
            
           }
        return(
         
            <div>
               
                <h1 style={mystyle}>Monthly Grocery Planning App</h1>
            </div>
        )
    }
}
export default Header
import React, { useState } from 'react'

import axios from 'axios'
import "C:/Users/HP/Desktop/capstonepro1/Project1/grocerypurchaseapp/node_modules/bootstrap/dist/css/bootstrap.min.css"



class table extends React.Component{
         constructor(props){
               super(props);

               this.state={
                 name:"",
                   Ispurchased: false   
               }
              
                
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
         }
         componentDidMount() {
                axios.get('/grocery/getAll')
                    .then(response => {
                        var grocerylist=[];
                        for(var i=0; i< response.length; i++){
                          var currency = response[i];
                          grocerylist.push(currency);
                        }
                        this.setState({ grocerylist: response.data });
                        console.log(this.state.grocerylist)
                        console.log(this.state.grocerylist[0])
                      })
                    .catch(err => console.log(err));  }
                    handleTogglePurchase(index) {
                        const grocerylist = this.state.grocerylist.slice();
                        const item = grocerylist[index];
                        item.purchased = item.purchased ? false : true;
                        this.setState({ grocerylist: grocerylist });    
                    }
            
         handleChange(e){
        this.setState({[e.target.name]:e.target.value});
         }  
         handleSubmit(e){
                 e.preventDefault();
                 const item = {
                         groceryitem:this.state.name,
                         Ispurchased:this.state.Ispurchased
                 };
                 if(item.groceryitem=== ' '){alert('enter a grocery iteem'); return;}
                 axios.post('/grocery/add',item)
                 .then(response => console.log(response.data))
                 .catch((err)=>console.log(err))
                 this.setState({
                         groceryitem:'',
                         Ispurchased:false
                 });
}                     
        render() {  
               
         return(
           <>
          <div class="card" Style="width: 35rem;margin-top: -93px;
    margin-left: auto;
    margin-right: auto; padding: 3px;border: 20px;background-size: cover">
       <div className="create">
                    <form className="create__form">
                        <div className="create__form-container">
                      <p className="edit__group form-group"> 
                            <input autoFocus 
                                className="edit__input"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Add shoping item"
                                value={this.state.name}
                                onChange={this.handleChange}
                                onClick={this.handleSubmit} 
                                Style="padding: 0.375rem 8.77rem;

    font-size: 1.5rem;" />   
                        </p>
                            </div>
                            </form>
                            </div>
          <table class="table table-bordered">
             <table class="table ">
        <thead>
          <tr>
          <th>                                                
          <button type="button" class="btn btn-light " Style="margin-left:384px;background-color: white;
  color: black;
  border: 2px solid black ;">Purchased</button>
          <button type="button" class="btn btn-light "Style="margin-left:10px;background-color: white;
  color: black;
  border: 2px solid black ;">X</button>
          </th>
          </tr>
          
        </thead>
        </table>  
        <table class="table ">
        <thead>
          <tr>
            <th>  
            <button type="button" class="btn btn-light " Style="margin-left:384px;background-color: white;
  color: black;
  border: 2px solid black ;">Purchased</button>
          <button type="button" class="btn btn-light "Style="margin-left:10px;background-color: white;
  color: black;
  border: 2px solid black ;">X</button>
          </th>
          </tr>
        </thead>
        </table>
        <table class="table ">
        <thead>
          <tr>                                  
            <th>
            <button type="button" class="btn btn-light " Style="margin-left:384px;background-color: white;
  color: black;
  border: 2px solid black ;">Purchased</button>
          <button type="button" class="btn btn-light "Style="margin-left:10px;background-color: white;
  color: black;
  border: 2px solid black ;">X</button>
          </th>
          </tr>
        </thead>
        </table>
        <table class="table ">
        <thead>
          <tr>
            <th>
            <button type="button" class="btn btn-light " Style="margin-left:384px;background-color: white;
  color: black;
  border: 2px solid black ;">Purchased</button>
          <button type="button" class="btn btn-light "Style="margin-left:10px;background-color: white;
  color: black;
  border: 2px solid black ;">X</button>
          </th>
          </tr>
        </thead>
        </table>
       
        </table>
        </div>
        
      
        
        </>
         );
         }


        }
export default table;
import React, {Component} from 'react';
import HobbyList from './hobbylist.js';
import './pet.css' ;

class Pet extends Component {
  render() { //every component have render method
    return(
      <div className='card'>
        <h2 className='name'> moxie </h2>
        <img src='http://www.themeowblog.com/wp-content/uploads/2017/09/Best-Cat-Blogs-of-2017-The-Meow-Blog-Cat-Blog-MEOW.png' alt='cute cat'  />
        <h5 style={{fontSize: "2rem", marginBottom: "0"}}>Hobbies : </h5>
        < HobbyList />
      </div>  
      ) ; //render mtd return created elements to div
  }
}
  
  export default Pet; 
  
  
  
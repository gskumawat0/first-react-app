import React,{Component} from 'react';

class HobbyList extends Component{
      render(){
        const listStyle = {fontSize: '1.5em'};
        const hobbies = ['eat','sleep','play game','sleep']; 
        return (
          <ul>
              {hobbies.map((h,i) => {
              return <li key={i} style={listStyle}> {h}</li>})}
            </ul>
          
          );
      }
      
}

export default HobbyList ;
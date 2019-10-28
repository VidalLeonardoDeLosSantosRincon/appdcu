import React, {Component} from 'react';
import './global/css/Phrases.css';


class Phrases extends Component{

    constructor(){
        super();

        this.state={
            fecha:""
        }

        this.handleGetDate = this.handleGetDate.bind(this);
    }

    handleGetDate(){

     let date = new Date();
     this.setState({
         fecha: date.getDate()
     });



    }

    render(){

      return(
          <div>{
        this.state.fecha}
        
        <input type="button" onClick={this.handleGetDate}/>
        </div>
      );

    }

}
export default Phrases;
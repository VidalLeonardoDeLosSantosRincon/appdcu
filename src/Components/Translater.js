import React,{Component} from 'react';


//assets
import './global/css/Translater.css';

class Translater extends Component{

    constructor(){
    super();
     
        this.state={
           text1: "",
           text2: ""
        };

     this.handleTranslate = this.handleTranslate.bind(this);
     this.setField = this.setField.bind(this);

    }

    setField (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
       }

  handleTranslate(){

      let text1 = this.state.text1;
      let idiom = document.getElementById('idioma').value;
  }
render(){

    return(
        <div>
            <div className="container">
            <h3>Traductor</h3>
                <form className="Formulario">
                
                    <input className="casilla" type="text" name="text1"  value={this.state.text1} onChange={this.setField}/>
                    <input className="casilla"  placeholder="Response in spanish"type="text" />
                    <div className="boxbtn">
                    <select id="idioma"className="btn2">
                        <option>English</option>
                        <option>Japanesse</option>
                        <option>German</option>
                    </select>
                    <input className="btn" type="button" value="Limpiar"/>
                    <input className="btn" type="button" value="Traducir" onClick={this.handleTranslate}/>
                    </div>
                </form>
            </div>
        </div>
    );

}

}

export default Translater;
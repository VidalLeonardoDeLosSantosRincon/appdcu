import React, {Component} from 'react';
import './global/css/Words.css';
import speech from 'speech-js';


class Words extends Component{

    constructor(){
        super();
       this.state={
           text1:""
       }


   this.handleClean = this.handleClean.bind(this);
   this.handlePlay = this.handlePlay.bind(this);
   this.setField = this.setField.bind(this);

    }

    setField (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
       }

handlePlay(){

    let text = this.state.text1;

speech.synthesis(text, 'es-ES') // speech synthesis module

const recognition = speech.recognition('es-ES') // speech recognition module
recognition.start()
recognition.onresult = e => {
  let result = e.results[0][0].transcript
  speech.synthesis(result, 'es-Es')
}

}

handleClean(){
    this.setState({
        text1:""
    });
}

render(){
    return(
       
        <div>
            <div className="container2">
            <h2>Pronunciación</h2>
                <form className="Formulario2">
                    <input className="casilla2" type="text" name="text1"  placeholder="Ingrese una palabra"
                    value={this.state.text1} onChange={this.setField}/>
                    
                    <div className="boxbtn2">
                   
                    <input className="btn_2" type="button" value="Limpiar" onClick={this.handleClean}/>
                    <input className="btn_2" type="button" value="Escuchar" onClick={this.handlePlay}/>
                    </div>
                </form>
            </div>
        </div> 
    );
}

}

export default Words;
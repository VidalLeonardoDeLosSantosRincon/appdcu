    //dependencies
    import React,{Component} from 'react';
    import {Link} from 'react-router-dom';

    //assets
    import './global/css/Home.css';
    import iconDictionary from './global/images/dic.png';
    import iconTranslate from './global/images/tra.jpg';
    import iconPronaun from './global/images/conversation.jpg';
    import iconGrammar from './global/images/grammar.jpg'
    import iconLetterSoup from './global/images/lettersoup.png';
    import iconGames from './global/images/games.jpg';
    import iconPhrases from './global/images/phrases.png';
    import iconConversation from './global/images/conversation.png'


    class Home extends Component{

        render(){

            return(
                <div>
        <div className="all-container">
        
        <div className="portada 1s" >
                
            </div>

            <div className="title">Actividades</div>
            
            <div className="flex-container">
        
        
                <Link to="/translater"><div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconTranslate} alt=""/>
                    </div>
                    <div className="titulo">
                            Traductor
                    </div>
                    
                </div></Link>
        
               <div className="flex-item">
        
                    <div className="caratula">
                        <img src={iconDictionary} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Diccionario
                    </div>
                    
                </div>
        
        
        
               <div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconPhrases} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Frases
                    </div>
                    
                </div>
        
        
        
                <div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconGrammar} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Gramatica
                    </div>
                    
                </div>
        
        
                <div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconLetterSoup} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Crucigramas
                    </div>
                    
                </div>
        
        
        
                <Link to="/words"><div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconPronaun} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Pronunciación
                    </div>
                    
                </div> </Link>
        
                <div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconGames} alt=""/>
                    </div>
        
                    <div className="titulo">
                            Juegos
                    </div>
                    
                </div>
        
        
                <div className="flex-item">
        
                    <div className="caratula">
                        
                        <img src={iconConversation} alt=""/>
                    </div>
        
                    <div className="titulo">
                          Conversasiones  
                    </div>
                    
                </div>
        
        
            </div>
        
            <div className="portada 2s" >
                
                </div>
        </div>
        </div>);

        }

    }
    export default Home;
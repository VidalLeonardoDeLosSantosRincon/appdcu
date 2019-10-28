//dependencies
import React,{Component} from 'react';
import propTypes from 'prop-types';

//assets
import './css/Content.css';

class Content extends Component{
    
    static propTypes ={
        body : propTypes.object.isRequired
    }
    
    render(){
        const body = this.props.body;
        return(
            <div>
                {body}
            </div>
        );

    }
}

export default Content;
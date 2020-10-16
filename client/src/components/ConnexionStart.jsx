import React from 'react';

class ConnexionStart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            connexion : false
        }
    }

    handleClickConnexion(e){
        e.preventDefault();
       
    }
        
    
    render(){
        return(
            <Button onClick={() =>{this.handleClickConnexion()}}>Button</Button>
        )
    }
}



export default ConnexionStart;
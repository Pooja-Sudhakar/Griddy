import React from 'react';

class Butttons extends React.Component{
    render(){
        return(
            <div className="fontf">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb" style={{width:'500px'}}>
             <li class="breadcrumb-item"><a href="#" style={{color:'black'}}>{this.props.name}</a></li>
        <li class="breadcrumb-item active" aria-current="page">{this.props.shit}</li>
            </ol>
            </nav>
            </div>

    );
    };
}
export default Butttons;
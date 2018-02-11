 import React from 'react';

 class Hello extends React.Component {
     render() {
         return <div> Hello {this.props.fname} {this.props.lname}! </div>
     }
 }


 export default Hello;
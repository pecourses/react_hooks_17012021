import React from 'react';
import MouseCoord from './../MouseCoord'
import Mouse from '../Mouse'
class MouseTracker extends React.Component{
  render(){
    return(
      <>
      <h1>Перемещайте курсор мышки!!!!</h1>
      <MouseCoord render={mouse => <Mouse mouse={mouse} />} />
      </>
    );
  }
}
export default MouseTracker;
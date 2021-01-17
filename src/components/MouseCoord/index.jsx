import React from 'react';
// eslint-disable-next-line no-undef
class MouseCoord extends Component{
  constructor(props){
    super(props);
    this.state = {x:0, y:0};
  }
  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render(){
    const {render} = this.props;
    return (
      <div
      onMouseMove={this.handleMouseMove}
      >
        {render(this.state)}
      </div>
    );
  }
}
export default MouseCoord;
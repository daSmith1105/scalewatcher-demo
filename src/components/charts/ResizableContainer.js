import React from 'react';
import { Resizable, ResizableBox } from 'react-resizable';
import './resizable.css';

export default class TestLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 200, height: 200
        };
    }

  onClick = () => {
    this.setState({width: 200, height: 200});
  };

  onResize = (event, {element, size, handle}) => {
    this.setState({width: size.width, height: size.height});
  };

  render() {
    return (
      <div>
           <Resizable className="box" height={this.state.height} width={this.state.width} onResize={this.onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
            { this.props.children }
            </div>
          </Resizable>
          {/* <ResizableBox className="box" width={this.state.width} height={this.state.height} lockAspectRatio={true}>
            { this.props.children }
          </ResizableBox> */}
      </div>
    );
  }
}
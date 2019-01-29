import React, { Component } from 'react';

import CAT from '../images/cat.png';
import MOUSE from '../images/mouse.png';

class Cat extends Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src={CAT} style={{
            position: 'absolute',
            left: mouse.x - 75,
            top: mouse.y - 50,
            height: 200,
            width: 300,
        }} />
      );
    }
  }

class MouseAnimal extends Component {
    render() {
        const mouse = this.props.mouse;
        return (
        <img src={MOUSE} style={{
            position: 'absolute',
            left: mouse.x - 75,
            top: mouse.y - 50,
            height: 200,
            width: 300,
        }} />
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = (event) => {
        this.setState({
        x: event.clientX,
        y: event.clientY
        });
    }

    render() {
      return (
        <div style={{ height: '100%', border: '1px solid black' }} onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
        </div>
      );
    }
}

class MouseTracker extends Component {
    state = {
        isCat: true,
    }

    toggleAnimal = () => this.setState(prevState => ({isCat: !prevState.isCat}));

    render() {
        const { isCat } = this.state;
        return (
        <div style={{ position: 'relative', height: '100%' }}>
            <h1>Move the mouse around! -> render prop</h1>
            <p>
                <a
                    href='https://reactjs.org/docs/render-props.html'
                    target='_blank'
                >Source</a> of the example and theory
            </p>
            <button onClick={this.toggleAnimal}>Toggle Animal</button>
            <Mouse render={mouse => (
                isCat
                ? <Cat mouse={mouse} />
                : <MouseAnimal mouse={mouse} />
            )}/>
        </div>
        );
    }
}

export default MouseTracker;

import React, { Component } from 'react';

class fifthPage extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focusTextInput = () => this.textInput.current.focus();

    render() {

        return (
            <div className="center-component">
                <p>
                    <a
                        href='https://reactjs.org/docs/refs-and-the-dom.html'
                        target='_blank'
                    >Source</a> of the example and theory
                </p>
                fifthPage
                <div style={{ marginBottom: '100px' }}>
                    <input
                        type="text"
                        ref={this.textInput}
                    />
                    <input
                        type="text"
                        value=" <- Focus the text input"
                        onClick={this.focusTextInput}
                        onChange={this.focusTextInput}
                    />
                </div>
                <div>
                    <span
                        aria-hidden
                        onClick={() => this.fileInput.click()}
                        style={{ cursor: 'pointer' }}
                    >
                        Add media
                    </span>

                    <input
                        type="file"
                        style={{width: '400px', marginLeft: '100px'}}
                        ref={(fileInput) => { this.fileInput = fileInput }}
                    />
                </div>
            </div>
        );
    };
};

export default fifthPage;

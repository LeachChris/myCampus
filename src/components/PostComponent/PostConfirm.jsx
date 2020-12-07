import React from 'react';

export default class PostConfirm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: true,
        }
    }

    toggleIsHidden () {
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden,
        }));
    }

    render () {
        return (
            <div>
                <button onClick= {() => this.toggleIsHidden()}> Submit </button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}
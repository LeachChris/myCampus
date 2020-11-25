import React from 'react';

export default class UniversityConfirm extends React.Component {
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
                <button onClick= {() => this.toggleIsHidden()}> Confirm </button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}
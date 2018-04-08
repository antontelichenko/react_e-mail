import React from 'react';

import messages from './messages.json';

var createReactClass = require('create-react-class');

const Message = createReactClass({
    getInitialState() {
        const { messageId } = this.props.params;

        return {
            message: messages.find(message => message.id === messageId)
        };
    },

    componentWillReceiveProps(nextProps) {
        const { messageId: prevId } = this.props.params;
        const { messageId: nextId } = nextProps.params;

        if (prevId !== nextId) {
            this.setState({
                message: messages.find(message => message.id === nextId)
            });
        }
    },

   render() {
        const { message } = this.state;

       return(
         <div className='Message'>
             <br/>
             <hr/>
             <p>{message.body}</p>
         </div>
       );
   }
});

export default Message;
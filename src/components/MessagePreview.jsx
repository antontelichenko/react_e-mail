import React from 'react';
import classNames from 'classnames';

var createReactClass = require('create-react-class');
const MessagePreview = createReactClass({
    render() {
        const{ title, senderName, selected, onClick } = this.props;

        const classes = classNames('MessagePreview', {selected});

        return (
            <div className={classes} onClick={onClick}>
                <br/>
                <div className='title'>{title}</div>
                <div className='from'>{`from ${senderName}`}</div>
            </div>
        );
    }
});

export default MessagePreview;
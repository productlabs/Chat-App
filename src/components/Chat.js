import React from 'react';
import GiftedChat from 'react-native-gifted-chat';
import Backend from '../Backend';

export default class Chat extends React.Component{
    state = {
        messages: [],
      };
    componentWillMount(){
        alert(this.props.name);
    }
    render(){
        return (
            <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        />
    );
    }

    componentDidMount() {
        Backend.loadMessages((message) => {
          this.setState((previousState) => {
            return {
              messages: GiftedChat.append(previousState.messages, message),
            };
          });
        });
      }
      componentWillUnmount() {
        Backend.closeChat();
      }
}

Chat.defaultProps = {
    username: 'John Doe'
};

/* Chat.propTypes = {
    name: React.PropTypes.string
}; */
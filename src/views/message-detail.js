import React, { Component } from 'react';

// export default class Message extends Component {
//   render() {
//     return <div></div>;
//   }
// }
const allMessages = [
  { id: 1, title: 'message1', content: 'xxxx' },
  { id: 2, title: 'message2', content: 'aaaa' },
  { id: 3, title: 'message3', content: 'bbbb' },
  { id: 4, title: 'message4', content: 'cccc' }
];
export default function MessageDetail(props) {
  const { id } = props.match.params;
  console.log(props);

  const message = allMessages.find(m => m.id === id * 1);
  console.log(message);
  return (
    <div>
      <ul>
        <li>ID:{message.id}</li>
        <li>Title:{message.title}</li>
        <li>Content:{message.content}</li>
      </ul>
    </div>
  );
}

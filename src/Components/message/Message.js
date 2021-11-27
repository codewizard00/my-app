import React from 'react'
import "./message.scss"
function Message() {
    return (
        <div>
<div class="chat">
  <div class="chat-title">
    <h1>Fabio Ottaviani</h1>
    <h2>Supah</h2>
    <figure class="avatar">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
  </div>
  <div class="messages">
    <div class="messages-content"></div>
  </div>
  <div class="message-box">
    <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
    <button type="submit" class="message-submit">Send</button>
  </div>

</div>
<div class="bg"></div>
        </div>
    )
}

export default Message

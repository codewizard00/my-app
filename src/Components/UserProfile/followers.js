import { Button } from '@mui/material'
import React from 'react'
import "./followers.css"

function Followers() {
    return (
            <div class="widget">
  <ol class="widget-list" id="managers">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>
        UserName <span>481 followers</span>
        {/* <Button size='small' variant='contained'>Follow</Button> */}
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>
        User Name #2 <span>5162 followers</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/47?f=y&amp;s=64&amp;d=identicon"/>
        User Name #3 <span>342 followers</span>
      </a>
    </li>
  </ol>

  <ol class="widget-list" id="designers">
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon"/>
        Username #1 <span>481 followers</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon"/>
        useName #2 <span>5162 followers</span>
      </a>
    </li>
    <li>
      <a class="widget-list-link">
        <img src="http://www.gravatar.com/avatar/5?f=y&amp;s=64&amp;d=identicon"/>
        Username #3 <span>342 followers</span>
      </a>
    </li>
  </ol>

  <ul class="widget-tabs">
    <li class="widget-tab">
      <a href="#managers" class="widget-tab-link">followers</a> </li>
    <li class="widget-tab">
      <a href="#designers" class="widget-tab-link">Followings</a></li>
  </ul>
</div>
    )
}

export default Followers

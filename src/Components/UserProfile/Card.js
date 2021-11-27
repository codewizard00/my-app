import React from 'react'
import './Card.css'

function Card({item}) {
    return (
        <div style={{marginLeft:"5%"}}>
            <div class="fb-cards-designs">
    <div class="fb-clone-card">
            <div class="fb-card-main-content">
                <div class="fb-card-header">
                    <div class="user-post-info">
                        <div class="user-thumb">
                            <img src="https://randomuser.me/api/portraits/women/46.jpg" class="img-responsive" />
                        </div>
                        <div class="user-information">
                            <p>{item.postedby.name}</p>
                            <small>1 hr</small>
                        </div>
                    </div>
                    <div class="post-action">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>

                <div class="fb-card-body simple-text-card simple-image-card">
                    <p>{item.title}</p>
                    <div class="images-container" style={{height:"300px",width:"500px"
                ,backgroundImage:`url(${item.photo})`,
                backgroundPosition:'center',
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover", 
                }}>
                        
                    </div>
                </div>

            </div>

            <div class="fb-card-like-comment-holder">
                <div class="fb-card-like-comment">
                    <div class="likes-emoji-holder">
                        <span>14 Likes</span>
                    </div>
                    <div class="like-comment-holder">
                        <span>10 Commnets</span>
                    </div>
                </div>
            </div>

            <div class="fb-card-actions-holder">
                <div class="fb-card-actions">
                    <div class="fb-btn-holder">
                        <a href="#"><i class="far fa-thumbs-up"></i> Like</a>
                    </div>
                    <div class="fb-btn-holder">
                        <a href="#"><i class="far fa-comment-alt"></i> Comment</a>
                    </div>
                    <div class="fb-btn-holder">
                        <a href="#"><i class="far fa-share-square"></i> Share</a>
                    </div>
                </div>
            </div>

            <div class="fb-card-comments">
                <div class="comment-input-holder">
                    <div class="user-thumb">
                        <img src="https://randomuser.me/api/portraits/women/85.jpg" class="img-responsive" />
                    </div>
                    <div class="comment-input">
                        <div class="comment-box" placeholder="Write a comment..." contenteditable="true" placeholder="write a comment"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* <div class="fb-cards-designs">
    <div class="fb-clone-card">
        <div class="fb-card-main-content">
            <div class="fb-card-header">
                <div class="user-post-info">
                    <div class="user-thumb">
                        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" class="img-responsive" />
                    </div>
                    <div class="user-information">
                        <p>Brad gibson</p>
                        <small>1 hr</small>
                    </div>
                </div>
                <div class="post-action">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>

            <div class="fb-card-body simple-text-card">
                <p>I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.</p>
            </div>

        </div>

        <div class="fb-card-like-comment-holder">
            <div class="fb-card-like-comment">
                
            </div>
        </div>

        <div class="fb-card-actions-holder">
            <div class="fb-card-actions">
                <div class="fb-btn-holder">
                    <a href="#"><i class="far fa-thumbs-up"></i> Like</a>
                </div>
                <div class="fb-btn-holder">
                    <a href="#"><i class="far fa-comment-alt"></i> Comment</a>
                </div>
                <div class="fb-btn-holder">
                    <a href="#"><i class="far fa-share-square"></i> Share</a>
                </div>
            </div>
        </div>

        <div class="fb-card-comments">
            <div class="comment-input-holder">
                <div class="user-thumb">
                    <img src="https://randomuser.me/api/portraits/women/85.jpg" class="img-responsive" />
                </div>
                <div class="comment-input">
                    <div class="comment-box" placeholder="Write a comment..." contenteditable="true" placeholder="write a comment"></div>
                </div>
            </div>
        </div>
    </div>
</div> */}
        </div>
    )
}

export default Card

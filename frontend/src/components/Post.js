import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

function Post({ post, currentUser }) {
    const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser?._id));
    const [likesCount, setLikesCount] = useState(post.likes.length);
    const [showComments, setShowComments] = useState(false);

    const handleLike = async () => {
        try {
            const response = await fetch(`/api/posts/${post._id}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            if (response.ok) {
                setIsLiked(!isLiked);
                setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
            }
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    return (
        <div className="post">
            <div className="post-header">
                <Link to={`/profile/${post.author.username}`}>
                    <img 
                        src={post.author.profilePicture || '/default-avatar.png'} 
                        alt={post.author.username}
                        className="avatar"
                    />
                    <span className="username">{post.author.username}</span>
                </Link>
                {post.author.isTherapist && (
                    <span className="therapist-badge">Verified Therapist</span>
                )}
                <span className="timestamp">
                    {formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}
                </span>
            </div>

            <div className="post-content">
                <p>{post.content}</p>
                {post.image && (
                    <img src={post.image} alt="Post attachment" className="post-image" />
                )}
                {post.moodTag && (
                    <span className={`mood-tag ${post.moodTag}`}>
                        #{post.moodTag}
                    </span>
                )}
            </div>

            <div className="post-actions">
                <button 
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={handleLike}
                >
                    ❤️ {likesCount}
                </button>
                <button 
                    className="comment-button"
                    onClick={() => setShowComments(!showComments)}
                >
                    💭 {post.comments.length}
                </button>
            </div>

            {showComments && (
                <div className="comments-section">
                    {post.comments.map(comment => (
                        <div key={comment._id} className="comment">
                            <Link to={`/profile/${comment.user.username}`}>
                                <span className="comment-author">{comment.user.username}</span>
                            </Link>
                            <p className="comment-content">{comment.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Post;

import React from 'react';

import commentIcon from '@/assets/comment.png';
import likeIcon from '@/assets/like-icon.png';
import shareIcon from '@/assets/share-icon.png';

import '../assets/styles/feed.page.css';

interface PostCardProps {
    author: string;
    avatarUrl?: string;
    timestamp: string;
    emoji: string;
    content: string;
    isAuthenticated: boolean;
    onUnauthenticatedInteraction: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ author, avatarUrl, timestamp, emoji, content, isAuthenticated, onUnauthenticatedInteraction }) => {
    const handleInteraction = () => {
        if (!isAuthenticated) {
            onUnauthenticatedInteraction();
        }
    };

    const handleFunctionNotImplemented = () => {
        if (!isAuthenticated && onUnauthenticatedInteraction) {
            onUnauthenticatedInteraction();
        } else {
            alert('function not implemented');
        }
    };

    return (
        <div className="post-card-container" onClick={handleInteraction}>
            <article className="post-card">
                <div className="post-header">
                    <div className="post-author">
                        {avatarUrl ? (
                            <img src={avatarUrl} alt={author} className="author-avatar" />
                        ) : (
                            <div className="author-avatar">{author.charAt(0).toUpperCase()}</div>
                        )}
                        <div className="author-info">
                            <h3 className="author-name">{author}</h3>
                            <span className="post-timestamp">{timestamp}</span>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    <div className="post-content-row">
                        <p className="post-emoji">{emoji}</p>
                    </div>
                    <p className="post-description">{content}</p>
                </div>
            </article>
            <div className="post-actions">
                <button className="action-btn" onClick={handleFunctionNotImplemented}>
                    <img className="action-btn-icon" src={likeIcon} alt="like" />
                </button>
                <button className="action-btn" onClick={handleFunctionNotImplemented}>
                    <img className="action-btn-icon" src={commentIcon} alt="comment" />
                </button>
                <button className="action-btn" onClick={handleFunctionNotImplemented}>
                    <img className="action-btn-icon" src={shareIcon} alt="share" />
                </button>
            </div>
        </div>
    );
};

export default PostCard;

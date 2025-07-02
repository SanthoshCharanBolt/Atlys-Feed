import React from 'react';

import PostCard from './PostCard';

import '../assets/styles/feed.page.css';

interface Post {
    id: string;
    author: string;
    avatarUrl?: string;
    timestamp: string;
    emoji: string;
    content: string;
}

interface PostListProps {
    posts: Post[];
    isAuthenticated: boolean;
    onUnauthenticatedInteraction: () => void;
}

const PostList: React.FC<PostListProps> = ({ posts, isAuthenticated, onUnauthenticatedInteraction }) => (
    <div className="posts-container">
        {posts.map((post) => (
            <PostCard
                key={post.id}
                author={post.author}
                avatarUrl={post.avatarUrl}
                timestamp={post.timestamp}
                emoji={post.emoji}
                content={post.content}
                isAuthenticated={isAuthenticated}
                onUnauthenticatedInteraction={onUnauthenticatedInteraction}
            />
        ))}
    </div>
);

export default PostList;

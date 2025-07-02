import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import PostEditor from '../components/PostEditor';
import PostList from '../components/PostList';
import SignInModal from '../components/SignInModal';
import SignUpModal from '../components/SignUpModal';
import { useAuth } from '../hooks/useAuth';

import '../assets/styles/feed.page.css';

interface Post {
    id: string;
    content: string;
    author: string;
    timestamp: string;
    emoji: string;
    avatarUrl?: string;
}

const FeedPage: React.FC = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const [posts, setPosts] = useState<Post[]>([
        {
            id: '1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Theresa Webb',
            timestamp: '5 mins ago',
            emoji: '🥴',
            avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            id: '2',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'John Doe',
            timestamp: '5 mins ago',
            emoji: '🤞',
            avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: '3',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Jane Doe',
            timestamp: '5 mins ago',
            emoji: '💀',
            avatarUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
        },
    ]);

    const [newPostContent, setNewPostContent] = useState('');
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handlePublishPost = () => {
        if (!isAuthenticated) {
            return;
        }
        if (newPostContent.trim()) {
            const newPost: Post = {
                id: Date.now().toString(),
                content: newPostContent,
                author: user?.name || 'Current User',
                timestamp: 'Just now',
                emoji: '😊',
            };
            setPosts([newPost, ...posts]);
            setNewPostContent('');
        }
    };

    const handleLogin = () => {
        setShowSignInModal(true);
    };

    const handleLogout = () => {
        logout();
    };

    const handleCloseSignInModal = () => {
        setShowSignInModal(false);
    };

    const handleCloseSignUpModal = () => {
        setShowSignUpModal(false);
    };

    const handleSwitchToSignUp = () => {
        setShowSignInModal(false);
        setShowSignUpModal(true);
    };

    const handleSwitchToSignIn = () => {
        setShowSignUpModal(false);
        setShowSignInModal(true);
    };

    const handleUnauthenticatedInteraction = () => {
        if (!isAuthenticated) {
            setShowSignInModal(true);
        }
    };

    // Control scroll behavior based on authentication status
    useEffect(() => {
        if (!isAuthenticated) {
            document.body.classList.add('no-scroll');
            // Prevent scroll on touch devices
            document.body.style.touchAction = 'none';
        } else {
            document.body.classList.remove('no-scroll');
            document.body.style.touchAction = '';
        }

        // Cleanup function to remove the class when component unmounts
        return () => {
            document.body.classList.remove('no-scroll');
            document.body.style.touchAction = '';
        };
    }, [isAuthenticated]);

    return (
        <div className="feed-root">
            <Header isAuthenticated={isAuthenticated} onLogin={handleLogin} onLogout={handleLogout} />
            <main className="feed-main">
                <PostEditor
                    value={newPostContent}
                    onChange={setNewPostContent}
                    onPublish={handlePublishPost}
                    disabled={!isAuthenticated}
                    onUnauthenticatedInteraction={handleUnauthenticatedInteraction}
                />
                <PostList posts={posts} isAuthenticated={isAuthenticated} onUnauthenticatedInteraction={handleUnauthenticatedInteraction} />
            </main>

            <SignInModal open={showSignInModal} onClose={handleCloseSignInModal} onSwitchToSignUp={handleSwitchToSignUp} />
            <SignUpModal open={showSignUpModal} onClose={handleCloseSignUpModal} onSwitchToSignIn={handleSwitchToSignIn} />
        </div>
    );
};

export default FeedPage;

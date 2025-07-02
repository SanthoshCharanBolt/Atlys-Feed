import codeIcon from '@/assets/code-icon.svg';
import italicFontIcon from '@/assets/italic-font-icon.svg';
import microphoneIcon from '@/assets/microphone-icon.svg';
import orderedListIcon from '@/assets/ordered-list-icon.svg';
import plusIcon from '@/assets/plus-icon.png';
import quotesIcon from '@/assets/quotes-icon.svg';
import sendIcon from '@/assets/send-icon.svg';
import smileyIcon from '@/assets/smiley-icon.svg';
import trashIcon from '@/assets/trash-icon.svg';
import underlineIcon from '@/assets/underline-icon.svg';
import unorderedListIcon from '@/assets/unordered-list-icon.svg';
import videoIcon from '@/assets/video-icon.svg';

import '../assets/styles/feed.page.css';

interface PostEditorProps {
    value: string;
    onChange: (v: string) => void;
    onPublish: () => void;
    disabled?: boolean;
    onUnauthenticatedInteraction?: () => void;
}

export default function PostEditor({ value, onChange, onPublish, disabled, onUnauthenticatedInteraction }: PostEditorProps) {
    const handleInteraction = () => {
        if (disabled && onUnauthenticatedInteraction) {
            onUnauthenticatedInteraction();
        }
    };

    const handleFunctionNotImplemented = () => {
        if (disabled && onUnauthenticatedInteraction) {
            onUnauthenticatedInteraction();
        } else {
            alert('function not implemented');
        }
    };

    return (
        <div className="post-editor-container">
            <div className="post-editor" onClick={handleInteraction}>
                <div className="post-editor-header">
                    <div className="post-editor-header-left">
                        <div>
                            <div className="post-editor-left-item">
                                <select className="post-editor-left-item-select" onChange={handleFunctionNotImplemented}>
                                    <option>Paragraph</option>
                                </select>
                            </div>
                            <div className="post-editor-left-item">
                                <button className="post-editor-left-item-button" onClick={handleFunctionNotImplemented}>
                                    <b>B</b>
                                </button>
                            </div>

                            <div className="post-editor-left-item">
                                <button className="post-editor-left-item-button-italic" onClick={handleFunctionNotImplemented}>
                                    <img src={italicFontIcon} alt="italic" />
                                </button>
                            </div>
                            <div className="post-editor-left-item">
                                <button className="post-editor-left-item-button-underline" onClick={handleFunctionNotImplemented}>
                                    <img src={underlineIcon} alt="underline" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <button className="post-editor-left-item-button-unordered-list" onClick={handleFunctionNotImplemented}>
                                <img src={unorderedListIcon} alt="unordered list" />
                            </button>
                            <button className="post-editor-left-item-button-ordered-list" onClick={handleFunctionNotImplemented}>
                                <img src={orderedListIcon} alt="ordered list" />
                            </button>
                        </div>
                        <div>
                            <button className="post-editor-left-item-button-quotes" onClick={handleFunctionNotImplemented}>
                                <img src={quotesIcon} alt="quotes" />
                            </button>
                            <button className="post-editor-left-item-button-code" onClick={handleFunctionNotImplemented}>
                                <img src={codeIcon} alt="code" />
                            </button>
                        </div>
                    </div>

                    <div className="post-editor-header-right">
                        <button className="post-editor-header-right-button" onClick={handleFunctionNotImplemented}>
                            <img src={trashIcon} alt="trash" />
                        </button>
                    </div>
                </div>
                <div className="post-editor-content">
                    <div className="post-editor-content-left">
                        <img src={smileyIcon} alt="smiley" />
                    </div>
                    <div className="post-editor-content-right">
                        <textarea
                            className="post-editor-content-textarea"
                            placeholder="How are you feeling today?"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleInteraction();
                            }}
                        />
                    </div>
                </div>
                <div className="post-editor-footer">
                    <div className="post-editor-footer-left">
                        <button className="post-editor-footer-button" onClick={handleFunctionNotImplemented}>
                            <img src={plusIcon} alt="plus" />
                        </button>
                        <button className="post-editor-footer-button-microphone" onClick={handleFunctionNotImplemented}>
                            <img src={microphoneIcon} alt="microphone" />
                        </button>
                        <button className="post-editor-footer-button-video" onClick={handleFunctionNotImplemented}>
                            <img src={videoIcon} alt="video" />
                        </button>
                    </div>
                    <div className="post-editor-footer-right">
                        <button
                            className="post-editor-footer-button-send"
                            onClick={() => {
                                if (disabled && onUnauthenticatedInteraction) {
                                    onUnauthenticatedInteraction();
                                } else {
                                    onPublish();
                                }
                            }}
                        >
                            <img src={sendIcon} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const History = ({ setHistoryWord }) => {
    const historyList = useSelector((state) => state.history);
    const navigate = useNavigate();

    const handleWordClick = (word) => {
        setHistoryWord(word);
        navigate(`/word/${word}`);
    };

    return (
        <div>
            <h2 className='word'>Search History</h2>
            {
                historyList.length === 0 && <p className='blank'>No History Found</p>
            }
            <ul>
                {historyList.map((word, index) => (
                    <li key={index} onClick={() => handleWordClick(word)}>
                        {word}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
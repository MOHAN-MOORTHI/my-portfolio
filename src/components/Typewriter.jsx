import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay = 50, startDelay = 0 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, startDelay);
        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    useEffect(() => {
        if (started && currentIndex < text.length) {
            // Humanize: Add randomness to the delay
            const baseDelay = Number(delay) || 50;
            const randomVariance = Math.random() * 50;
            const timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, baseDelay + randomVariance);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text, started]);

    // Cursor blinking effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span>
            {currentText}
            <span style={{ opacity: showCursor ? 1 : 0 }} className="text-[#915EFF] ml-1">|</span>
        </span>
    );
};

export default Typewriter;

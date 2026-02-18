'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
    words,
}: {
    words: {
        text: string;
        className?: string;
    }[];
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const word = words[currentWordIndex].text;
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(word.substring(0, currentText.length + 1));
            } else {
                setCurrentText(word.substring(0, currentText.length - 1));
            }

            if (!isDeleting && currentText === word) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className={words[currentWordIndex].className}>
            {currentText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
            />
        </span>
    );
};

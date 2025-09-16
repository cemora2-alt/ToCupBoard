import React from 'react';

interface CodeBlockProps {
    children: React.ReactNode;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg my-4 relative">
            {language && (
                 <span className="absolute top-2 right-3 text-xs text-gray-500 dark:text-gray-400 font-sans">{language}</span>
            )}
            <pre className="p-4 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                <code className="font-mono">
                    {children}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;

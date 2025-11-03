import React, { useState } from 'react';
import { AIIcon, CloseIcon } from './icons';
import { GoogleGenAI } from "@google/genai";

const FloatingAIButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleToggle = () => {
        setIsOpen(!isOpen);
        setResponse('');
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim() || isLoading) return;

        setIsLoading(true);
        setResponse('');
        setError('');

        try {
            if (!process.env.API_KEY) {
                throw new Error("API_KEY environment variable not set.");
            }
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const result = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: `You are a helpful assistant for a tech consultancy called Stellar Solutions. Answer the following question about our services: ${prompt}`,
            });
            setResponse(result.text);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <button
                onClick={handleToggle}
                className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg hover:bg-indigo-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-color)] focus:ring-indigo-500 z-[1000]"
                aria-label="Toggle AI Assistant"
            >
                {isOpen ? <CloseIcon className="h-8 w-8" /> : <AIIcon className="h-8 w-8" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-[var(--card-color)] rounded-2xl shadow-2xl border border-[var(--border-color)] flex flex-col z-[999] animate-fade-in-up">
                    <header className="p-4 border-b border-[var(--border-color)]">
                        <h3 className="font-bold text-lg text-[var(--text-color)] text-center">Stellar AI Assistant</h3>
                    </header>
                    <div className="flex-grow p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {!response && !isLoading && !error && (
                                <div className="text-center p-4">
                                    <AIIcon className="h-12 w-12 mx-auto text-indigo-400 mb-4" />
                                    <p className="text-[var(--text-muted)]">Ask me anything about Stellar Solutions' services, technologies, or processes!</p>
                                </div>
                            )}
                            {isLoading && <p className="text-[var(--text-muted)]">Thinking...</p>}
                            {error && <p className="text-red-400">Error: {error}</p>}
                            {response && <div className="prose prose-invert text-[var(--text-color)]" dangerouslySetInnerHTML={{ __html: response.replace(/\n/g, '<br />') }} />}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--border-color)]">
                        <div className="relative">
                            <input
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g., What cloud platforms do you use?"
                                className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                                disabled={isLoading}
                            />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400" disabled={isLoading || !prompt.trim()}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default FloatingAIButton;

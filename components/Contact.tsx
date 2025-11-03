import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        if (name && email && message) {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            setStatus('error');
        }
    };

    return (
        <div className="p-8">
            <p className="text-lg text-[var(--text-muted)] mb-8 text-center">
                Have a project in mind or just want to say hello? Fill out the form below and we'll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-[var(--card-color)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-[var(--card-color)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-muted)] mb-2">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full bg-[var(--card-color)] border border-[var(--border-color)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                        placeholder="Tell us about your project..."
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                {status === 'success' && (
                    <p className="text-green-400 text-center">Thank you! Your message has been sent successfully.</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    );
};

export default Contact;

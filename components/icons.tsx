import React from 'react';

// General Icons
export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

export const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// Theme Toggle Icons
export const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

export const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

// Process Icons
export const DiscoveryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>
);
export const DesignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>
);
export const DeployIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.871A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5M15 3h6m0 0v6m0-6L9 15" /></svg>
);
export const SupportIconContinuous: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.182-3.182m0-4.991v4.99" /></svg>
);

// WhyChooseUs Graphics (simplified)
export const WhyChooseUsGraphic1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--indigo-500)" /><stop offset="100%" stopColor="var(--indigo-700)" /></linearGradient></defs>
    <rect x="10" y="30" width="80" height="50" rx="5" fill="url(#g1)" opacity="0.2"/>
    <rect x="15" y="20" width="70" height="60" rx="5" fill="url(#g1)" opacity="0.5"/>
    <rect x="20" y="10" width="60" height="80" rx="5" fill="url(#g1)" />
    <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const WhyChooseUsGraphic2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs><linearGradient id="g2" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="var(--indigo-500)" /><stop offset="100%" stopColor="var(--indigo-700)" /></linearGradient></defs>
    <circle cx="30" cy="30" r="10" fill="url(#g2)" />
    <circle cx="70" cy="70" r="15" fill="url(#g2)" />
    <path d="M38 38 L62 62" stroke="var(--border-color)" strokeWidth="3" />
    <path d="M25 50 H75" stroke="var(--border-color)" strokeWidth="3" strokeDasharray="5 5" />
    <circle cx="50" cy="50" r="25" stroke="var(--indigo-500)" strokeWidth="2" fill="none" opacity="0.5" />
  </svg>
);

// Services Icons
export const DataAnalyticsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18h18M3.75 18.75h16.5M5.25 12.75h4.5m-4.5 3.75h4.5M12.75 8.25h4.5m-4.5 3.75h4.5m-4.5 3.75h4.5M12.75 3v15.75" /></svg>);
export const MachineLearningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M21 15.75h-1.5M12 5.25A2.25 2.25 0 009.75 3H8.25A2.25 2.25 0 006 5.25v1.5A2.25 2.25 0 008.25 9h1.5A2.25 2.25 0 0012 6.75v-1.5zM12 18.75a2.25 2.25 0 00-2.25 2.25H8.25a2.25 2.25 0 00-2.25-2.25v-1.5A2.25 2.25 0 008.25 15h1.5a2.25 2.25 0 002.25 2.25v1.5zM18.75 12a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25 2.25v1.5A2.25 2.25 0 0015 15.75h1.5a2.25 2.25 0 002.25-2.25v-1.5z" /></svg>);
export const CloudSolutionsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-9.663 2.131c-.34.22-.65.474-.92.777A4.5 4.5 0 002.25 15z" /></svg>);
export const AISolutionsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M21 15.75h-1.5m-3.95-8.906l.707.707M15.75 3l.707.707M3.75 15.75l.707.707m11.293-11.293l.707.707" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 15a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V15.75a.75.75 0 01.75-.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 11.25a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" /></svg>);
export const ConsultingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.51.056 1.02.083 1.53.083a9.086 9.086 0 005.457-1.428M9 12.75a9.086 9.086 0 01-5.457-1.428m9 0a9.095 9.095 0 00-3.742-.479m-7.5 2.962c-.511-.056-1.022-.083-1.531-.083a9.086 9.086 0 01-5.457 1.428m9 0A9.095 9.095 0 013 18.72m18 0v-7.5a9 9 0 00-18 0v7.5m18 0a9 9 0 01-18 0m18 0A9 9 0 003 9.75M12 6.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5z" /></svg>);
export const DevIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>);

// Technology Icons
export const PythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 8H12C10.3431 8 9 9.34315 9 11V12C9 13.6569 10.3431 15 12 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8V6M12 15V17M12 11.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const TensorFlowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 7L12 12M21 7L12 12M12 22V12M12 12L7.5 9.5M12 12L16.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const PyTorchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6" stroke="currentColor" strokeWidth="2"/><path d="M12 6C10.3431 6 9 4.65685 9 3C9 1.34315 10.3431 0 12 0C13.6569 0 15 1.34315 15 3C15 4.65685 13.6569 6 12 6Z" fill="currentColor"/><path d="M12 18V24" stroke="currentColor" strokeWidth="2"/><path d="M9 21H15" stroke="currentColor" strokeWidth="2"/></svg>);
export const KubernetesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L3 7L12 2L21 7L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17L12 12L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const DockerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" /><path d="M7 12H17" stroke="currentColor" strokeWidth="2" /><path d="M7 15H14" stroke="currentColor" strokeWidth="2" /><path d="M7 9H15" stroke="currentColor" strokeWidth="2" /></svg>);
export const AWSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M6 18L18 6M6 6L12 12L6 18M18 18L12 12L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const GCPIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2"/><path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2"/></svg>);
export const AzureIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 17L12 22L21 17L12 12L3 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const ReactIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/><ellipse cx="12" cy="12" rx="5" ry="10" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="5" ry="10" stroke="currentColor" strokeWidth="2" transform="rotate(-60 12 12)"/></svg>);
export const NextJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 8L8 16M8 8L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const NodeJSIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12L17 9.5M12 12L7 9.5M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
export const TypescriptIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V16M12 8H16V12H12V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

// Other Icons
export const AIIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
);

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9 3 3 0 013-3h1.5a1.5 1.5 0 000-3H6a3 3 0 01-3 3 9 9 0 0118 0 3 3 0 01-3 3h-1.5a1.5 1.5 0 000 3H18a3 3 0 013-3 9 9 0 01-9 9z"/>
  </svg>
);

// Social Media Icons
export const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.82c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>);
export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71-.02-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.14.15-.28 0-.55-.03-.81-.08.55 1.7 2.14 2.94 4.03 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.21 4.16 1.92 6.56 1.92 7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>);
export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11 6H5v7h3V9zm-1.5-2.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 2.5h-2.8c-.3 0-.5.2-.5.5v5.5h-3V9h3v1.3c.5-.8 1.4-1.3 2.3-1.3.8 0 1.5.3 2 1v6h-3V12c0-.5-.2-1-1-1s-1 .5-1 1v3.5h.3z" /></svg>);

// Client Logo Placeholders
export const Logoipsum1: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 1" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.36 19.32V5.22h3.28v11.78h5.18v2.32H6.36zm19.34 0V5.22h3.28v14.1h-3.28zm10.22-14.1c1.9 0 3.43.53 4.6 1.6 1.17 1.06 1.76 2.4 1.76 4.02s-.59 2.96-1.76 4.02c-1.17 1.07-2.7 1.6-4.6 1.6h-4.44V5.22h4.44zm0 2.32h-1.9v9.46h1.9c1.03 0 1.87-.27 2.52-.82.65-.55.98-1.3.98-2.26s-.33-1.7-.98-2.25c-.65-.55-1.49-.83-2.52-.83zm13.14 11.78V5.22h3.28v14.1h-3.28zm14.36 0L58.24 5.22h3.64l3.12 11.2 3.12-11.2h3.64L66.58 19.32h-3.44zm14.88-14.1c1.9 0 3.43.53 4.6 1.6 1.17 1.06 1.76 2.4 1.76 4.02s-.59 2.96-1.76 4.02c-1.17 1.07-2.7 1.6-4.6 1.6H79V5.22h4.44zm0 2.32h-1.9v9.46h1.9c1.03 0 1.87-.27 2.52-.82.65-.55.98-1.3.98-2.26s-.33-1.7-.98-2.25c-.65-.55-1.49-.83-2.52-.83zm18.3 11.78V5.22h3.28v11.78h5.18v2.32h-8.46zM113.14 5.22l-4.4 14.1h-3.44l-4.4-14.1h3.64l2.6 9.38 2.6-9.38h3.4z" fill="currentColor"/>
  </svg>
);
export const Logoipsum2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 2" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.9 13.9a5.3 5.3 0 0 0-4.1-2.1H5v6h2.8a5.2 5.2 0 0 0 4.1-2v-.9zm-1.6 1.5a2.7 2.7 0 0 1-2.5 1.4H7.5v-5h1.3a2.7 2.7 0 0 1 2.5 1.5 2.5 2.5 0 0 1 0 2.1zM24.7 17.8h-1.8l-1.5-3.1h-3.8l-1.5 3.1h-1.8l4.2-8.5h1.9l4.1 8.5zm-2.8-2.4l-1.9-4-1.9 4h3.8zM39 12.3c0-2.2-1.6-3-4.1-3h-3.2v8.5h1.6v-3.4h1.2l2.4 3.4h1.9l-2.6-3.7a4.2 4.2 0 0 1 2.8-.8v0zm-4-1.4c1.6 0 2.5.4 2.5 1.4s-1 1.4-2.5 1.4h-1.6v-2.8h1.6zM50.4 17.8h-1.6v-7.1l-3.3 8.3h-.8l-3.3-8.3v7.1h-1.6V9.3h2.3l2.8 7 2.8-7h2.3v8.5zM63.8 9.3h1.6v8.5h-1.6V9.3zm.8 4.2a.8.8 0 0 0-.8-.8.8.8 0 0 0-.8.8.8.8 0 0 0 .8.8.8.8 0 0 0 .8-.8zM76 12.3c0-2.2-1.6-3-4.1-3h-3.2v8.5h1.6v-3.4h1.2l2.4 3.4h1.9l-2.6-3.7a4.2 4.2 0 0 1 2.8-.8v0zm-4-1.4c1.6 0 2.5.4 2.5 1.4s-1 1.4-2.5 1.4h-1.6v-2.8h1.6zM88 17.8l-4.2-8.5h1.9l3.3 6.9 3.3-6.9h1.9l-4.2 8.5h-1.9zM103.1 9.3h-4.3v8.5h1.6v-3.7h2.7c2 0 3.2-1 3.2-2.4s-1.3-2.4-3.2-2.4zm0 3.3h-2.7v-1.9h2.7c.9 0 1.5.4 1.5 1s-.6.9-1.5.9zM113.8 17.8h-1.8l-1.5-3.1h-3.8l-1.5 3.1h-1.8l4.2-8.5h1.9l4.1 8.5zm-2.8-2.4l-1.9-4-1.9 4h3.8z" fill="currentColor"/>
  </svg>
);
export const Logoipsum3: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 3" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.4 17.2h-1.3V8.8h-3V7.7h7.2v1.1h-3v8.4zM24.1 17.4c-2.4 0-4.1-1.6-4.1-4.1s1.7-4.1 4.1-4.1 4.1 1.6 4.1 4.1-1.7 4.1-4.1 4.1zm0-1.1c1.7 0 2.9-1.2 2.9-3s-1.2-3-2.9-3-2.9 1.2-2.9 3 1.2 3 2.9 3zM37.9 17.2h-1.2l-3.2-4.1v4.1h-1.1V7.7h1.1v4.1l3.2-4.1h1.2l-3.5 4.3 3.5 5.2zM48 17.2h-4.3V7.7h4.2v1.1h-3.1v3.2h3v1h-3v3.2h3.1v1zM59.4 17.4c-2.4 0-4.1-1.6-4.1-4.1s1.7-4.1 4.1-4.1 4.1 1.6 4.1 4.1-1.7 4.1-4.1 4.1zm0-1.1c1.7 0 2.9-1.2 2.9-3s-1.2-3-2.9-3-2.9 1.2-2.9 3 1.2 3 2.9 3zM70.9 17.2h-1.1v-5.9l-2.4 5.9h-.8l-2.4-5.9v5.9h-1.1V7.7h1.6l2.1 5.3 2.1-5.3h1.6v9.5zM81.5 17.2h-1.1V8.8h-3V7.7h7.2v1.1h-3v8.4zM90.8 17.2h-1.1V7.7h1.1v9.5zm.5-4.8c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7zM100.2 17.2l-2.7-9.5h1.2l2.2 7.9 2.2-7.9h1.2l-2.7 9.5h-1.4zM113 17.4c-2.4 0-4.1-1.6-4.1-4.1s1.7-4.1 4.1-4.1 4.1 1.6 4.1 4.1-1.7 4.1-4.1 4.1zm0-1.1c1.7 0 2.9-1.2 2.9-3s-1.2-3-2.9-3-2.9 1.2-2.9 3 1.2 3 2.9 3z" fill="currentColor"/>
  </svg>
);
export const Logoipsum4: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 4" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4.9 19.5h1.1l3.5-9.4h.1l3.5 9.4h1.1L9.6 6h-1zM23.1 19.3c-2.9 0-4.8-1.7-4.8-4.7s1.9-4.7 4.8-4.7c1.3 0 2.4.4 3.2 1.2l-.7.8a3.1 3.1 0 0 0-2.5-.9c-2.2 0-3.6 1.4-3.6 3.6s1.4 3.6 3.6 3.6a3.1 3.1 0 0 0 2.5-.9l.7.8c-.8.8-1.9 1.2-3.2 1.2zM36.1 19.5v-8h-2.1v-1h5.3v1h-2.1v8h-1.1zM44.9 19.5V10h-1.1v9.5h1.1zm.5-4.8c0 .4-.3.7-.7.7s-.7-.3-.7-.7.3-.7.7-.7.7.3.7.7zM57.6 19.5l-3.6-13.5h1.2l3 12.1 3-12.1h1.2l-3.6 13.5h-1.2zM73.5 19.3c-1.3 0-2.4-.4-3.2-1.2l.7-.8a3.1 3.1 0 0 1 2.5.9c2.2 0 3.6-1.4 3.6-3.6s-1.4-3.6-3.6-3.6a3.1 3.1 0 0 0-2.5.9l-.7-.8c.8-.8 1.9-1.2 3.2-1.2 2.9 0 4.8 1.7 4.8 4.7s-1.9 4.7-4.8 4.7zM87.7 19.5l-2.4-5.3h-1.3v5.3h-1.1V6h3.4c2.2 0 3.6 1.1 3.6 3.1 0 1.5-.8 2.5-2.1 2.9l2.7 7.5h-1.2zm-3.7-6.3h2.5c1.5 0 2.4-.7 2.4-2s-.9-2-2.4-2h-2.5v4zM102.7 19.3c-2.9 0-4.8-1.7-4.8-4.7s1.9-4.7 4.8-4.7 4.8 1.7 4.8 4.7-1.9 4.7-4.8 4.7zm0-1.1c2.2 0 3.6-1.3 3.6-3.6s-1.4-3.6-3.6-3.6-3.6 1.3-3.6 3.6 1.4 3.6 3.6 3.6zM116.1 19.5V6h1.1v13.5h-1.1z" fill="currentColor"/>
  </svg>
);
export const Logoipsum5: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 5" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.9 14.2c0 2.9-2.2 4.6-5.4 4.6-3.1 0-5.4-1.7-5.4-4.6V5.8h1.8v8.4c0 2.1 1.6 3.3 3.6 3.3s3.6-1.2 3.6-3.3V5.8h1.8v8.4zM26.2 18.8h-1.9L20.5 5.8h1.9l2.9 10.9L28.2 5.8h1.9l-3.8 13zM40.2 18.8h-1.8V5.8h1.8v13zM49.6 18.8h-5.2V5.8h5.1v1.7h-3.3v4.1h3.1v1.6h-3.1v4.6h3.4v1.7zM61.8 18.6c-2.7 0-4.6-1.7-4.6-4.5s1.9-4.5 4.6-4.5c1.3 0 2.4.4 3.2 1.2l-1.2 1a2.6 2.6 0 0 0-2-.7c-1.9 0-3 1.2-3 2.9s1.1 2.9 3 2.9a2.6 2.6 0 0 0 2-.7l1.2 1c-.8.8-1.9 1.2-3.2 1.2zM75.1 18.8l-2.4-5.3h-1.3v5.3h-1.8V5.8h3.5c2.2 0 3.6 1.1 3.6 3.1 0 1.5-.8 2.5-2.1 2.9l2.7 7.5h-2zM71.4 12.5h2.5c1.5 0 2.4-.7 2.4-2s-.9-2-2.4-2h-2.5v4zM90.8 18.8h-1.8V7.5h-3.2V5.8h8.2v1.7h-3.2v11.3zM100.9 18.8h-1.8l-1.5-3.1h-3.8l-1.5 3.1h-1.9l4.2-13h1.9l4.1 13zm-2.8-4.7l-1.9-4-1.9 4h3.8zM113.8 18.8l-3.8-13h1.9l2.9 10.9L117.7 5.8h1.9l-3.8 13z" fill="currentColor"/>
  </svg>
);
export const Logoipsum6: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg role="img" aria-label="Client Logo 6" viewBox="0 0 120 25" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.9 16.5c-3.5 0-5.7-2.3-5.7-6s2.2-6 5.7-6c3.5 0 5.7 2.3 5.7 6s-2.2 6-5.7 6zm0-1.6c2.6 0 4.1-1.7 4.1-4.4s-1.5-4.4-4.1-4.4-4.1 1.7-4.1 4.4 1.5 4.4 4.1 4.4zM29.5 16.5h-1.6V6.1h-4.4V4.5h10.4v1.6h-4.4v10.4zM42.2 16.5h-1.6l-4.4-5.5v5.5h-1.6V4.5h1.6v5.5l4.4-5.5h1.6l-4.7 5.7 4.7 6.3zM57.1 16.5h-6.2V4.5h6.1v1.6h-4.5v3.4h4.3v1.6h-4.3v3.8h4.6v1.6zM71 16.5c-3.5 0-5.7-2.3-5.7-6s2.2-6 5.7-6c3.5 0 5.7 2.3 5.7 6s-2.2 6-5.7 6zm0-1.6c2.6 0 4.1-1.7 4.1-4.4s-1.5-4.4-4.1-4.4-4.1 1.7-4.1 4.4 1.5 4.4 4.1 4.4zM85.4 16.3l-1.6-2.1c-1.1.8-2.3 1.2-3.8 1.2-2.6 0-4.1-1.6-4.1-4.2s1.5-4.2 4.1-4.2c1.5 0 2.7.4 3.8 1.2l1.6-2.1c-1.5-1.1-3.3-1.6-5.4-1.6-3.9 0-5.7 2.3-5.7 5.7s1.8 5.7 5.7 5.7c2.1 0 3.9-.5 5.4-1.6zM99.6 16.5h-4.7l-2-6.5-2 6.5h-4.7l5.7-12h1.6l5.7 12h-.6zM113.8 16.5h-1.6V6.1h-4.4V4.5h10.4v1.6h-4.4v10.4z" fill="currentColor"/>
  </svg>
);

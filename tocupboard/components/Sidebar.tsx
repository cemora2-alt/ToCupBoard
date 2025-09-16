
import React from 'react';
import type { Section } from '../types';
import { HomeIcon, WPIcon, ApiIcon, CreditCardIcon, ShieldCheckIcon, GitHubIcon } from './icons/Icons';

interface SidebarProps {
    activeSection: Section;
    setActiveSection: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'introduction', label: 'Introducción', icon: <HomeIcon /> },
        { id: 'wordpress', label: 'Configuración de WordPress', icon: <WPIcon /> },
        { id: 'api', label: 'Integración de API', icon: <ApiIcon /> },
        { id: 'payment', label: 'Pasarela de Pago', icon: <CreditCardIcon /> },
        { id: 'devsecops', label: 'Modelo DevSecOps', icon: <ShieldCheckIcon /> },
        { id: 'github', label: 'Repositorio de GitHub', icon: <GitHubIcon /> },
    ] as const;

    return (
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex-shrink-0 hidden md:block">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">ToCupboard</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Informe Técnico</p>
            </div>
            <nav className="mt-6">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} className="px-4">
                            <button
                                onClick={() => setActiveSection(item.id)}
                                className={`w-full flex items-center px-4 py-3 my-1 text-left rounded-lg transition-colors duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                            >
                                <span className="w-6 h-6 mr-3">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
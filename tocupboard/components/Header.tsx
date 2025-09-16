
import React, { useState } from 'react';
import type { Page } from '../types';
import { ShoppingCartIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from './icons/Icons';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    cartCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, isDarkMode, toggleDarkMode, cartCount, onCartClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems = [
        { id: 'home', label: 'Inicio' },
        { id: 'products', label: 'Productos' },
        { id: 'about', label: 'Nosotros' },
        { id: 'contact', label: 'Contacto' },
    ] as const;

    const NavLinks: React.FC<{isMobile?: boolean}> = ({ isMobile }) => (
        <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row items-center space-x-6'}`}>
            {navItems.map((item) => (
                <li key={item.id}>
                    <button
                        onClick={() => {
                            setActivePage(item.id);
                            if (isMobile) setIsMenuOpen(false);
                        }}
                        className={`font-medium transition-colors ${
                            activePage === item.id
                                ? 'text-primary-600 dark:text-primary-400'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                        }`}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
        </ul>
    );

    return (
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <button onClick={() => setActivePage('home')} className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            ToCupboard
                        </button>
                    </div>

                    <nav className="hidden md:block">
                        <NavLinks />
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Alternar modo oscuro"
                        >
                            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                        </button>

                        <div className="relative">
                            <button
                                onClick={onCartClick}
                                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Abrir carrito de compras"
                            >
                                <ShoppingCartIcon className="h-6 w-6" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                        
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 dark:text-gray-300">
                                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-4">
                    <NavLinks isMobile />
                </div>
            )}
        </header>
    );
};

export default Header;
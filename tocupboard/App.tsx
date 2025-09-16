import React, { useState, useEffect } from 'react';
import type { Page, Product, CartItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const addToCart = (productToAdd: Product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === productToAdd.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...currentCart, { ...productToAdd, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: number) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId));
    };

    const updateCartQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(currentCart =>
                currentCart.map(item =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };
    
    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    }
    
    const handleCloseCheckout = () => {
        setIsCheckoutOpen(false);
        setCart([]); // Clear cart on successful checkout
    }

    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <Home onNavigate={setActivePage} addToCart={addToCart} />;
            case 'products':
                return <Products addToCart={addToCart} />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return <Home onNavigate={setActivePage} addToCart={addToCart} />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-800 dark:text-gray-200">
            <Header
                activePage={activePage}
                setActivePage={setActivePage}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
                onCartClick={() => setIsCartOpen(true)}
            />
            <main className="flex-1">
                {renderPage()}
            </main>
            <Footer />
            <CartModal
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateCartQuantity}
                onCheckout={handleCheckout}
                subtotal={cartTotal}
            />
            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={handleCloseCheckout}
                totalAmount={cartTotal}
            />
        </div>
    );
};

export default App;
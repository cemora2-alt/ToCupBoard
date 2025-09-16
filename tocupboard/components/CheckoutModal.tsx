
import React, { useState, useEffect } from 'react';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalAmount: number;
}

type CheckoutStep = 'login' | 'confirm' | 'processing' | 'success';

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, totalAmount }) => {
    const [step, setStep] = useState<CheckoutStep>('login');

    useEffect(() => {
        if (isOpen) {
            setStep('login');
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('confirm');
    };

    const handleConfirm = () => {
        setStep('processing');
        setTimeout(() => {
            setStep('success');
        }, 2000);
    };
    
    const handleClose = () => {
        // Reset state and call parent onClose
        setStep('login');
        onClose();
    }

    const renderStep = () => {
        switch (step) {
            case 'login':
                return (
                    <form onSubmit={handleLogin}>
                        <h3 className="text-xl font-semibold mb-4 text-center">Inicia sesión en tu cuenta de PayPal</h3>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico o número de móvil</label>
                            <input type="email" id="email" defaultValue="sandbox@example.com" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
                            <input type="password" id="password" defaultValue="password" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full font-bold hover:bg-blue-700 transition-colors">Iniciar Sesión</button>
                        <div className="text-center my-4 text-gray-500">o</div>
                        <button type="button" onClick={handleClose} className="w-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Cancelar y volver al comercio</button>
                    </form>
                );
            case 'confirm':
                return (
                    <div>
                         <h3 className="text-xl font-semibold mb-2 text-center">Confirmar Pago</h3>
                         <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Estás pagando a ToCupboard Inc.</p>
                         <div className="text-center mb-6">
                            <span className="text-4xl font-bold text-gray-800 dark:text-white">${totalAmount.toFixed(2)}</span>
                            <span className="text-lg text-gray-500"> USD</span>
                         </div>
                         <div className="border-t border-b border-gray-200 dark:border-gray-600 py-4">
                             <p className="font-semibold">Pagar con</p>
                             <p>Saldo de PayPal: $1000.00</p>
                         </div>
                         <button onClick={handleConfirm} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">Pagar Ahora</button>
                    </div>
                );
            case 'processing':
                return (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto"></div>
                        <p className="mt-4 text-lg font-medium">Procesando pago...</p>
                    </div>
                );
            case 'success':
                return (
                    <div className="text-center py-12">
                         <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         <h3 className="text-2xl font-semibold mt-4">¡Pago Exitoso!</h3>
                         <p className="text-gray-600 dark:text-gray-400 mt-2">Gracias por tu compra.</p>
                         <button onClick={handleClose} className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">Cerrar</button>
                    </div>
                );
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md m-4 transform transition-all">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <img src="https://www.paypalobjects.com/images/shared/momgram@2x.png" alt="PayPal Logo" className="h-8 mx-auto" />
                </div>
                <div className="p-8">
                   {renderStep()}
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
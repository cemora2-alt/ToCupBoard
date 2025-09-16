
import React from 'react';
import Card from '../components/Card';

const Contact: React.FC = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would handle form submission here.
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                 <Card>
                    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Ponte en Contacto</h1>
                    <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
                        ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre Completo</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo Electrónico</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-3 px-4 bg-primary-600 text-white font-bold rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-6 text-gray-600 dark:text-gray-300">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nuestra Oficina</h3>
                                <p>Avenida de la Reforma 123<br />Piso 10<br />Ciudad de México, 06500</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Escríbenos</h3>
                                <p><a href="mailto:hola@tocupboard.com" className="text-primary-600 hover:underline">hola@tocupboard.com</a></p>
                            </div>
                             <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Llámanos</h3>
                                <p>(55) 1234-5678</p>
                            </div>
                        </div>
                    </div>
                 </Card>
            </div>
        </div>
    );
};

export default Contact;
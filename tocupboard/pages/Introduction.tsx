
import React from 'react';
import Card from '../components/Card';
import { CheckCircleIcon } from '../components/icons/Icons';

const Introduction: React.FC = () => {
    return (
        <div className="space-y-8">
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Resumen del Proyecto: Sitio Web ToCupboard</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Este informe técnico detalla la estrategia de desarrollo y seguridad para el nuevo sitio web de "ToCupboard," una empresa de productos esenciales para el hogar. El proyecto se centra en crear una plataforma de comercio electrónico profesional, responsiva y segura utilizando WordPress, integrada con APIs externas y una pasarela de pago simulada.
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                    El núcleo de este proyecto es la aplicación del modelo <span className="font-semibold text-primary-600 dark:text-primary-400">DevSecOps</span>, asegurando que la seguridad sea una parte integral de todo el ciclo de vida del desarrollo, desde el diseño inicial hasta el despliegue y el monitoreo continuo.
                </p>
            </Card>

            <Card>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Características Clave del Proyecto</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold">Sitio Profesional en WordPress</h4>
                            <p className="text-gray-600 dark:text-gray-400">Un sitio web totalmente responsivo y visualmente atractivo con páginas esenciales (Inicio, Nosotros, Productos, Contacto).</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold">Integración Segura de API</h4>
                            <p className="text-gray-600 dark:text-gray-400">Comunicación segura y autenticada con APIs externas para obtener datos de productos y manejar envíos de formularios.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold">Simulación de Pasarela de Pago</h4>
                            <p className="text-gray-600 dark:text-gray-400">Una simulación realista de un proceso de pago seguro utilizando las mejores prácticas de PayPal Sandbox.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold">DevSecOps de Extremo a Extremo</h4>
                            <p className="text-gray-600 dark:text-gray-400">Implementación de pipelines de CI/CD, escaneo de seguridad automatizado y monitoreo continuo para mantener una postura de seguridad robusta.</p>
                        </div>
                    </li>
                </ul>
            </Card>
        </div>
    );
};

export default Introduction;
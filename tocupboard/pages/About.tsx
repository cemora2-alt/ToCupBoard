
import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <Card>
                    <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Nuestra Historia</h1>
                    
                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                        <p>
                           En 2020, en medio de la incertidumbre de la pandemia por Covid-19, nuestros fundadores Roberto e Israel vieron una necesidad clara: facilitar el acceso a productos de primera necesidad sin salir de casa y, al mismo tiempo, apoyar a los pequeños comerciantes locales. Así nació ToCupboard, con la misión de llevar lo esencial hasta la puerta de tu hogar.
                        </p>
                        <p>
                           Comenzamos con una plataforma desarrollada en Python, enfocada en la funcionalidad y la experiencia del usuario. Sin embargo, a medida que crecíamos y buscábamos expandirnos, un inversionista clave nos presentó un desafío crucial: garantizar la seguridad de nuestra plataforma y, lo más importante, de los datos de nuestros clientes y vendedores.
                        </p>
                         <p>
                           Para nosotros, la confianza es la base de todo. Por eso, integramos a Juan Carlos, un experto en ciberseguridad, a nuestro equipo. Bajo su liderazgo, adoptamos un enfoque proactivo, implementando metodologías de vanguardia como DevSecOps. Esto significa que la seguridad no es una ocurrencia tardía, sino una parte integral de cada línea de código que escribimos y cada función que lanzamos.
                        </p>
                        <p>
                           Hoy, ToCupboard es más que una tienda en línea. Es el resultado de un compromiso inquebrantable con la seguridad, la calidad y el servicio. Cada compra que haces está protegida por robustos controles de seguridad, desde el cifrado de datos hasta el monitoreo constante. Gracias por confiar en nosotros para cuidar de tu hogar y de tu información.
                        </p>
                    </div>

                    <div className="mt-10">
                        <img src="https://images.unsplash.com/photo-1584680226833-0d680d0a7a97?q=80&w=1200" alt="Carrito de compras en un supermercado" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default About;
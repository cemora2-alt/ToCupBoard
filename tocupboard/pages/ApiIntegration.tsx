
import React, { useState, useEffect } from 'react';
import type { Product } from '../types';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import CodeBlock from '../components/CodeBlock';

const mockProducts: Product[] = [
    { id: 1, name: 'Minimalist Oak Chair', category: 'Seating', price: 120.00, imageUrl: 'https://picsum.photos/seed/chair/400/300' },
    { id: 2, name: 'Ceramic Table Lamp', category: 'Lighting', price: 78.50, imageUrl: 'https://picsum.photos/seed/lamp/400/300' },
    { id: 3, name: 'Walnut Coffee Table', category: 'Tables', price: 350.00, imageUrl: 'https://picsum.photos/seed/table/400/300' },
    { id: 4, name: 'Linen Throw Pillow', category: 'Textiles', price: 45.00, imageUrl: 'https://picsum.photos/seed/pillow/400/300' },
];

const ApiIntegration: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setProducts(mockProducts);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const fetchProductsCode = `
function fetchProducts() {
    const API_ENDPOINT = 'https://api.tocupboard.com/products';
    const API_KEY = process.env.PRODUCTS_API_KEY;

    // In a real scenario, this would be a fetch call
    // await fetch(API_ENDPOINT, { 
    //   headers: { 'Authorization': \`Bearer \${API_KEY}\` } 
    // });

    // For this simulation, we use a timeout
    return new Promise(resolve => {
        setTimeout(() => resolve(mockProducts), 1500);
    });
}
    `;

    const submitFormCode = `
async function handleFormSubmit(formData) {
    const API_ENDPOINT = 'https://api.tocupboard.com/contact';
    
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // CSRF token would be included here
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return { success: true, data: await response.json() };
    } catch (error) {
        console.error('Submission failed:', error);
        return { success: false, error: error.message };
    }
}
    `;

    return (
        <div className="space-y-8">
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ejemplo de Llamada API 1: Obteniendo Datos de Productos</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    El sitio web obtiene dinámicamente la información de los productos desde una API externa. Esto asegura que los listados de productos estén siempre actualizados sin necesidad de un despliegue del sitio. La llamada a la API está protegida mediante una clave de API enviada en las cabeceras de la solicitud.
                </p>
                <CodeBlock language="javascript">{fetchProductsCode.trim()}</CodeBlock>
                
                <h3 className="text-xl font-bold mt-6 mb-4">Simulación en Vivo</h3>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isLoading ? 'blur-sm' : ''}`}>
                    {isLoading ? (
                         Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 animate-pulse"></div>
                        ))
                    ) : (
                        // FIX: Pass the onAddToCart prop to ProductCard. It's required but not used for this simulation page.
                        products.map(product => <ProductCard key={product.id} product={product} onAddToCart={() => {}} />)
                    )}
                </div>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ejemplo de Llamada API 2: Envío de Formulario de Contacto</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    El envío del formulario de contacto se maneja a través de un endpoint de API seguro. Esto desacopla el formulario del backend de WordPress, permitiendo un procesamiento más robusto (p. ej., enviar datos a un CRM). La seguridad se maneja mediante validación de entrada, limitación de velocidad en el servidor y tokens CSRF para prevenir la falsificación de solicitudes entre sitios.
                </p>
                <CodeBlock language="javascript">{submitFormCode.trim()}</CodeBlock>
            </Card>
        </div>
    );
};

export default ApiIntegration;
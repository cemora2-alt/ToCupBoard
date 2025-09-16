
import React from 'react';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

const WordPressSetup: React.FC = () => {
    return (
        <div className="space-y-8">
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Núcleo de WordPress y Tema</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    La base del sitio ToCupboard es una instalación de WordPress segura y actualizada. Recomendamos un tema profesional y con buen soporte para garantizar una experiencia de usuario de alta calidad y mantenibilidad.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><span className="font-semibold">Tema Recomendado:</span> Astra o Kadence. Ambos son ligeros, altamente personalizables y tienen excelentes historiales de seguridad.</li>
                    <li><span className="font-semibold">Diseño:</span> El diseño será profesional, limpio y totalmente responsivo, adaptándose sin problemas a escritorios, tabletas y dispositivos móviles.</li>
                    <li><span className="font-semibold">Páginas de Contenido:</span> Se crearán páginas estándar: Inicio, Sobre Nosotros, Productos/Servicios y Contacto.</li>
                </ul>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Plugins Esenciales</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Se utilizará un conjunto mínimo de plugins de alta calidad para extender la funcionalidad sin comprometer el rendimiento o la seguridad. Todos los plugins provendrán del repositorio oficial de WordPress o de desarrolladores de confianza.
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Plugin</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Propósito</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">Wordfence Security</td>
                                <td className="px-6 py-4 whitespace-nowrap">Firewall, escaneo de malware y seguridad de inicio de sesión.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">Yoast SEO</td>
                                <td className="px-6 py-4 whitespace-nowrap">Optimización para motores de búsqueda.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">WPForms</td>
                                <td className="px-6 py-4 whitespace-nowrap">Gestión segura de formularios de contacto.</td>
                            </tr>
                             <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">UpdraftPlus</td>
                                <td className="px-6 py-4 whitespace-nowrap">Copias de seguridad y restauración automatizadas.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
            
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mejores Prácticas de Fortalecimiento de Seguridad</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Más allá de los plugins, se implementarán varias medidas de seguridad a nivel de configuración para fortalecer la instalación de WordPress.
                </p>
                 <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    <li><span className="font-semibold">HTTPS/SSL:</span> Forzar HTTPS en todo el sitio para cifrar los datos en tránsito.</li>
                    <li><span className="font-semibold">Credenciales Sólidas:</span> Exigir contraseñas seguras para todos los usuarios y cambiar el nombre de usuario predeterminado 'admin'.</li>
                    <li><span className="font-semibold">Desactivar Edición de Archivos:</span> Evitar que los archivos de temas y plugins se editen desde el panel de WordPress.</li>
                    <li><span className="font-semibold">Actualizaciones Regulares:</span> El núcleo de WordPress, los temas y los plugins se mantendrán actualizados como parte del proceso de CI/CD.</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300">
                    La siguiente constante se agregará a `wp-config.php` para deshabilitar el editor de archivos:
                </p>
                <CodeBlock language="php">{`define( 'DISALLOW_FILE_EDIT', true );`}</CodeBlock>
            </Card>
        </div>
    );
};

export default WordPressSetup;
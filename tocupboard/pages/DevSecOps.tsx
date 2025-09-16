
import React from 'react';
import Card from '../components/Card';
import { CodeBracketIcon } from '../components/icons/Icons';

const DevSecOps: React.FC = () => {
    
    const PipelineStage: React.FC<{ icon: React.ReactNode; title: string; description: string; isLast?: boolean }> = ({ icon, title, description, isLast }) => (
        <div className="flex items-start md:items-center">
            <div className="flex flex-col items-center mr-4 md:mr-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-300">
                    {icon}
                </div>
                {!isLast && <div className="w-px h-24 bg-gray-300 dark:bg-gray-600 mt-2"></div>}
            </div>
            <div className="mt-2 md:mt-0">
                <h4 className="text-lg font-bold">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
        </div>
    );

    const stages = [
        {
            icon: <CodeBracketIcon className="w-8 h-8"/>,
            title: '1. Planificar y Codificar',
            description: 'Los desarrolladores escriben código y lo suben a un repositorio Git (GitHub). Los requisitos de seguridad se definen en esta etapa (Modelado de Amenazas).'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>,
            title: '2. Construir y Probar (CI)',
            description: 'Un servidor de CI (GitHub Actions) construye automáticamente el proyecto. Se ejecutan escaneos de seguridad automatizados (SAST, comprobación de dependencias) en cada commit.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
            title: '3. Lanzar y Desplegar (CD)',
            description: 'Si las pruebas pasan, el artefacto se despliega en un entorno de pre-producción (staging). Se ejecutan escaneos DAST contra el sitio de staging. Se realizan revisiones manuales de QA y seguridad.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>,
            title: '4. Operar y Monitorear',
            description: 'La versión se despliega a producción. El sitio se monitorea continuamente para tiempo de actividad, rendimiento y nuevas vulnerabilidades. Los registros de seguridad se agregan y analizan.'
        }
    ];

    return (
        <div className="space-y-8">
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Aplicando el Modelo DevSecOps</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    DevSecOps es un cambio cultural y técnico que integra prácticas de seguridad en cada fase del ciclo de vida del desarrollo de software. En lugar de tratar la seguridad como un paso final antes del lanzamiento, se convierte en una responsabilidad compartida de todo el equipo, automatizada y continua. Para el proyecto ToCupboard, esto significa construir la seguridad desde adentro, no añadirla al final.
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pipeline de CI/CD con Seguridad Integrada</h3>
                 <div className="space-y-8">
                    {stages.map((stage, index) => (
                        <PipelineStage key={stage.title} {...stage} isLast={index === stages.length - 1} />
                    ))}
                </div>
            </Card>

            <Card>
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prácticas Clave de Seguridad</h2>
                 <ul className="space-y-4">
                    <li>
                        <h4 className="font-semibold text-lg">Pruebas Estáticas de Seguridad de Aplicaciones (SAST)</h4>
                        <p className="text-gray-600 dark:text-gray-400">El código se escanea automáticamente en busca de vulnerabilidades potenciales (como inyección SQL o XSS) antes de ser fusionado. Herramientas como SonarCloud o Snyk pueden integrarse en las pull requests.</p>
                    </li>
                    <li>
                        <h4 className="font-semibold text-lg">Escaneo de Dependencias</h4>
                        <p className="text-gray-600 dark:text-gray-400">Herramientas como Dependabot de GitHub verifican automáticamente vulnerabilidades conocidas en bibliotecas de terceros (plugins de WordPress, paquetes npm) y crean pull requests para actualizarlas.</p>
                    </li>
                    <li>
                        <h4 className="font-semibold text-lg">Pruebas Dinámicas de Seguridad de Aplicaciones (DAST)</h4>
                        <p className="text-gray-600 dark:text-gray-400">La aplicación en vivo en el entorno de staging se prueba en busca de vulnerabilidades desde afuera hacia adentro, simulando ataques del mundo real. Se pueden usar herramientas como OWASP ZAP.</p>
                    </li>
                     <li>
                        <h4 className="font-semibold text-lg">Monitoreo Continuo</h4>
                        <p className="text-gray-600 dark:text-gray-400">El entorno de producción se monitorea activamente utilizando herramientas como Wordfence y registros a nivel de servidor para detectar y alertar sobre actividades sospechosas en tiempo real.</p>
                    </li>
                </ul>
            </Card>
        </div>
    );
};

export default DevSecOps;
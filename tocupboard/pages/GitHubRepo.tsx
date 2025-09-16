
import React from 'react';
import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

const GitHubRepo: React.FC = () => {

    const readmeContent = `
# Proyecto DevSecOps de WordPress para ToCupboard

Este repositorio contiene todo el código, la configuración y la documentación para el sitio web de WordPress de ToCupboard. Sigue los principios de DevSecOps para garantizar un ciclo de vida de desarrollo seguro y eficiente.

## Estructura del Repositorio

\`\`\`
/
├── .github/              # Flujos de trabajo de CI/CD de GitHub Actions
├── wordpress/            # Archivos del núcleo de WordPress (gestionado como submódulo)
├── wp-content/
│   ├── themes/
│   │   └── tocupboard/   # Archivos del tema personalizado
│   └── plugins/
│       └── ...           # Plugins personalizados
├── tests/                # Pruebas automatizadas (unitarias, de integración, de seguridad)
├── scripts/              # Scripts de despliegue y utilidades
├── .env.example          # Variables de entorno de ejemplo
├── docker-compose.yml    # Configuración del entorno de desarrollo local
└── README.md             # Este archivo
\`\`\`

## Cómo Empezar

Sigue estos pasos para configurar un entorno de desarrollo local.

### Prerrequisitos

- Docker y Docker Compose
- Git
- Node.js y npm (para el desarrollo del tema)

### Instrucciones de Configuración

1.  **Clona el repositorio:**
    \`git clone https://github.com/DigitalNAO/tocupboard-project.git\`
    \`cd tocupboard-project\`

2.  **Configura las variables de entorno:**
    Copia \`.env.example\` a \`.env\` y completa los valores requeridos (credenciales de la base de datos, claves de API para entornos sandbox).

3.  **Construye y ejecuta los contenedores de Docker:**
    \`docker-compose up -d\`

4.  **Accede al sitio local:**
    El sitio de WordPress estará disponible en \`http://localhost:8080\`.

5.  **Instala las dependencias del tema (si estás desarrollando el tema):**
    \`cd wp-content/themes/tocupboard\`
    \`npm install\`
    \`npm run dev\`
`;

    return (
        <div className="space-y-8">
            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Repositorio de GitHub y Colaboración</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Todos los activos del proyecto se gestionan en un repositorio central de GitHub llamado <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">tocupboard-project</code>. Este sirve como la única fuente de verdad para todo el código, la configuración y la documentación.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mt-4">
                    <li><span className="font-semibold">Control de Acceso:</span> El acceso al repositorio se gestiona a través de equipos de GitHub. Al equipo "Digital NAO" se le han otorgado los permisos adecuados para revisar y contribuir al proyecto.</li>
                    <li><span className="font-semibold">Estrategia de Ramas:</span> Utilizamos una estrategia de ramas similar a GitFlow. Todo el trabajo nuevo se realiza en ramas de características (feature branches), que luego se fusionan en una rama `develop` después de una revisión de pull request. Las versiones se etiquetan desde la rama `main`.</li>
                    <li><span className="font-semibold">Revisiones de Pull Request:</span> Todas las pull requests requieren al menos una aprobación y deben pasar todas las verificaciones de CI automatizadas (incluidos los escaneos de seguridad) antes de que puedan ser fusionadas.</li>
                </ul>
            </Card>

            <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">README.md e Instrucciones de Configuración</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                    El repositorio incluye un archivo `README.md` completo que proporciona una descripción general del proyecto, una descripción de la estructura de directorios e instrucciones detalladas para configurar un entorno de desarrollo local. A continuación se muestra una representación de su contenido.
                </p>
                <CodeBlock language="markdown">{readmeContent.trim()}</CodeBlock>
            </Card>
        </div>
    );
};

export default GitHubRepo;
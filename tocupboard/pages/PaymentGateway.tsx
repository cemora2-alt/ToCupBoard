
import React, { useState } from 'react';
import Card from '../components/Card';
import CheckoutModal from '../components/CheckoutModal';
import CodeBlock from '../components/CodeBlock';

const PaymentGateway: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const paypalIntegrationCode = `
<!-- This script would be loaded on the checkout page -->
<script src="https://www.paypal.com/sdk/js?client-id=YOUR_SANDBOX_CLIENT_ID"></script>

<!-- Container for PayPal buttons -->
<div id="paypal-button-container"></div>

<script>
  paypal.Buttons({
    // Sets up the transaction when a payment button is clicked
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '78.50' // The transaction amount
          }
        }]
      });
    },

    // Finalize the transaction after payer approval
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Successful capture! For dev/demo purposes:
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        
        // When ready to go live, this is where you would send the orderID to your server
        // to verify the transaction and fulfill the order.
      });
    }
  }).render('#paypal-button-container');
</script>
    `;

    return (
        <>
            <div className="space-y-8">
                <Card>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Simulando un Proceso de Pago Seguro</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Para garantizar la máxima seguridad y cumplimiento, el procesamiento de pagos es manejado por una pasarela de terceros de confianza. Esta simulación utiliza el entorno de PayPal Sandbox, que replica el entorno de producción en vivo para realizar pruebas seguras y precisas.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li><span className="font-semibold">Tokenización del Lado del Cliente:</span> Los detalles de pago del usuario nunca se envían a nuestro servidor. El script de PayPal maneja los datos de forma segura, proporcionándonos un token de un solo uso al finalizar.</li>
                        <li><span className="font-semibold">Verificación del Lado del Servidor:</span> Después de que el cliente aprueba el pago, el ID de la transacción se envía a nuestro servidor para ser verificado con la API de PayPal. Esto confirma que el pago es legítimo antes de procesar el pedido.</li>
                        <li><span className="font-semibold">Entorno Sandbox:</span> Todas las pruebas se realizan utilizando cuentas Sandbox de PayPal, asegurando que no ocurran transacciones financieras reales.</li>
                    </ul>
                </Card>

                <Card>
                     <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ejemplo de Integración con PayPal Sandbox</h2>
                     <p className="text-gray-600 dark:text-gray-300 mb-4">
                        La integración implica cargar el SDK de JavaScript de PayPal con un ID de cliente de Sandbox y luego renderizar los botones de pago en un contenedor designado. El SDK se encarga de la creación del flujo de pago seguro.
                    </p>
                    <CodeBlock language="html">{paypalIntegrationCode.trim()}</CodeBlock>
                </Card>

                <Card>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Simulación Interactiva de Checkout</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Haz clic en el botón de abajo para experimentar una simulación del flujo de pago de PayPal. Este modal demuestra el recorrido del usuario desde el inicio de sesión hasta la confirmación del pago, todo dentro de un entorno seguro y de prueba.
                    </p>
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-transform hover:scale-105"
                        >
                            Iniciar Pago con PayPal
                        </button>
                    </div>
                </Card>
            </div>
            {/* FIX: Add the required 'totalAmount' prop for the simulation. */}
            <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} totalAmount={78.50} />
        </>
    );
};

export default PaymentGateway;

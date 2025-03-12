import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

function PayPalPayment({ totalAmount }) {
    if (!clientId) {
        console.error("PayPal Client ID is missing. Check your .env file.");
        return <p>Error: PayPal Client ID not found.</p>;
    }

    return (
        <PayPalScriptProvider options={{ "client-id": clientId }}>
            <h2>Pay with PayPal</h2>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: { value: totalAmount.toString() },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert(`Transaction completed by ${details.payer.name.given_name}`);
                        console.log("Transaction details:", details);
                    });
                }}
                onError={(err) => {
                    console.error("PayPal Checkout Error:", err);
                }}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalPayment;

import React, { useState, useEffect } from "react";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [gpayLoaded, setGpayLoaded] = useState(false);

  useEffect(() => {
    const loadGooglePay = () => {
      if (window.google) {
        const paymentsClient = new window.google.payments.api.PaymentsClient({
          environment: "TEST", // Change to 'PRODUCTION' for live use
        });
  
        const paymentDataRequest = {
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["VISA", "MASTERCARD"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example", // Replace with real payment gateway
                  gatewayMerchantId: "exampleMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "BCR2DN6TQYZGJ3XQ", // Replace with real Merchant ID
            merchantName: "Charity Donations",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPrice: amount || "0.00",
            currencyCode: "USD",
          },
        };
  
        paymentsClient.isReadyToPay({
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: paymentDataRequest.allowedPaymentMethods,
        }).then(response => {
          if (response.result) {
            const gpayContainer = document.getElementById("gpay-button-container");
            
            // Prevent multiple buttons by clearing the container first
            gpayContainer.innerHTML = "";  
  
            const gpayButton = paymentsClient.createButton({
              onClick: () => paymentsClient.loadPaymentData(paymentDataRequest),
            });
            gpayContainer.appendChild(gpayButton);
            setGpayLoaded(true);
          }
        });
      }
    };
  
    if (!gpayLoaded) {
      const script = document.createElement("script");
      script.src = "https://pay.google.com/gp/p/js/pay.js";
      script.async = true;
      script.onload = loadGooglePay;
      document.body.appendChild(script);
    }
  }, [amount, gpayLoaded]);

  return (
    <section className="donate">
      <form>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <label>Help a Student get to Study! One click at a time!</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation Amount (USD)"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div id="gpay-button-container"></div>
      </form>
    </section>
  );
};

export default Donate;


//////////////////////////////////////////////////////////////the older crpto trys ////////////////////////////////////////
// import React, { useState } from "react";
// import axios from "axios";

// const Donate = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [amount, setAmount] = useState("");
//   const [disableBtn, setDisableBtn] = useState(false);

//   // const handleCheckout = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     setDisableBtn(true);
//   //     await axios
//   //       .post(
//   //         "http://localhost:4000/api/v1/checkout",
//   //         {
//   //           name,
//   //           email,
//   //           message,
//   //           amount,
//   //         },
//   //         {
//   //           withCredentials: true,
//   //           headers: { "Content-Type": "application/json" },
//   //         }
//   //       )
//   //       .then((res) => {
//   //         console.log(res.data);
//   //         window.location.href = res.data.result.url;
//   //       });
//   //   } catch (error) {
//   //     setDisableBtn(false);
//   //     console.error(error);
//   //   }
//   // };

//   return (
//     <section className="donate">
//       <form onSubmit={handleCheckout}>
//         <div>
//           <img src="/logo.png" alt="logo" />
//         </div>
//         <div>
//           <label>Show your love for Poors</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter Donation Amount (USD)"
//           />
//         </div>
//         <input
//           type="email"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your Name"
//         />
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email Address"
//         />
//         <input
//           type="text"
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit" className="btn" disabled={disableBtn}>
//           Donate {amount ? `$${amount}` : "$0"}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Donate;

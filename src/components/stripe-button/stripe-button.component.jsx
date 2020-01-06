import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Sl65p7OrDeIIkAcPbRBjs9dx00Y1rMToKA'
    const onToken=token=>{
        console.log(token)
        alert('Payment Successfull')
    }
    return ( <div>
            <StripeCheckout 
                label='Pay Now'
                name='Crown Clothing Ltd'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
    </div> );
}
 
export default StripeCheckoutButton;
import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { navigate } from "gatsby"

const buttonStyles = {
  fontSize: "13px",
  border: '1px solid black',
  width: "80%",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "white",
  borderRadius: "30px",
  fontWeight:'bolder'
}

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)



const Checkout = (props) => {
    const redirectToCheckout = async (event) => {
        if(props.plan == "free"){
            navigate("/login");
        }
        event.preventDefault()
        const stripe = await stripePromise
        const { error } = await stripe.redirectToCheckout({
          items: [{ plan: props.plan, quantity: 1 }],
          successUrl: `${window.location.origin}/login/`,
          cancelUrl: `${window.location.origin}/`,
        })
      
        if (error) {
          console.warn("Error:", error)
        }
      }
  return (
    <button style={buttonStyles} onClick={redirectToCheckout}>
        SUBSCRIBE
    </button>
  )
}

export default Checkout
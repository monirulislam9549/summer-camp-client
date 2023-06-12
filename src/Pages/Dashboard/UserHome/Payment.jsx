import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelect from "../../../hooks/useSelect";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [select, refetch] = useSelect();

  return (
    <div>
      <SectionTitle
        subTitle={"Desirable Course"}
        title={"Pay Your"}
      ></SectionTitle>
      <h1>Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm select={select} refetch={refetch}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;

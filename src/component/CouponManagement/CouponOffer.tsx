import { useGetCouponQuery } from "../../redux/features/couponApi/couponApi";

const CouponOffer = () => {
  const { data } = useGetCouponQuery(null);

  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className=" hidden">
        <h1 className=" text-center  text-red-500">No coupon is available</h1>
      </div>
    );
  }

  const randomIndex = Math.floor(Math.random() * data.data.length);
  const randomCoupon = data.data[randomIndex];

  const code = randomCoupon?.code;

  let offer = "";

  if (randomCoupon?.name === "Shipping") {
    offer = "Shipping";
  }
  if (randomCoupon?.name === "Fixed") {
    offer = "Fixed";
  }
  if (randomCoupon?.name === "Percentage") {
    offer = "Percentage";
  }

  return (
    <div className="container bg-gradient-to-r  from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      {offer === "Shipping" && (
        <div className="text-2xl font-bold mb-4">Free Shipping Cost!</div>
      )}
      {offer === "Fixed" && (
        <div className="text-2xl font-bold mb-4">
          Less then ${randomCoupon?.amountOrPercentage}{" "}
        </div>
      )}
      {offer === "Percentage" && (
        <div className="text-2xl font-bold mb-4">
          Less then {randomCoupon?.amountOrPercentage}%
        </div>
      )}

      <div className="text-base mb-4">Use coupon code:</div>
      <div className="bg-white text-gray-800 rounded-lg px-4 py-2 flex items-center justify-between">
        <span className="text-2xl font-semibold">{code}</span>
        <button className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-500/90 via-black to-blue-500/90 btn-outline text-white px-3 py-1 rounded-lg font-semibold focus:ring-blue-500">
          Copy
        </button>
      </div>
    </div>
  );
};

export default CouponOffer;

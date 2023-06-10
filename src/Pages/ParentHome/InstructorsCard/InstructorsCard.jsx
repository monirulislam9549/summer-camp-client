import Rating from "react-rating";

const InstructorsCard = ({ instructor }) => {
  const { name, image, email, rating } = instructor;
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg p-8" src={image} alt="product image" />

          <div className="px-5 pb-5">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {name}
            </h3>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {email}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;

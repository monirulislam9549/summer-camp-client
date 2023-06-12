const InstructorsCard = ({ instructor }) => {
  const { name, image, email } = instructor;
  return (
    <div className="mb-10">
      <div className="mx-auto mt-11 w-[400px]">
        <div className="mx-auto mt-11 w-[400px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img
            className="p-8 h-48 w-full object-cover object-center"
            src={image}
            alt="product image"
          />

          <div className="px-5 pb-5  text-center">
            <h3 className="text-gray-900 font-semibold tracking-tight dark:text-white">
              {name}
            </h3>
            <h3 className="text-gray-900 font-semibold tracking-tight dark:text-white">
              {email}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;

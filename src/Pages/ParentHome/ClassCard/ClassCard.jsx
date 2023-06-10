const ClassCard = ({ classs }) => {
  //   const { name, price, instructor, available_seats } = classs;
  return (
    <div>
      <div className="mx-auto mt-11 w-[400px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg ">
        <img
          className="h-48 w-full object-cover object-center"
          src={classs.image}
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Instructor Name: {classs.instructor}
            </h2>
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
              Class Name: {classs.name}
            </h2>
          </div>

          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Price: ${classs.price}
            </p>
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Available seats: {classs.available_seats}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

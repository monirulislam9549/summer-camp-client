const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center my-8">
      <h3 className="text-4xl uppercase border-y-4 py-4">{title}</h3>
      <p className="text-yellow-600 mb-2 italic">--- {subTitle} ---</p>
    </div>
  );
};

export default SectionTitle;

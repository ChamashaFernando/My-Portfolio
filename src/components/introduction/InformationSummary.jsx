const InformationSummary = ({ item }) => {
  return (
    <div className="bg-gradient-to-t from-[#2A2A2A] to-[#1E1E1E] text-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 m-2">
      <p className="text-[18px] sm:text-[28px] font-bold text-white">
        {item.description}
      </p>
      <p className="text-[10px] sm:text-[16px] text-gray-400 mt-1">
        {item.title}
      </p>
    </div>
  );
};

export default InformationSummary;
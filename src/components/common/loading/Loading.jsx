import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-[#121212] z-50"
    >
      <HashLoader 
        color="linear-gradient(to right, #A53DFF, #FF6EC7)" 
        speedMultiplier={2} 
        size={80} 
      />
    </div>
  );
};

export default Loading;
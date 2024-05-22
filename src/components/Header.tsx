import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center shadow-lg p-4 md:p-6 w-full border rounded-md mb-4">
      <button
        className="btn btn-primary btn-sm md:btn-md"
        onClick={() => navigate("/new")}
      >
        +New Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl">Top 20 Ideas</h2>
    </div>
  );
};

export default Header;

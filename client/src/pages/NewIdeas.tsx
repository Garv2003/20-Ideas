import { ChevronLeft, Info, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useIdeas } from "../hooks/useIdeas";
import { Header, Hero } from "../components";
import toast from "react-hot-toast";

const NewIdeas = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setIdeas } = useIdeas();

  const handleSubmit = async () => {
    if (!idea || !username) {
      setError("Please fill in all the fields");
      return;
    }

    setLoading(true);

    const newIdea = {
      id: uuidv4(),
      content: idea,
      username,
      vote: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const ideas = JSON.parse(localStorage.getItem("ideas") || "[]");
    ideas.push(newIdea);
    localStorage.setItem("ideas", JSON.stringify(ideas));
    setIdeas(ideas);
    toast.success("Idea submitted successfully");

    setLoading(false);
    navigate(-1);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">Loading...</div>
    );

  if (error)
    return <div className="flex items-center justify-center h-96">{error}</div>;

  return (
    <div>
      <Header />
      <Hero />
      <button className="btn mt-7" onClick={() => navigate(-1)}>
        <ChevronLeft size={16} />
        Back
      </button>
      <h2 className="font-bold text-2xl mt-5">
        From Concept to Creation : Empowering your startup Journey
      </h2>
      <div className="flex flex-col mt-7 gap-2">
        <label>Your Idea *</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="What's your idea?"
          onChange={(e) => setIdea(e.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col mt-7 gap-2">
        <label className="flex justify-between">
          Your Username *
          <span className="flex items-center gap-2">
            <Info size={16} />
            No Account Needed
          </span>
        </label>
        <input
          type="text"
          placeholder="Your Username"
          className="input input-bordered w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button
        className="btn w-full mt-7"
        onClick={handleSubmit}
        disabled={loading}
      >
        Send
        <Send size={16} />
      </button>
    </div>
  );
};

export default NewIdeas;

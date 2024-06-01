import { IdeasSchema } from "../utils/schema";
import { useMemo, memo } from "react";
import { useIdeas } from "../hooks/useIdeas";

const IdeaItem = ({ idea, index }: { idea: IdeasSchema; index: number }) => {
  const { ideas, setIdeas } = useIdeas();
  const formatDate = useMemo(() => {
    const date = new Date(idea.createdAt);
    return `${date.toLocaleDateString()}`;
  }, [idea.createdAt]);

  const UpVote = (id: string) => {
    const newIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, vote: idea.vote + 1 };
      }
      return idea;
    });
    setIdeas(newIdeas);
    localStorage.setItem("ideas", JSON.stringify(newIdeas));
  };

  const DownVote = (id: string) => {
    const newIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        return { ...idea, vote: idea.vote - 1 };
      }
      return idea;
    });
    setIdeas(newIdeas);
    localStorage.setItem("ideas", JSON.stringify(newIdeas));
  };

  return (
    <div className="my-5 p-5 border shadow-lg rounded-lg">
      <div className="flex gap-7">
        <h2 className="w-full flex gap-3">
          <span className="flex gap-2">{index + 1}.</span>
          {idea?.content}
        </h2>
        <div className="flex flex-col justify-between items-center">
          <h2
            className="text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            onClick={() => UpVote(idea.id)}
          >
            🔥
          </h2>
          <h2 className="text-lg rounded-md p-1 text-center cursor-pointer">
            {idea?.vote}
          </h2>
          <h2
            className="text-lg hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            onClick={() => DownVote(idea.id)}
          >
            👎
          </h2>
        </div>
      </div>
      <h2 className="text-sm text-gray-500 mt-3 italic">
        By @{idea?.username} on {formatDate}
      </h2>
    </div>
  );
};

const MemoizedIdeaItem = memo(IdeaItem);
export default MemoizedIdeaItem;

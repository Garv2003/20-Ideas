import { IdeasSchema } from "../utils/schema";
import IdeaItem from "./IdeaItem";
import { memo } from "react";

const IdeasList = ({ ideas }: { ideas: IdeasSchema[] }) => {
  return (
    <div>
      {ideas.map((idea, index) => (
        <IdeaItem key={idea.id} idea={idea} index={index} />
      ))}
    </div>
  );
};

const MemoizedIdeasList = memo(IdeasList);
export default MemoizedIdeasList;

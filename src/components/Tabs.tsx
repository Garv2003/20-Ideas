import { useLocation } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { useIdeas } from "../hooks/useIdeas";
import IdeasList from "./IdeasList";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { ideas } = useIdeas();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#new") {
      setActiveTab(1);
    } else if (location.hash === "#top") {
      setActiveTab(2);
    } else {
      setActiveTab(0);
    }
  }, [location]);

  const filterIdeas = (type: string) => {
    if (type === "new") {
      return ideas
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } else if (type === "top") {
      return ideas.slice().sort((a, b) => b.vote - a.vote);
    } else {
      return ideas;
    }
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          className={`tab text-lg font-bold ${
            activeTab === 0 ? "tab-active" : ""
          }`}
          href="/#hot"
        >
          🔥Hot
        </a>
        <a
          role="tab"
          className={`tab text-lg font-bold ${
            activeTab === 1 ? "tab-active" : ""
          }`}
          href="/#new"
        >
          💫New
        </a>
        <a
          role="tab"
          className={`tab text-lg font-bold ${
            activeTab === 2 ? "tab-active" : ""
          }`}
          href="/#top"
        >
          🏆Top
        </a>
      </div>
      {activeTab === 0 && <IdeasList ideas={ideas} />}
      {activeTab === 1 && <IdeasList ideas={filterIdeas("new")} />}
      {activeTab === 2 && <IdeasList ideas={filterIdeas("top")} />}
    </div>
  );
};

const MemoizedTabs = memo(Tabs);

export default MemoizedTabs;

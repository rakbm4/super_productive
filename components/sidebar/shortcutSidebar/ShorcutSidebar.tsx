import { Top } from "./Top";
import { WorkSpaces } from "./Workspaces";
import { Bottom } from "./Bottom";

export const ShorcutSidebar = () => {
  return (
    <div className="border-r h-full flex flex-col justify-between items-center p-4 sm:py-6">
      <div className="w-full h-2/3">
        <Top />
        <WorkSpaces />
      </div>
      <Bottom />
    </div>
  );
};

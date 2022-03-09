import { cls } from "../libs/utils";

interface IMessageProps {
  message: string;
  reverse?: boolean;
}
export default function Message({message, reverse = false}:IMessageProps) {
  return (
    <div className={cls(
      "flex items-start space-x-2",
      reverse ? "flex-row-reverse space-x-reverse" : ""
    )}>
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="text-sm text-gray-700 p-2 border border-gray-300 rounded-md max-w-[60%]">
        <p>{message}</p>
      </div>
    </div>
  );
}
import { cls } from "@libs/client/utils";

interface IButtonProps {
  large?: boolean;
  text: string;
  loading?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  text,
  loading = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "bg-orange-500 hover:bg-orange-600 text-white px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none w-full",
        large ? "text-base py-3" : "text-sm py-2",
      )}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

type Props = {
  buttonLabel: string;
  buttonBackgroundColor?: "red" | "blue" | "green" | "gray";
  onClick?: () => void;
};

const colorMap: Record<NonNullable<Props["buttonBackgroundColor"]>, string> = {
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  gray: "bg-gray-500 hover:bg-gray-600",
};

export default function Button({ buttonLabel, buttonBackgroundColor = "gray", onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${colorMap[buttonBackgroundColor]} text-white font-semibold py-2 px-4 rounded`}
    >
      {buttonLabel}
    </button>
  );
}

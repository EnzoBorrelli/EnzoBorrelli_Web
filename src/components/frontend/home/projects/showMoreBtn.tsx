import useLang from "@/languages/useLang";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ShowMoreBtn({ Show, SetShow }: any) {
  const text = useLang();
  if (!text) {
    return <></>;
  }
  return (
    <button
      className="flex flex-row flex-wrap justify-center items-center p-1 border-2 border-gray-500 hover:border-black bg-teal-400 rounded-xl m-4 hover:bg-teal-700 hover:text-white"
      onClick={() => SetShow(!Show)}
    >
      {Show ? <FaArrowUp /> : <FaArrowDown />}
      {Show ? `${text.showLess}` : `${text.showMore}`}
    </button>
  );
}

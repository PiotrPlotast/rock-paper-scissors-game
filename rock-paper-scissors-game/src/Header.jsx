import Score from "./Score";
export default function Header({ score }) {
  return (
    <div className="flex justify-between p-3 mx-8 max-w-2xl rounded-[5px] border-2 border-[#ffffff4a]">
      <h1 className="uppercase font-bold text-white text-[1.3125rem] leading-none p-3 ">
        Rock
        <br />
        paper
        <br />
        scissors
      </h1>
      <Score score={score} />
    </div>
  );
}

import HrSR from "../atoms/HrSR";

function Or() {
  const classDiv =
    "flex flex-row justify-between items-center w-full mt-[26px]";

  return (
    <div className={classDiv}>
      <HrSR />
      <p className="font-sans font-normal text-[12px] text-[#AAAAAA]">Or</p>
      <HrSR />
    </div>
  );
}

export default Or;

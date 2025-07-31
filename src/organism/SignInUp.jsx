
function SignInUp() {
  const aClass1 = "border border-[#1D4ED8] text-[#1D4ED8] font-normal text-sm tracking-[0.75px] rounded-[5px] no-underline px-[18px] py-[12px]"
  const aClass2 = "bg-[#1D4ED8] text-[#F8FAFC] font-normal text-sm tracking-[0.75px] rounded-[5px] no-underline px-[18px] py-[12px]"

  return (
    <div className="flex flex-row justify-between gap-[6px]">
      <a className={aClass1}>Sign In</a>
      <a className={aClass2}>Sign Up</a>
    </div>
  );
}

export default SignInUp;

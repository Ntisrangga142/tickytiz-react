import { Link } from "react-router";

function SignInUp() {
  const aClass1 = "border border-[#1D4ED8] text-[#1D4ED8] font-normal text-sm tracking-[0.75px] rounded-[5px] no-underline px-[18px] py-[12px]"
  const aClass2 = "bg-[#1D4ED8] text-[#F8FAFC] font-normal text-sm tracking-[0.75px] rounded-[5px] no-underline px-[18px] py-[12px]"

  return (
    <div className="flex flex-row justify-between gap-[6px]">
      <Link className={aClass1} to='/login'>Sign In</Link>
      <Link className={aClass2} to='/register'>Sign Up</Link>
    </div>
  );
}

export default SignInUp;

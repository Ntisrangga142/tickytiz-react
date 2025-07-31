import NavButton from "../atoms/NavButton";

function Nav() {
  const aClass = "font-normal text-sm text-[#0F172A] no-underline"
  return (
    <nav>
      <ul className="w-full flex flex-row justify-between gap-[60px]">
        <NavButton aClass={aClass} liClass="list-none" content="Home" path='/'/>
        <NavButton aClass={aClass} liClass="list-none" content="Movie" path='/Movie'/>
        <NavButton aClass={aClass} liClass="list-none" content="Buy Ticket" path='/'/>
      </ul>
    </nav>
  );
}

export default Nav;

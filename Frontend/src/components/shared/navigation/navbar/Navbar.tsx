import { selectedUser } from "@/features/redux/features/auth/authSlice";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useAppSelector } from "@/features/redux/hook";

const Navbar = () => {
  const user = useAppSelector(selectedUser);
  console.log(user);

  return (
    <nav>
      <div className="hidden md:block py-2 ">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;

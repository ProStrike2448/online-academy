import SignIn from "@/app/components/auth/SignIn";
import type { NavLink } from "@/app/components/header/Nav";
import Nav from "@/app/components/header/Nav";

export default function Header() {
  const links: NavLink[] = [
    { title: "Home", url: "/dashboard" },
    { title: "Courses", url: "/courses" },
    { title: "Projects", url: "/projects" },
    { title: "Reports", url: "/reports" },
  ];
  return (
    <header className="h-16 flex justify-around items-center">
      <Nav links={links} />
      <SignIn />
    </header>
  );
}
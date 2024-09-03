import { IconGardenCart, IconSearch } from "@tabler/icons-react";
import { navigationMenu } from "../../utility/constants/constants";

interface IMenu {
  label: string;
  href: string;
}

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center">
        {navigationMenu.map((menu: IMenu) => (
          <li key={menu.label} className="uppercase cursor-pointer ">
            <p className="nav-link">{menu.label}</p>
          </li>
        ))}
        <li className="cursor-pointer">
          <IconSearch size={20} stroke={1} />
        </li>
        <li className="relative cursor-pointer">
          <IconGardenCart size={24} stroke={1} />
          <span className="absolute -top-[20%] -right-[40%] w-4 h-4 bg-red-600 text-white rounded-full text-xs flex justify-center items-center">
            2
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

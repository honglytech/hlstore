import Link from "next/link";
import { Button } from "../ui/button";
import { FiShoppingBag } from "react-icons/fi";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FiShoppingBag className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;

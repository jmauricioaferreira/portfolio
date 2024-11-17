import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text } from "@components/shared/Text";
import { Highlighted } from "./HighLighted";

export const Header = () => {
  const router = usePathname(); // Pegar o objeto de rotas

  return (
    <div className="flex items-center w-full h-32 px-32">
      <div className="flex w-fit gap-5 justify-etween items-center">
        <Link href="/pt" className="hover:brightness-90">
          <Text className="text-custom-18">
            {router.includes("pt") ? <Highlighted>PT</Highlighted> : "PT"}
          </Text>
        </Link>
        <Link href="/en" className="hover:brightness-90">
          <Text className="text-custom-18">
            {router.includes("en") ? <Highlighted>EN</Highlighted> : "EN"}
          </Text>{" "}
        </Link>
      </div>
    </div>
  );
};

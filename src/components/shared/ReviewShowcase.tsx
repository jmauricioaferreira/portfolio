import Image from "next/image";
import accessControl from "@public/access-control.png";
import { Text } from "./Text";
import { Highlighted } from "./HighLighted";

const ShowcaseHeader = () => {
  return (
    <div className="flex flex-col">
      <Text className="text-custom-18">
        <Highlighted>2023</Highlighted>
      </Text>
      <Text className="text-custom-24">
        <Highlighted>DEFENSE IA - ACCESS CONTROL</Highlighted>
      </Text>
    </div>
  );
};

const ShowcaseBody = () => {
  return (
    <div>
      <Text className="text-custom-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        condimentum placerat libero, ut commodo nisl viverra eget. Fusce iaculis
        elit sit amet est lobortis, pellentesque pharetra neque consequat. Nam
        tellus enim, faucibus vitae elementum at, tincidunt vitae elit. Cras
        convallis justo tortor, eget porta velit iaculis at. Cras sollicitudin
        semper.
      </Text>
    </div>
  );
};

const ShowcaseFooter = () => {
  const tags = [
    "css",
    "javascript",
    "nextjs",
    "react",
    "tailwindcss",
    "typescript",
  ];
  return (
    <div className="flex flex-wrap gap-8">
      {tags.map((tag) => (
        <div
          key={tag}
          className="flex px-6 py-2 rounded-full  min-w-40 items-center justify-center border border-border-green"
        >
          <Text className="flex text-custom-24">
            <Highlighted>{tag}</Highlighted>
          </Text>
        </div>
      ))}
    </div>
  );
};

export const ProjectShowcase = () => {
  return (
    <div className={`flex gap-10  px-64`}>
      <div className="flex-1">
        <Image src={accessControl} alt={""} />
      </div>
      <div className="flex flex-col w-[67rem] gap-8">
        <ShowcaseHeader />
        <ShowcaseBody />
        <ShowcaseFooter />
      </div>
    </div>
  );
};

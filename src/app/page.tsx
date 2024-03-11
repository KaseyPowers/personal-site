import Image from "next/image";
import Typography from "@/components/typography";

import profile from "./Profile-smaller.jpg";

export default function Home() {
  return (
    <>
      <Image
        className="float-right rounded-3xl"
        src={profile}
        width={300}
        alt="Profile Picture"
      />
      <Typography as="h1" type="h1">
        Kasey Powers{" "}
        <Typography type="hSecondary" className="text-2xl">
          ( He / They )
        </Typography>
      </Typography>
      <Typography as="h2" type="h4">
        Software Engineer with a focus on UI/UX Development
      </Typography>
      More
    </>
  );
}

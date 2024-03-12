import Image from "next/image";
import Typography from "@/components/typography";

import type { ImageLoader } from "next/image";
import ProfilePhoto from "@/components/profile_photo";

// raw email with capitalization for displaying elsewhere
const email = "KaseyEPowers@gmail.com";

export default function Home() {
  return (
    <>
      <ProfilePhoto
        className="float-right rounded-3xl"
        width={300}
        height={300}
      />
      <Typography as="h1" type="h1">
        About Me
      </Typography>
      <Typography as="h2" type="h4">
        Software Engineer with a focus on UI/UX Development
      </Typography>
      More
    </>
  );
}

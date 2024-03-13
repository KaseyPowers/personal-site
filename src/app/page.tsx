import Image from "next/image";
import Typography from "@/components/typography";

import type { ImageLoader } from "next/image";
import ProfilePhoto from "@/components/profile_photo";

// raw email with capitalization for displaying elsewhere
const email = "KaseyEPowers@gmail.com";

export default function Home() {
  return (
    <>
      <Typography as="h3" type="h4" className="leading-tight">
        I am a Software Developer with a focus on UI/UX Development.
      </Typography>
      <Typography as="p" type="h5" className="my-7" noGutter>
        A quick learner, lover of problem solving and complex challenges.
        <br />
        Experienced mentor, communicator, and generally helping however I can.
      </Typography>
      TODO: These Sections and figure out if in one page or in seperate "About
      Me" page
      <br />
      - Timeline
      <br />- Strengths
    </>
  );
}

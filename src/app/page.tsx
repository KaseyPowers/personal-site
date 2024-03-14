import Image from "next/image";
import baseStyles from "@/components/base.styles";
import Typography from "@/components/typography";
import ProfilePhoto from "@/components/profile_photo";
import clsx from "clsx";

// raw email with capitalization for displaying elsewhere
const email = "KaseyEPowers@gmail.com";

const answerTexts = [
  "A Software Developer with a focus on UI/UX Development.",
  "Quick learner, picking up new technologies, languages, and frameworks as needed.",
  "Lover of complex challenges and creative problem solving.",
  "Apparently someone asks themselves existential questions to sound smarter but points it out later to show a sense of humor.",
  "Mentor, communicator, and approachable resource to share knowledge with all who want it.",
];

export default function Home() {
  return (
    <>
      <div className="float-right w-1/3 min-w-64 p-4">
        <ProfilePhoto
          className="mx-auto rounded-3xl"
          width={300}
          height={300}
        />
      </div>
      <h3
        className={clsx(
          baseStyles.typography.header,
          "text-right text-4xl font-extrabold leading-none sm:text-5xl sm:leading-none lg:text-6xl lg:leading-none xl:text-center xl:text-7xl xl:leading-none",
        )}
      >
        Who is{" "}
        <span className="text-indigo-600 dark:text-indigo-400">
          Kasey Powers
        </span>
        ?
      </h3>
      {answerTexts.map((text) => (
        <div
          key={text}
          className={clsx(
            baseStyles.typography.header,
            "my-4 w-fit border-l-2 px-2 text-lg font-semibold sm:text-xl lg:text-3xl ",
          )}
        >
          {text}
        </div>
      ))}
      TODO: Timeline - Maybe others
    </>
  );
}

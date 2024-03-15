import baseStyles from "@/components/base.styles";
import ProfilePhoto from "@/components/profile_photo";
import clsx from "clsx";

// raw email with capitalization for displaying elsewhere
const email = "KaseyEPowers@gmail.com";

const answerTexts = [
  "Software Developer with a focus on UI/UX Development.",
  "Quick learner, picking up new technologies, languages, and frameworks as needed.",
  "Lover of complex challenges with creative solutions.",
  "Approachable resource of knowledge with experience as a mentor",
  "Someone who asks themselves existential questions to sound smart but points it out later to show a sense of humor.",
];

export default function Home() {
  return (
    <>
      <div className="xs:w-1/3 xs:min-w-64 float-none w-full p-4 sm:float-right">
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
        <span className={baseStyles.typography.highlight}>Kasey Powers</span>?
      </h3>
      {answerTexts.map((text) => (
        <div
          key={text}
          className={clsx(
            baseStyles.typography.header,
            "my-8 w-fit border-l-2 px-2 text-base font-semibold sm:text-xl lg:text-3xl ",
          )}
        >
          {text}
        </div>
      ))}
    </>
  );
}

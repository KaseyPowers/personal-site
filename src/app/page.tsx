import baseStyles from "@/components/base.styles";
import ProfilePhoto from "@/components/profile_photo";
import clsx from "clsx";

const answerTexts = [
  "Software Developer with a focus on UI/UX Development",
  "Quick learner: picking up new technologies, languages, and frameworks as needed",
  "Lover of complex challenges with creative solutions",
  "Approachable mentor and resource of knowledge",
  "Former almost semi-professional Rocket League Player",
];

export default function Home() {
  return (
    <>
      <div className="float-none w-full p-4 xs:w-1/3 xs:min-w-64 sm:float-right">
        <ProfilePhoto
          className="mx-auto rounded-3xl"
          width={300}
          height={300}
        />
      </div>
      <h3
        className={clsx(
          baseStyles.typography.colors.header,
          "text-right text-4xl font-extrabold leading-none sm:text-5xl sm:leading-none lg:text-6xl lg:leading-none xl:text-center xl:text-7xl xl:leading-none",
        )}
      >
        Who is{" "}
        <span className={baseStyles.typography.colors.highlight}>
          Kasey Powers
        </span>
        ?
      </h3>
      {answerTexts.map((text) => (
        <div
          key={text}
          className={clsx(
            baseStyles.typography.colors.header,
            "my-8 w-fit border-l-2 px-2 text-base font-semibold sm:text-xl lg:text-3xl ",
          )}
        >
          {text}
        </div>
      ))}
    </>
  );
}

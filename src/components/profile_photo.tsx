"use client";
import Image from "next/image";
import type { ImageLoader, ImageProps } from "next/image";

/** Hash generated for my email and loader logic from docs here: https://docs.gravatar.com/general/images/ */

const hash = "46ac7b5fb5b93bb5fcfdb4c55f18a9fd26c42e7c3c4e5e47d31f40ee4861a2e7";

const imageLoader: ImageLoader = ({ src, width }) => {
  return `https://gravatar.com/avatar/${src}?s=${width}`;
};

export default function ProfilePhoto(
  props: Omit<ImageProps, "loader" | "src" | "alt">,
) {
  return (
    <Image loader={imageLoader} src={hash} alt="profile photo" {...props} />
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Locally Stream | Customize Your Experience with Popular Themes",
    description: "Explore multiple themes inspired by platforms like YouTube, Netflix, and more on Locally Stream. Personalize your local video viewing experience with familiar and user-friendly interfaces that enhance comfort and usability.",
    keywords: "Locally Stream themes, YouTube theme, Netflix theme, video player customization, local video themes, personalized video viewing, user-friendly video interface, video playback customization",
  }

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

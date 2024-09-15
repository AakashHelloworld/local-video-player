import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Explore | Customize Your Experience with Popular Themes",
    description: "Explore multiple themes inspired by platforms like YouTube, Netflix, and more on Video Explore. Personalize your local video viewing experience with familiar and user-friendly interfaces that enhance comfort and usability.",
    keywords: "Video Explore themes, YouTube theme, Netflix theme, video player customization, local video themes, personalized video viewing, user-friendly video interface, video playback customization",
  }

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

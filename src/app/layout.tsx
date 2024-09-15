import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Poppins, Lato, Open_Sans } from "next/font/google";
import { AppProvider } from '@/provider/state-manager'


const bebas_init = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: "swap",
  variable: '--font-bebas_neue'
});

const open_sans_init = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: "swap",
  variable: '--font-open_sans'
});

const lato_init = Lato({
  subsets: ['latin'],
  weight: ['400'],
  display: "swap",
  variable: '--font-lato'
});

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap",
  variable: '--font-poppins'
});
export const metadata: Metadata = {
  title: "Video Explore | Seamless Local Video Playback with Smart Features",
  description: "Discover a better way to watch local videos on your laptop or desktop with Video Explore. Customize your experience with popular themes, directory selection, completion badges, and note-taking tools. Enjoy smart features like auto-play and auto-skip, ensuring a smooth viewing experience while maintaining privacy.",
  keywords: "Video Explore, local video playback, smart video features, auto-skip, auto-play, completion badges, video themes, note-taking, video directory, privacy-focused platform",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas_init.variable} ${poppins_init.variable} ${lato_init.variable} ${open_sans_init.variable}`}>
        <AppProvider>
        {children}
        </AppProvider>
        </body>
    </html>
  );
}

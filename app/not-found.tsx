import css from "./page.module.css";
import { Metadata } from "next";
import ClientRedirect from "./NotFound.client";

export const metadata: Metadata = {
  title: "Non-existent page",
  description: "This page does not exist",
  openGraph: {
    title: "Non-existent page",
    description: "This page does not exist",
    url: `https://blackfirecheer.at/not-found`,
    images: [
      {
        url: "/app/icon1.png",
        width: 96,
        height: 96,
        alt: "Black Fire Cheer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Non-existent page`,
    description: "This page does not exist",
    images: ["/app/icon1.png"],
  },
};

const NotFound = () => {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
        <br />
        <br />
        You will be redirected to the homepage in a while.
      </p>
      <ClientRedirect />
    </>
  );
};

export default NotFound;

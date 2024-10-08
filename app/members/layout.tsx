import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";
import styles from "./page.module.css";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'メンバー'
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <Sheet>{children}</Sheet>
    </>
  );
}

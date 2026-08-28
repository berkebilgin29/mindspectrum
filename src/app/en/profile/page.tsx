import { ProfileView } from "@/components/ProfileView";
import { Header } from "@/components/Header";
import { EN } from "@/lib/i18n/dict";

export const metadata = {
  title: "Cognitive Profile · 9spectrum",
  robots: "noindex, nofollow",
};

export default function ProfilePageEN() {
  return (
    <>
      <Header lang="en" />
      <main className="container" style={{ padding: "0 1rem", maxWidth: 640 }}>
        <ProfileView lang="en" />
      </main>
    </>
  );
}

import { ProfileView } from "@/components/ProfileView";
import { Header } from "@/components/Header";
import { TR } from "@/lib/i18n/dict";

export const metadata = {
  title: "Kognitif Profil · 9spectrum",
  robots: "noindex, nofollow",
};

export default function ProfilePage() {
  return (
    <>
      <Header lang="tr" />
      <main className="container" style={{ padding: "0 1rem", maxWidth: 640 }}>
        <ProfileView lang="tr" />
      </main>
    </>
  );
}

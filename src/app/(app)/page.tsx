import Link from "next/link";

export default async function Home() {
  return (
    <>
      <h1>Főoldal</h1>
      <hr className="divider" />

      <Link href={"/profile"} className="btn">
        Profile
      </Link>
    </>
  );
}

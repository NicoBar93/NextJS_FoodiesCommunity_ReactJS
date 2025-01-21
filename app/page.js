import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Foodies Community
      </h1>
      <p style={{textAlign: "center" }}>
        <Link href="/meals">Meals</Link>
      </p>
      <p style={{textAlign: "center" }}>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
}

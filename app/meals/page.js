import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <p style={{ textAlign: "center" }}>
        <Link
          href="/meals/share"
          style={{ color: "white" }}
        >
          Share
        </Link>
      </p>

      <br />
      <br />

      <div>
        <h2 style={{ color: "white", textAlign: "center" }}>
          Best Italian Meals
        </h2>
        <p style={{ textAlign: "center" }}>
          <Link href="/meals/PatateEcozze">Patate e cozze</Link>
        </p>
        <p style={{ textAlign: "center" }}>
          <Link href="/meals/Tiramisu">Tiramisu</Link>
        </p>
        <p style={{ textAlign: "center" }}>
          <Link href="/meals/Pastaalforno">Pasta al forno</Link>
        </p>
        <p style={{ textAlign: "center" }}>
          <Link href="/meals/Pennetteallavodka">Pennette al vodka</Link>
        </p>
        <p>
        <Link href="/">Home</Link>
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function MealType({params}) {
    return (
        <main>
            <h1>Meal</h1>
            <p>{params.slug}</p>
            <p><Link href="/meals">Back</Link></p>
        </main>
    );
}
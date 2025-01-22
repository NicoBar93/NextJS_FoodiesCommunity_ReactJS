'use client';

export default function Error({error}) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Something went wrong fetching meals. Please try again later...</p>
        </main>
    )
}
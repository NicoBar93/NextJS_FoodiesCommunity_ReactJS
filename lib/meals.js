import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}




// .all()    LO USO PER ACQUISIRE I DATI 
// .run()    LO USO PER AGGIORNARE/INSERIRE DEI DATI
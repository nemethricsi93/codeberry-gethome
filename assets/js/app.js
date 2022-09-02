console.log('A számológép használatra kész.');

// Amiket ki kell számolnom:
// fuelToOffload:
    // Az az üzemanyagmennyiség, amit leeresztve a súlylimit alá kerülünk, de még haza tudunk jutni.
    // fuelToOffload = tankCapacity - requiredFuel
// tankCapacity: Az űrsikló üzemanyagtartályának űrtartalma.
// requiredFuel: Minimális üzemanyag-mennyiség, amivel visszajutunk a Földre.
    // Szükséges üzemanyag = Teljes táv * Átlagos fogyasztás
    // Ahol az átlagos fogyasztás X liter / 100 km.
    // requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100)

function calculateFuelToOffload() {
    // 1. lépés: Számolja ki a szükséges üzemanyag-mennyiséget.
     // 2. lépés: Számolja ki a lecsapolandó üzemanyagot.
}
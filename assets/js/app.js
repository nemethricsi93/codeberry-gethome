function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
    var averageLitersOverHundred = prompt('Mi az átlagos üzemanyag fogyasztása az űrsiklónak 100 km-en?');
    var tankCapacity = prompt('Mekkora az űrsikló tankja Literben kifejezve?');

    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
    var fuelToOffload = tankCapacity - requiredFuel;

    alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' L\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffload + ' L');

}

calculateFuelToOffload();
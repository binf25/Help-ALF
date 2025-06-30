function findSpaceship(map) {
	// Wenn kein 'X' in der Map vorhanden ist
	if (typeof map !== "string" || !map.includes("X")) {
		return "Spaceship lost forever.";
	}	

	// 'X' in einer 1x1 Map
	if (map === "X") {
		return [0,0];
	}
}
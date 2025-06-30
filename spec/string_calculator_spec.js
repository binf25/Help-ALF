describe("findSpaceship", function() {
	
	it("should return 'Spaceship lost forever.' for an empty map", function() {
		// erwartet, dass Funktion existiert und diesen String zurückgibt
		expect(findSpaceship("")).toEqual("Spaceship lost forever.");
	});

	it("should return 'Spaceship lost forever.' for an empty map", function() {
		expect(findSpaceship(".")).toEqual("Spaceship lost forever.");
	});

	it("should return 'Spaceship lost forever.' when 'X' is not present in the map", function() {
		map = ".....\n" +
		      ".....\n" +
			  ".....";

		expect(findSpaceship(map)).toEqual("Spaceship lost forever.");
	});

});
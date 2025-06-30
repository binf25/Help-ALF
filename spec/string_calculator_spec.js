describe("findSpaceship", function() {

	it("should return 'Spaceship lost forever.' for an empty map", function() {
		// erwartet, dass Funktion existiert und diesen String zurückgibt
		expect(findSpaceship("")).toEqual("Spaceship lost forever.");
	});
	
});
describe('Office', function() {

    // Before each statement
    beforeEach(function() {
        room = new Office();
    });

    // Construct
    describe('Constructor', function () {
        it('name by default is untitled', function() {
            expect(room.name).toEqual("Untitled");
        });
        

        it('name can be set on creation', function() {
            roomTitled = new Office("Red")
            expect(roomTitled.name).toEqual("Red");
        });


    });
});
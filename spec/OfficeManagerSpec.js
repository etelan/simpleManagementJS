describe('OfficeManager', function() {

    // Before each statement
    beforeEach(function() {
        storage = new OfficeManager();
        room = new Office("Red")
    });

    // Construct
    describe('Constructor', function () {
        it('blank storage array', function() {
            expect(storage.rooms).toEqual([]);
        });
    });
        
    describe('Add', function () {
        it('Can add a room to storage', function() {
            storage.add(room)
            expect(storage.rooms[0]).toEqual(room);
        });
    });


});
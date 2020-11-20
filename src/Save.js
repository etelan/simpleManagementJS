function saveSlider() {
    console.log("")
    var i;
    len = manager.rooms.length;
    for (i=0; i<len; i++) {
        y = manager.rooms[i].available
        x = document.getElementById(manager.rooms[i].name).checked

        

        if (x != y) {
            console.log("Saved")
            manager.rooms[i].available = !manager.rooms[i].available
        }
    }
}


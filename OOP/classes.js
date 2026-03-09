// create your classes here
class house {
    hasRooms() {
        console.log("Have 4 rooms")
    }
}

class Kitchen extends house {
    hasRooms() {
        super.hasRooms();
        console.log("Contains a fridge and an oven")
    }
}

class Sleep extends house{
    hasRooms() {
        cosnole.log("2 bedrooms")
    }
}

var pentHouse = new house();
var castleHouse = new Kitchen();
pentHouse.hasRooms()
castleHouse.hasRooms()
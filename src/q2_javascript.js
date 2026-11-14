// Question 2 - Arrays and Loops
// Topic: Inventory Tracker
//
// Task 1:
const inventory = [];


// Task 2:
function addItem(itemName) {
    if (inventory.includes(itemName)) {
        console.log(itemName + " is already in inventory.");
    } else {
        inventory.push(itemName);
    }
}


// Task 3:
function listInventory() {
    if (inventory.length === 0) {
        console.log("Inventory is empty.");
    } else {
        console.log("Inventory:", inventory);
    }
}


// Task 4:
addItem("Laptop");
addItem("Mouse");
addItem("Keyboard");
addItem("Mouse");   // Should trigger duplicate warning
listInventory();

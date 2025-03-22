var btnSeeMore;
var btnAddSheets;
var modalSheetDetails;  // Model is used for show sheet details on the click on See more... on Sheet In Stock
var modalAddSheetsDetails;  // Model is used for show sheet details on the click on See more... on Sheet In Stock

$(document).ready(function () {
    modalSheetDetails = document.getElementById("showsheetdetailsModal");
    modalAddSheetsDetails = document.getElementById("addSheetsdetailsModel");
    AddSheets()
});


//=== SHOW PARY DETAILS MODEL =============================


// close all span element that closes the modal
function closeModel() {
    modalSheetDetails.style.display = "none";
    modalAddSheetsDetails.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalSheetDetails) {
        modalSheetDetails.style.display = "none";
    }
    else if (event.target == modalAddSheetsDetails) {
        modalAddSheetsDetails.style.display = "none";
    }
}

//=== END SHOW PARY DETAILS MODEL =============================

function ShowMore(detailCount) {
    // Get the button that opens the modal
    btnSeeMore = document.getElementById("seemore" + detailCount);
    modalSheetDetails.style.display = "block";
}

function AddSheets() {
    // Get the button that opens the modal
    btnAddSheets = document.getElementById("addSheets");
    modalAddSheetsDetails.style.display = "block";
}

function SheetsDetails(sheetID) {
    alert("Sheets Details")
}
function SheetsEdit(sheetID) {
    alert("Sheets Edit")
}
function SheetsDelete(sheetID) {
    alert("Sheets Delete")
}

function SelectPartyName(value){
    console.log(value);
    //alert("dropdown")
}
function SelectSheetName(){
    console.log();
    //alert("dropdown")
}
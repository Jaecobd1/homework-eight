$(document).ready(function() {
    initListeners();
    console.log(MODEL.myName)
    MODEL.updateView("homeContent");
});








function initListeners() {
    //This stores the id from the anchor tag 
    $("nav a").click(function(e) {
        let btn = e.currentTarget.id;
        console.log("a id " + btn);

        let contentID = btn + "Content"

        MODEL.updateView(contentID)


        if (btn == "cbc") {
            $("nav").css("background-color", "red");
        }
    });
}
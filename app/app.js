$(document).ready(function() {
    initListeners();
});


var homeContent = `<h1>HOME</h1>  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi deserunt quod. Ea dolorem assumenda officia voluptas quidem laboriosam aut deserunt quo, fuga nisi cupiditate.</p>
        <p>Magni rerum, aliquid beatae, accusantium voluptates odit iure consequatur debitis, nostrum maxime nam veniam distinctio in? A quibusdam quis laborum. Minima pariatur dolorum natus recusandae.</p>
        <p>Veritatis eum laboriosam non, dolore aperiam ad libero praesentium. Accusamus cum perspiciatis, consequuntur, fugit ullam ducimus eveniet, perferendis corporis recusandae iste quod ut quia similique.</p>`;
var aboutContent = `<h1>About</h1>  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi deserunt quod. Ea dolorem assumenda officia voluptas quidem laboriosam aut deserunt quo, fuga nisi cupiditate.</p>
        <p>Magni rerum, aliquid beatae, accusantium voluptates odit iure consequatur debitis, nostrum maxime nam veniam distinctio in? A quibusdam quis laborum. Minima pariatur dolorum natus recusandae.</p>
        <p>Veritatis eum laboriosam non, dolore aperiam ad libero praesentium. Accusamus cum perspiciatis, consequuntur, fugit ullam ducimus eveniet, perferendis corporis recusandae iste quod ut quia similique.</p>`;
var productsContent = `<h1>Products</h1>  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi deserunt quod. Ea dolorem assumenda officia voluptas quidem laboriosam aut deserunt quo, fuga nisi cupiditate.</p>
        <p>Magni rerum, aliquid beatae, accusantium voluptates odit iure consequatur debitis, nostrum maxime nam veniam distinctio in? A quibusdam quis laborum. Minima pariatur dolorum natus recusandae.</p>
        <p>Veritatis eum laboriosam non, dolore aperiam ad libero praesentium. Accusamus cum perspiciatis, consequuntur, fugit ullam ducimus eveniet, perferendis corporis recusandae iste quod ut quia similique.</p>`;
var contactContent = `<h1>Contact</h1>  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi deserunt quod. Ea dolorem assumenda officia voluptas quidem laboriosam aut deserunt quo, fuga nisi cupiditate.</p>
        <p>Magni rerum, aliquid beatae, accusantium voluptates odit iure consequatur debitis, nostrum maxime nam veniam distinctio in? A quibusdam quis laborum. Minima pariatur dolorum natus recusandae.</p>
        <p>Veritatis eum laboriosam non, dolore aperiam ad libero praesentium. Accusamus cum perspiciatis, consequuntur, fugit ullam ducimus eveniet, perferendis corporis recusandae iste quod ut quia similique.</p>`;





function initListeners() {
    //This stores the id from the anchor tag 
    $("nav a").click(function(e) {
        let btn = e.currentTarget.id;
        console.log("a id " + btn);

        let contentID = btn + "Content"
        console.log(contentID);

        $("#app").html(eval(contentID));

        if (btn == "cbc") {
            $("nav").css("background-color", "red");
        }
    });
}
var MODEL = (function() {
    var _homeContent = `<h1>HOME</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum animi deserunt quod. Ea dolorem assumenda officia voluptas quidem laboriosam aut deserunt quo, fuga nisi cupiditate.</p>
    <p>Magni rerum, aliquid beatae, accusantium voluptates odit iure consequatur debitis, nostrum maxime nam veniam distinctio in? A quibusdam quis laborum. Minima pariatur dolorum natus recusandae.</p>
    <p>Veritatis eum laboriosam non, dolore aperiam ad libero praesentium. Accusamus cum perspiciatis, consequuntur, fugit ullam ducimus eveniet, perferendis corporis recusandae iste quod ut quia similique.</p>
    <h2> Some Images taken by Jake Dobler </h2>
    <div class="imageContainer"> <div class="image">
        <img src="./images/sunset.jpeg" alt="">
    </div>
    <div class="image">
        <img src="./images/Chi.jpeg" alt="">
    </div>
    </div>`;
    var _aboutContent = `<h1>About</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui esse, facilis dolorem sequi deserunt. Suscipit dolorum, in necessitatibus minima at illo blanditiis perferendis veniam quasi obcaecati. Nisi!</p>
        <p>Doloribus magni qui ratione, veniam beatae perferendis possimus perspiciatis aperiam ipsam unde a voluptate quis reprehenderit illum. Excepturi pariatur nostrum sed inventore? Mollitia deleniti tempora ipsam architecto temporibus.</p>
        <p>Iure animi quaerat, molestias voluptate cumque corporis at, fugit, assumenda voluptates enim inventore libero dolor laborum illo velit perspiciatis saepe? Saepe maxime a temporibus laudantium dolores delectus alias.</p>
        <div class="about">
            <div class="image">
                <img src="./images/jake.jpeg" alt="">
            </div>
            <div class="bio">
                <div class="title">Jake Dobler</div>
                <span>
                    Jake is a web development Student through IUPUI. He is enjoys using HTML CSS JavaScript and has taken classes in python and c# through Ivy Tech.
                </span>
            </div>
        </div>`;
    var _productsContent = `<h1>Products</h1>
        <p><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eum sed iste odio nobis fugiat beatae.</span><span>Hic tempora corrupti totam libero cupiditate vero cumque labore, est assumenda molestiae, animi nulla possimus aliquid.</span><span>Optio, ad? Quo temporibus, quasi, et, voluptatibus obcaecati optio consequatur nam quibusdam eligendi vero illum corrupti.</span></p>
        <h2>A little Product Photograhy by Jake Dobler</h2>
        <div class="imageContainer ">
            <div class="image product">
                <img src="./images/Camohat2.png" alt="">
            </div>
            <div class="image product">
                <img src="./images/Camohat3.png" alt="">
            </div>
            <div class="image product">
                <img src="./images/Earmuffs6.png" ">
            </div>
            <div class="image product ">
                <img src="./images/Grey Beanie.png " ">
            </div>
        </div>`;
    var _contactContent = `<h1>Contact</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta, ea animi modi, dolor optio pariatur assumenda quasi ducimus dolorum culpa illo enim iste!</p>
        <p>Accusamus dolorem aspernatur explicabo molestias architecto nisi id exercitationem reprehenderit maiores nihil eius eligendi sequi, tenetur ab pariatur molestiae! Ullam eveniet laborum dolorem enim.</p>
        <p>Quod laboriosam dolor, sapiente quia atque aperiam repudiandae ex, in ullam, aliquam minima tempora suscipit natus sit sint culpa voluptates excepturi nihil totam voluptate.</p>
        <div class="form">
            <form action="">
                <input type="text" name="name" id="name" placeholder="Name...">
                <input type="email" name="email" id="email" placeholder="Email...">
                <input type="text" name="message" id="message" placeholder="Message...">
                <button>Submit</button>
            </form>
        </div>
        `;
    $("#app").html(_homeContent);

    var _updateView = function(pageName) {
        console.log("Model" + pageName);
        var pageContent = "_" + pageName;
        $("#app").html(eval(pageContent));

    }


    return {
        updateView: _updateView,


    }


})();
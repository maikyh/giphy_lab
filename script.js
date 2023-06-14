console.log("Hello");

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
        const apiKey = "llt6gQmigNxehMdFG50BTDZVcBNzv6Mq";
        const searchTerm = "Hello";
        const url = `https://api.giphy.com/v1/channels/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}`;
        
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.data[0]);

    }
    catch (error) {
        console.log(error);
    }

    //https://api.giphy.com/v1/channels/search?api_key=llt6gQmigNxehMdFG50BTDZVcBNzv6Mq&q=Hello

    console.log("Button Clicked!");
});


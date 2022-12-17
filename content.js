//const searchbox = document.querySelector("#searchbox");
//
//if (searchbox) {
//    query = searchbox.value;
//    location.href = "https://google.com/search?q=" +  query.replace(" ", "+");
//}

const query = new URLSearchParams(location.search);
location.href = "https://google.com/search?q=" +  query.get("q").replace(" ", "+");
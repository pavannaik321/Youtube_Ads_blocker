

function load(){
if (document.querySelector("div.ad-showing")) {

    console.log("this is an ads")
    window.location.reload();
}
else {
    console.log("not an ads")
}
}
setInterval(load,1000);
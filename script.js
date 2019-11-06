window.onload = function () {
    if (localStorage.getItem("data")) {
        let object = JSON.parse(localStorage.getItem("data"));
        let arr = ["name", "secondname"];
        arr.forEach(element => {
            if (document.getElementById(element))
                document.getElementById(element).value = object[element];
        });
    }
}
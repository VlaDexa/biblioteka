document.getElementById("form").onsubmit = function (evt) {
    localStorage.clear();
    evt.preventDefault();
    console.log(evt);
    let object = {};
    for (let i = 0; i < 7; i++) {
        object[evt.target[i].name] = evt.target[i].value;
    }
    localStorage.setItem("data", JSON.stringify(object));
}
window.onload = function () {
    if (localStorage.getItem("data")) {
        let object = JSON.parse(localStorage.getItem("data"));
        let arr = ["name", "secondname", "fathername", "email", "password", "date", "gender"];
        arr.forEach(element => {
            if (document.getElementById(element))
                document.getElementById(element).value = object[element];
        });
    }
}
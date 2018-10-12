document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button[type='submit']").onclick = function (e) {
        e.preventDefault();
        var isValid = true;
        if (document.querySelector("input[name='name']").validity.valueMissing) {
            document.querySelector("input[name='name']").nextElementSibling.innerText = "Vui long nhap ten";
            isValid = false;
        } else {
            document.querySelector("input[name='name']").nextElementSibling.innerHTML = "";
        }
        if (document.querySelector("input[name='email']").validity.valueMissing) {
            document.querySelector("input[name='email']").nextElementSibling.innerText = "Vui long nhap email";
            isValid = false;
        } else {
            document.querySelector("input[name='email']").nextElementSibling.innerHTML = "";
        }
        if (document.querySelector("input[name='phone']").validity.valueMissing) {
            document.querySelector("input[name='phone']").nextElementSibling.innerText = "Vui long nhap so dien thoai";
            isValid = false;
        } else {
            document.querySelector("input[name='phone']").nextElementSibling.innerHTML = "";
        }

        if(isValid) {
            alert("name: " + document.querySelector("input[name='name']").value + "\n"
                + "email: " + document.querySelector("input[name='email']").value + "\n"
                + "phone: " + document.querySelector("input[name='phone']").value);
        }
    };
});
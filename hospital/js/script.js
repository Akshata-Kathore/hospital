function validateform() {
    var cname = document.myform.name.value;
    var number = document.myform.number.value;

    if (cname == null || cname == "") {
        alert("Name cannot be blank");
        return false;
    }
    else if (number.length != 10) {
        alert("Enter valid phone number");
        return false;
    }
}

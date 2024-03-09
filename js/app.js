function handleEditProfile() {
    let oldName = document.getElementById("user-name").textContent;
    let oldEmail = document.getElementById("user-email").textContent;
    let oldInterests = document.getElementById("user-interests").textContent;
    let datepicker = new Datepicker('#input-birthdate');

    document.getElementById("input-name").value = oldName
    document.getElementById("input-email").value = oldEmail
    document.getElementById("input-interests").value = oldInterests

    document.getElementById("user-data").style.display = "none";
    document.getElementById("user-data-edit").style.display = "block";

}

function handleUpdateProfile() {
    let newName = document.getElementById("input-name").value;
    let newEmail = document.getElementById("input-email").value;
    let newInterests = document.getElementById("input-interests").value;

    document.getElementById("user-name").textContent = newName
    
    if (validator.isEmail(newEmail)) {
        document.getElementById("user-email").textContent = newEmail
    } else {
        alert("Please provide an valid email format.")
    }
    
    document.getElementById("user-interests").textContent = newInterests

    document.getElementById("user-data").style.display = "block";
    document.getElementById("user-data-edit").style.display = "none";
}


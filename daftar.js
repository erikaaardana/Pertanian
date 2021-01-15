function addItem(IdTable)
{
    var nama = document.getElementsByName("nama")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var telepon = document.getElementsByName("telepon")[0].value;
    var alamat = document.getElementsByName("alamat")[0].value;
    var provinsi = document.getElementsByName("provinsi")[0].value;
    var kabupaten = document.getElementsByName("kabupaten")[0].value;
    var kecamatan = document.getElementsByName("kecamatan")[0].value;
    var desa = document.getElementsByName("desa")[0].value;

    HtmlText = "<tr>" +
    "<td>" + nama + "</td>" +
    "<td>" + email + "</td>" + 
    "<td>" + telepon + "</td>" + 
    "<td>" + alamat+ "</td>" + 
    "<td>" + provinsi + "</td>" + 
    "<td>" + kabupaten + "</td>" + 
    "<td>" + kecamatan + "</td>" +  
    "<td>" + desa + "</td>" + 
    "</tr>";

    document.getElementById(IdTable).innerHTML += HtmlText;
    alert("Biodata anda sudah tersimpan")

    document.getElementById("formreset").reset();
    return false;
}
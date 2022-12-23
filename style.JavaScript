function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}

var paragraph = document.getElementById("text");
var time = new Date();
var hour = time.getHours();
if (hour <= 12) {
    paragraph.innerHTML =
        '<b>Selamat Pagi <b>'

} else if (hour <= 15) {
    paragraph.innerHTML =
        '<b>Selamat Siang <b>'

} else if (hour <= 18) {
    paragraph.innerHTML =
        '<b>Selamat Sore <b>'

} else {
    paragraph.innerHTML =
        '<b>Selamat Malam <b>'

}

var date = document.getElementById("date");
var hri = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

var bln = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

var hari = new Date().getDay();
var tanggal = new Date().getDate();
var bulan = new Date().getMonth();
var tahun = new Date().getFullYear();

var Hari = hri[hari];
var Bulan = bln[bulan];

date.innerHTML = Hari + ' ' + tanggal + " " + Bulan + ' ' + tahun;
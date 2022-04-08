// Navigasyon butonu onClick metodu
function toggleNavigation() {
    let nav = document.getElementById("mobile-nav");
    if (nav.classList.contains('w3-show')) {
        nav.classList.remove('w3-show');
    } 
    else { 
        nav.classList.add('w3-show');
    }
}
// JQuery kullanarak cv dosyasina ait ayri bir html hazirlanmasi ve cikti dosyasi olusturulmasi
$('#downloadCV').click(function () {
    var w = window.open();
    var header= $("#home").html();
    var field= $("#resume").html();
    var field2= $("#contact").html();

    var html = "<!DOCTYPE HTML>";
    html += '<html lang="en-us">';
    html += '<head><style></style></head>';
    html += "<body>";
    
    if(header != null) html += header + "<br/><br/>";
    if(field != null) html += field + "<br/><br/>";
    if(field2 != null) html += field2 + "<br/><br/>";
    html += "</body>";
    w.document.write(html);
    w.window.print();
    w.document.close();
    w.close();
});

// Bazi iconlarin belirlenen ozellikler ile yeniden yuklenmesi ve yerlestirilmesi(data-feather)
// İlgili GitHub sayfasi: https://github.com/feathericons/feather
feather.replace();
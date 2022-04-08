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
// Bazi iconlarin belirlenen ozellikler ile yeniden yuklenmesi ve yerlestirilmesi(data-feather)
// İlgili GitHub sayfasi: https://github.com/feathericons/feather
feather.replace();
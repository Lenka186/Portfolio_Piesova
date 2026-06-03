document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navigacia');

    if(!btn || !nav) return;

    btn.addEventListener('click', function(e){
        const isOpen = btn.classList.toggle('open');
        nav.classList.toggle('navigacia--open', isOpen);
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close when clicking a link
    nav.addEventListener('click', function(e){
        if(e.target.matches('.navigacia__link')){
            btn.classList.remove('open');
            nav.classList.remove('navigacia--open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });

    // close when clicking outside
    document.addEventListener('click', function(e){
        if(!nav.contains(e.target) && !btn.contains(e.target)){
            btn.classList.remove('open');
            nav.classList.remove('navigacia--open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});
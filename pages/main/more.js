const more = document.querySelector('.more');
const aside = document.querySelector('.aside-inner');
const benefits = document.querySelector('.benefits');
const toggleMore = function() {
    openMore();
}

more.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMore();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_aside = target == aside || aside.contains(target);
    const its_more = target == more;
    const aside_is_active = aside.classList.contains('more-show');

    if (!its_aside && !its_more && aside_is_active) {
        toggleMore();
    }
});


function openMore() {
    document.querySelector(".aside-inner").classList.toggle("more-show");
    document.querySelector(".benefits").classList.toggle("mobile-opacity");
}
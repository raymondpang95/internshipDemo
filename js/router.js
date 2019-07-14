$('#header').load('./shared/header.html');
$('#headerEmployer').load('./shared/headerEmployer.html');
$('#footer').load('./shared/footer.html', function () {
    if (document.querySelector(".high").clientHeight > (window.innerHeight - 112)) {
        document.querySelector(".foot").classList.remove("position-fixed");
    }
});
$('#footerFixed').load('./shared/footerFixed.html');




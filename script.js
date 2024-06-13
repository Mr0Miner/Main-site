function copyCode(buttonId) {
    var button = document.getElementById(buttonId);
    var codeElement = button.previousElementSibling; // Assuming code is right before the button
    var range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    var checkIcon = button.querySelector('.copy-check');
    checkIcon.style.display = 'inline';
    setTimeout(() => {
        checkIcon.style.display = 'none';
    }, 2000);
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

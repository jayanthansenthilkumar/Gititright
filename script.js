const getStartedBtn = document.getElementById('get-started');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function() {
        window.location.href = "git.html";
    });
}

const backHomeBtn = document.getElementById('back-home');
if (backHomeBtn) {
    backHomeBtn.addEventListener('click', function() {
        window.location.href = "index.html";
    });
}
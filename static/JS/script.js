
function showLoading() {
    document.getElementById('loading').classList.add('active');
}
function hideLoading() {
    document.getElementById('loading').classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('predictionForm');
    form.addEventListener('submit', function () {
        showLoading();
    });
});

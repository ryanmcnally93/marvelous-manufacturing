function changeAreaImage(area) {
    area.style.display = 'flex';
    let type = area.id;
    let image = document.getElementById(type + '-image');
    // image.style.display = 'none';
    area.style.cursor = 'pointer';
    area.style.border = '1px solid blue';
    area.style.backgroundColor = 'white';
    area.style.opacity = '0.8';
}

function changeAreaImageBack(area) {
    area.style.display = 'none';
    let type = area.id;
    let image = document.getElementById(type + '-image');
    image.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});
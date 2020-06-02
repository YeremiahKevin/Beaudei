var listImage = [];
var index = 0;

window.onload = function() {
    var img1 = $('#img1');
    var img2 = $('#img2');
    var img3 = $('#img3');

    img2.hide();
    img3.hide();

    listImage.push(img1);
    listImage.push(img2);
    listImage.push(img3);

    document.getElementById('slider-dot').innerHTML = '';
    for (var i = 0 ; i < 3 ; i++) {
        if (i === index) {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1 bg-blue"></div>';
        } else {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1"></div>';
        }
    }
};

function onPreviousEvent() {
    listImage[index].hide();

    if (index === 0) {
        index = 2;
    } else {
        index -= 1;
    }

    listImage[index].show();

    document.getElementById('slider-dot').innerHTML = '';
    for (var i = 0 ; i < 3 ; i++) {
        if (i === index) {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1 bg-blue"></div>';
        } else {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1"></div>';
        }
    }
}

function onNextEvent() {
    listImage[index].hide();

    if (index === 2) {
        index = 0;
    } else {
        index += 1;
    }

    listImage[index].show();

    document.getElementById('slider-dot').innerHTML = '';
    for (var i = 0 ; i < 3 ; i++) {
        if (i === index) {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1 bg-blue"></div>';
        } else {
            document.getElementById('slider-dot').innerHTML += '<div class="dot mx-1"></div>';
        }
    }
}

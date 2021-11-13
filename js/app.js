let contextSW = '/20213-PWA-U2-P7/sw.js';
let url = window.location.href;

let player = $('#player');
let photoUser = $('#photoUser');

let btnCamara = $('#btnCamara');
let btnCamaraBack = $('#btnCamaraBack');
let btnTakePhoto = $('#btnTakePhoto');

const camera = new Camera(player[0]);

btnCamara.on('click', () => {
    
    camera.on()
        .then(result => {
            if (!result) {
                alert('Error al iniciar cámara');
            }
        });

});

btnCamaraBack.on('click', function(){
    camera.onBack()
        .then(result => {
            if (!result) {
                alert('Error al iniciar cámara');
            }
        });
});

btnTakePhoto.on('click', function(){
    camera.off();
    photoUser.attr('src',camera.takePhoto());
});

if (navigator.serviceWorker) {
    if (url.includes('localhost')) {
        contextSW = '/sw.js';
    }

    navigator.serviceWorker.register(contextSW);
}
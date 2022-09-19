const $form = document.querySelector('form');

$form.addEventListener('submit', loadingSpin);
$("#number").mask("(99) 9.9999-9999")

function loadingSpin (){
    const $btn = document.getElementById('submit-btn');
    $btn.innerHTML = '<img src="./assets/img/loading.png" class="loading">'
};



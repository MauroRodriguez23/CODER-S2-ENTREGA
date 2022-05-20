 let btnInterruptor = document.querySelector('#interruptor');
 
 btnInterruptor.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnInterruptor.classList.toggle('active');

    
    if(document.body.classList.contains('dark')){
         localStorage.setItem('modo_dark', 'true');
    } else {
        localStorage.setItem('modo_dark', 'false');
    }

});

    if(localStorage.getItem('modo_dark') === 'true') {
        document.body.classList.add('dark');
        btnInterruptor.classList.add('active');
    } else {
        document.body.classList.remove('dark');
        btnInterruptor.classList.remove('active');
    }


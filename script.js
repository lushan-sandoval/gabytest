/* onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 500);
}; */
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.min.js";
document.body.appendChild(sweetAlertScript);

sweetAlertScript.onload = () => {
    // Función para mostrar los mensajes de amor secuencialmente
    function showLoveMessages() {
        Swal.fire({
            title: '❤️',
            text: 'Eres la historia más bonita que el destino escribió en mi vida',
            //icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente'
        }).then(() => {
            Swal.fire({
                title: '❤️',
                text: 'Gracias por esos lindos momentos.',
                //icon: 'info',
                showConfirmButton: true,
                confirmButtonText: 'Siguiente'
            }).then(() => {
                Swal.fire({
                    title: '❤️',
                    text: '!!!!!!!!!!!!❤️.',
                    //icon: 'info',
                    showConfirmButton: true,
                    confirmButtonText: 'Empezar'
                }).then(() => {
                    // Después de mostrar los mensajes, iniciamos la animación de las flores
                    startAnimation();
                });
            });
        });
    }

        // Función para iniciar la animación de las flores mensaje muestra uno sobre otro cambiar en el css la posicion de los nombres en el mismo punto
        //function startAnimation() {
        //    const titulo1 = document.getElementById('titulo1');
        //    const titulo2 = document.getElementById('titulo2');
        //
        //    titulo1.classList.add('titulo-visible'); // Hace el primer título visible
        //
        //    setTimeout(() => {
        //        titulo1.style.opacity = 0; // Inicia la transición de opacidad a 0
        //        setTimeout(() => {
        //            titulo1.style.display = 'none'; // Oculta completamente el primer título
        //            titulo2.classList.add('titulo-visible'); // Hace el segundo título visible
        //        }, 2000); // Espera 3 segundos (duración de la transición) antes de ocultar y mostrar el segundo
        //    }, 10000); // Espera 20 segundos antes de ocultar el primer título

        // Función para iniciar la animación de las flores
        function startAnimation() {
            const titulo1 = document.getElementById('titulo1');
            const titulo2 = document.getElementById('titulo2');

            titulo1.classList.add('titulo-visible'); // Hace el primer título visible

            setTimeout(() => {
                titulo2.classList.add('titulo-visible'); // Hace el segundo título visible
            }, 3500); // Espera 4 = 4000 segundos para mostrar el segundo título

        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 500);
    }

    // Mostrar los mensajes de amor antes de iniciar la animación
    showLoveMessages();
};
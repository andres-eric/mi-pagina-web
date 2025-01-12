// script.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    const formulario = document.querySelector("#contact-form");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado de recarga
            const formData = new FormData(formulario);

            // Enviar datos con Formspree
            fetch(formulario.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.ok) {
                        alert("Correo enviado con éxito. Gracias por contactarnos.");
                        formulario.reset(); // Limpia el formulario después de enviarlo
                    } else {
                        alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.");
                    }
                })
                .catch((error) => {
                    console.error("Error al enviar el formulario:", error);
                    alert("Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde.");
                });
        });
    } else {
        console.error("No se encontró el formulario en el DOM");
    }
});

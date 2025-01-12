// script.js

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // -------------------- Año dinámico --------------------
    const yearElement = document.getElementById("current-year"); // Selecciona el elemento del año
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear(); // Establece el año actual
        console.log("Año actualizado correctamente");
    } else {
        console.error("No se encontró el elemento con ID 'current-year'");
    }

    // -------------------- Formulario --------------------
    const formulario = document.querySelector("#contact-form");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(formulario);

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
                        formulario.reset();
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

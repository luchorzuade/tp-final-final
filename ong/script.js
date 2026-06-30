const zonaTop = document.getElementById("zona-donacion-top");

let divModuloDonacion = document.createElement("div");

zonaTop.appendChild(divModuloDonacion);

divModuloDonacion.classList.add("modulo-donacion-js");

divModuloDonacion.innerHTML = `
    <button id="btn-abrir-form" class="btn-donar-gigante">❤️ Donar Ahora</button>
    
    <div id="caja-formulario" style="display: none;">
        <h2>Tu ayuda cambia finales</h2>
        <form id="form-datos-donacion">
            <input type="text" placeholder="Nombre completo" required>
            <input type="email" placeholder="Correo electrónico" required>
            <select required>
                <option value="" disabled selected>Elegí tu aporte...</option>
                <option value="5000">Aliado - $5.000</option>
                <option value="10000">Protector - $10.000</option>
                <option value="20000">Héroe - $20.000</option>
            </select>
            <button type="submit" class="btn-enviar-donacion">Confirmar Donación</button>
        </form>
    </div>
`;

const btnAbrir = document.getElementById("btn-abrir-form");
const cajaForm = document.getElementById("caja-formulario");
const formDonacion = document.getElementById("form-datos-donacion");

btnAbrir.addEventListener("click", function() {
    btnAbrir.style.display = "none";
    cajaForm.style.display = "block";
});

formDonacion.addEventListener("submit", function(evento) {
    evento.preventDefault();
    cajaForm.innerHTML = "<h3 style='color: #FF7F50;'>¡Gracias de corazón! Nos pondremos en contacto pronto para coordinar el pago. 🐾</h3>";
});
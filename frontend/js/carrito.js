let eliminaModal = document.getElementById('eliminaModal')
eliminaModal.addEventListener('show.bs.modal', function(event) {
    // Button that triggered the modal
    let button = event.relatedTarget
    // Extract info from data-bs-* attributes
    let recipient = button.getAttribute('data-bs-id')
    let botonElimina = eliminaModal.querySelector('.modal-footer #btn-elimina')
    botonElimina.value = recipient
})

function actualizaCantidad(cantidad, id) {

    let url = 'clases/actualizar_carrito.php';
    let formData = new FormData();
    formData.append('action', 'agregar');
    formData.append('id', id);
    formData.append('cantidad', cantidad);

    fetch(url, {
            method: 'POST',
            body: formData,
            mode: 'cors',
        }).then(response => response.json())
        .then(data => {
            if (data.ok) {
                let divSubtotal = document.getElementById('subtotal_' + id)
                divSubtotal.innerHTML = data.sub

                let total = 0.00
                let list = document.getElementsByName('subtotal[]')

                for (var i = 0; i < list.length; ++i) {
                    total += parseFloat(list[i].innerHTML.replace(/[$,]/g, ''))
                }

                total = new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2
                }).format(total)
                document.getElementById("total").innerHTML = '$' + total
            }
        })
}

function elimina() {
    let botonElimina = document.getElementById('btn-elimina')
    let recipient = botonElimina.value

    let url = 'clases/actualizar_carrito.php';
    let formData = new FormData();
    formData.append('action', 'eliminar');
    formData.append('id', recipient);

    fetch(url, {
            method: 'POST',
            body: formData,
            mode: 'cors',
        }).then(response => response.json())
        .then(data => {
            if (data.ok) {
                location.reload();
            }
        })
    $('#eliminaModal').modal('hide')
}
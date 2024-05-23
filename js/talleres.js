fetch('https://raw.githubusercontent.com/TetePrueba/api-talleres/main/talleres.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('No responde la red');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let talleres = data.talleres;
        let html = '';
        talleres.forEach(taller => {
            html += `
            <div class="taller">
                <h2>${taller.nombre}</h2>
                <p>Dirección: ${taller.direccion}</p>
                <p>Detalles: ${taller.detalles}</p>
            </div>
            `;
        });
        document.getElementById('talleres').innerHTML = html;
    })
    .catch(error => console.log('Error:', error));

    
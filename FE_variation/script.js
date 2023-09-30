function cribaEratostenes(n) {
    const esPrimo = new Array(n + 1).fill(true);
    esPrimo[0] = esPrimo[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (esPrimo[p]) {
            for (let i = p * p; i <= n; i += p) {
                esPrimo[i] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (esPrimo[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function generarTabla(filas, columnas) {
    const table = document.createElement('table');
    table.classList.add('prime-table');

    let num = 1;

    for (let i = 0; i < filas; i++) {
        const row = table.insertRow();

        for (let j = 0; j < columnas; j++) {
            const cell = row.insertCell();
            if (num === 1) {
                cell.textContent = num;
                cell.classList.add('blue');
            } else if ((num - 2) % 2 === 0) {
                cell.textContent = num;
                cell.classList.add('red');
            } else if ((num - 3) % 3 === 0) {
                cell.textContent = num;
                cell.classList.add('yellow');
            } else if ((num - 5) % 5 === 0) {
                cell.textContent = num;
                cell.classList.add('green');
            } else if ((num - 7) % 7 === 0) {
                cell.textContent = num;
                cell.classList.add('orange');
            } else {
                cell.textContent = num;
            }
            num++;
        }
    }

    return table;
}

function calcularCriba() {
    const limit = parseInt(document.getElementById('limit').value);
    const primes = cribaEratostenes(limit);

    const output = document.getElementById('output');
    output.innerHTML = `<p>Criba de Aristóteles (Números primos hasta ${limit}, son):<br>${primes.join(', ')}</p>`;

    const table = generarTabla(10, 10);
    output.appendChild(table);
}

// Inicializar la tabla con valores predeterminados
calcularCriba();

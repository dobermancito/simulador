alert('Por favor, ingresar los datos en los espacios.')
function gen_table() {
    document.getElementById("tab").innerHTML = "";
    let n = Number(document.getElementById("dinero").value);
    let n2 = Number(document.getElementById("cuota").value);
    let n3 = Number(document.getElementById("interes").value);
    if (n > 0) {
        for (i = 1; i <= n2; i++) {
            ca = n / n2;
            d1 = ca.toFixed(2);
            i2 = ((n * n3) / 100) / n2;
            d2 = i2.toFixed(2);
            r = ca + i2;
            d3 = r.toFixed(2);
            document.getElementById("tab").innerHTML = `${document.getElementById("tab").innerHTML}<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1 = n.toFixed(2);
        t_i = i2 * n2;
        d4 = t_i.toFixed(2);
        t_p = r * n2;
        d5 = t_p.toFixed(2);
        document.getElementById("t1").innerHTML = n1;
        document.getElementById("t2").innerHTML = d4;
        document.getElementById("t3").innerHTML = d5;
    }
    else {
        alert("Falta ingresar el valor a prestar");
    }
    if (n2 > 0) {
    }
    else {
        alert("Falta ingresar las cuotas");
    }
    if (n3 > 0) {
    }
    else {
        alert("Falta ingresar los intereres");
    }
}
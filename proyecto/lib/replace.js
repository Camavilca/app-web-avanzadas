
exports.replace = (objetivo, reemplazados) => {

    var encontrados = objetivo.match(/%(.*?)%/g);

    console.log(encontrados);
    

    if (encontrados) {

        var nombre_param = null;
        var valor_reemplazo = null;

        for (let i = 0; i < encontrados.length; i++) {
            nombre_param = encontrados[i].replace(/%/g, '');
            console.log(nombre_param);

            valor_reemplazo = reemplazados[nombre_param];
            objetivo = objetivo.replace(encontrados[i], valor_reemplazo);
        }

    }

    return objetivo;

};
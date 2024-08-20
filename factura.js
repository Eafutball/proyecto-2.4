document.addEventListener('DOMContentLoaded', () => {
    // Obtener la factura del almacenamiento local
    const facturaJson = localStorage.getItem('factura');
    
    // Si no hay factura en el almacenamiento local, mostrar un mensaje
    if (!facturaJson) {
        document.body.innerHTML = '<div class="container"><div class="alert alert-danger" role="alert">No se encontró ninguna factura en el almacenamiento local.</div></div>';
        return;
    }
    
    // Parsear el JSON a un objeto JavaScript
    const factura = JSON.parse(facturaJson);
    
    // Actualizar los datos de la factura en la página
    document.getElementById('fecha').textContent = new Date(factura.fecha).toLocaleDateString();
    document.getElementById('numeroFactura').textContent = `Número de Factura: ${factura.numeroFactura}`;
    
    // Datos del vendedor
    document.getElementById('vendedorNombre').textContent = `Nombre: ${factura.datosVendedor.nombre}`;
    document.getElementById('vendedorDireccion').textContent = `Dirección: ${factura.datosVendedor.direccion}`;
    document.getElementById('vendedorTelefono').textContent = `Teléfono: ${factura.datosVendedor.telefono}`;
    document.getElementById('vendedorCorreoElectronico').textContent = `Correo Electrónico: ${factura.datosVendedor.correoElectronico}`;
    document.getElementById('vendedorNIF').textContent = `NIF: ${factura.datosVendedor.nif}`;
    
    // Datos del comprador
    document.getElementById('compradorNombre').textContent = `Nombre: ${factura.datosComprador.nombre}`;
    document.getElementById('compradorDireccion').textContent = `Dirección: ${factura.datosComprador.direccion}`;
    document.getElementById('compradorCorreoElectronico').textContent = `Correo Electrónico: ${factura.datosComprador.correoElectronico}`;
    
    // Detalles de la compra
    const detallesCompra = document.getElementById('detallesCompra');
    
    // Limpiar contenido previo antes de añadir nuevos detalles
    detallesCompra.innerHTML = '';
    
    factura.detallesCompra.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio.toFixed(2)}</td>
            <td>${(item.cantidad * item.precio).toFixed(2)}</td>
        `;
        detallesCompra.appendChild(row);
    });
    
    // Resumen
    document.getElementById('tipoDeEnvio').textContent = `Tipo de Envío: ${factura.tipoDeEnvio}`;
    document.getElementById('total').textContent = `Total: ${factura.total}`;
    document.getElementById('medioPago').textContent = `Medio de Pago: ${factura.medioPago}`;
});

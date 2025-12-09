document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <a href="index.html">Home</a>
            <a href="sobre.html">Sobre</a>
            <a href="servicos.html">Serviços</a>
            <a href="contato.html">Contato</a>
            <a href="area-cliente.html">Área do Cliente</a>
        </nav>
    `;
    document.body.prepend(header);
});

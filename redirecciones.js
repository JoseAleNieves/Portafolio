function openWithDelay(url) {
    setTimeout(() => {
      window.open(url, '_blank');
    }, 500); // 500 milisegundos de retardo (medio segundo)
  }

function descargarPDF() {
  setTimeout(() => {
    const url = './src/curriculum.pdf';

    // Descargar el PDF
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'curriculum.pdf';

    window.open(url, '_blank');
  }, 1000); // Delay de 1000 milisegundos = 1 segundo
}
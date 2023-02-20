const texto="Nací en Argentina en los años 80's. Mi carrera como pintor comienza en el año 2010 y desde entonces he pintado más de un centenar de obras. Aprendí del Maestro Ariel Mlynarzewicz. Mis obras han sido exhibidas en Museos, Galerías y Centros Culturales. Una de mis obras, titulada: 'Huevo o la Gallina' fue seleccionada finalista del Premio Nacional de Pintura: La Pintura y el Campo Argentino, en el marco de la celebración del bicentenario de la patria. Dicha obra, junto a las demás finalistas itineró luego por Museos Nacionales y Galerías, hasta finalmente extraviarse sin dejar rastro...                     ...continuará. Manolo Kebdani (A.K.A.: Manôleo)"
let indice = 0;

function escribirLetra() {
  const textoTipeado = document.getElementById('textotype');
  textoTipeado.textContent += texto[indice];
  indice++;
  if (indice < texto.length) {
    setTimeout(escribirLetra, 60); // ajusta el intervalo de tiempo según tu preferencia
  } else {
    textoTipeado.style.fontSize = '50px';
    textoTipeado.style.color = 'white';
    textoTipeado.style.paddingLeft ='50px'
    textoTipeado.style.paddingRight ='50px'
  }
}

escribirLetra();
  
  
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pikacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push( new Pakiman("Cauchin", 100, 30) );
coleccion.push( new Pakiman("Pikacho", 80, 50) );
coleccion.push( new Pakiman("Tocinauro", 120, 40) );

for (var p of coleccion)
{
  p.mostrar();
}
console.log(coleccion);

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
console.log(text); //"Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops";
console.log(dinosaur); //"triceratops"
dinosaur = dinosaur.toUpperCase();
console.log(dinosaur); //"TRICERATOPS"
text = text.replace("Velociraptor", dinosaur);
console.log(text); //"TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
text = text.substr(0, text.length/2);
console.log(text); //"TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first app"
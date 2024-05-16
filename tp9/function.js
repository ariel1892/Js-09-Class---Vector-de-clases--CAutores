class AnimalData {
    constructor() {
      this.animals = [];
    }
  
    addAnimal(name, surname, nacionality, bestWork, yearPublished, agePublished) {
      this.animals.push({
        name,
        surname,
        nacionality,
        bestWork,
        yearPublished,
        agePublished
      });
    }
  
    generateAnimalTable() {
      const tableBody = document.querySelector('tabla animales');
      tableBody.innerHTML = '';
  
      for (const animal of this.animals) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${animal.name}</td>
          <td>${animal.surname}</td>
          <td>${animal.nacionality}</td>
          <td>${animal.bestWork}</td>
          <td>${animal.yearPublished}</td>
          <td>${animal.agePublished}</td>
        `;
        tableBody.appendChild(row);
      }
    }
  
    countArgentinianNacionality() {
      let count = 0;
      for (const animal of this.animals) {
        if (animal.nacionality === 'Argentino') {
          count++;
        }
      }
      return count;
    }
  
    publishedBetween1960and1980() {
      let count = 0;
      for (const animal of this.animals) {
        if (animal.yearPublished >= 1960 && animal.yearPublished <= 1980) {
          count++;
        }
      }
      return count;
    }
  
    averageAgePublished() {
      let sum = 0;
      for (const animal of this.animals) {
        sum += animal.agePublished;
      }
      return sum / this.animals.length;
    }

    showAnimals() {
      let html = '';
      for (const animal of this.animals) {
        html += `
          
            ${animal.name}
            ${animal.surname}
            ,
        `;
      }
      return html;
    }

  }

  const animalData = new AnimalData();

  animalData.addAnimal('Mario', 'Vargas Llosa', 'Peruano', 'La ciudad y los perros', 1963, 28);
  animalData.addAnimal('Octavio', 'Paz', 'Mexicano', 'El laberinto de la soledad', 1950, 35);
  animalData.addAnimal('Gustavo', 'Adolfo Bécquer', 'Español', 'Rimas y leyendas', 1871, 32);
  animalData.addAnimal('José', 'Saramago', 'Portugués', 'Ensayo sobre la ceguera', 1995, 73);
  animalData.addAnimal('Pablo', 'Neruda', 'Chileno', 'Veinte poemas de amor y una canción desesperada', 1924, 30);
  animalData.addAnimal('William', 'Shakespeare', 'Inglés', 'Hamlet', 1600, 36);
  animalData.addAnimal('Emily', 'Dickinson', 'Estadounidense', 'Poemas', 1890, 50);
  animalData.addAnimal('Fyodor', 'Dostoevsky', 'Ruso', 'Crimen y castigo', 1866, 44);
  

  animalData.generateAnimalTable();

  document.getElementById("resultado1").textContent = "Total de autores de nacionalidad Argentina: " + animalData.countArgentinianNacionality();
  
  document.getElementById("resultado2").textContent = "Autores que publicaron entre 1960 y 1980: " + animalData.publishedBetween1960and1980();
  

  document.getElementById("resultado3").textContent = "Promedio de edad de publicación: " + animalData.averageAgePublished();

  document.getElementById("resultado4").textContent = "Autores registrados: " + animalData.showAnimals();

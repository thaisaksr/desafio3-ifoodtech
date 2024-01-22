//Criando a classe hero e seu construtor contendo os atributos heroName, heroAge, heroVocation.
class hero {
    constructor(heroName, heroAge, heroVocation) {
      this.heroName = heroName;
      this.heroAge = heroAge;
      this.heroVocation = heroVocation;
    }
  
    //Criando o método attack
    attack() {
      //Utilizando a estrutura condicional Switch/Case para definir a mensagem a ser exibida na tela. 
      switch (this.heroVocation) {
        case "mago":
          return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando a mágica FIREBALL!`;
        case "guerreiro":
          return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando sua lendária espada EXCALIBUR!`;
        case "monge":
          return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando suas habilidades em ARTES MARCIAIS!`;
        case "ninja":
          return `O sábio herói chamado ${this.heroName}, um experiente ${this.heroVocation} de ${this.heroAge} anos, atacou usando sua afiada e silenciosa SHURIKEN!`;
        default:
          return `O sábio herói chamado ${this.heroName}, um aprendiz de Rookgaard que ainda não possui vocação de ${this.heroAge} anos, atacou usando um CABO DE VASSOURA!`;
      }
    }
  }
  
  // Criando 5 heróis, 4 com vocações definidas e um sem especificar a vocação. 
  let thaisa = new hero("Thaisa", 36, "mago");
  console.log(thaisa.attack());
  
  let tuany  = new hero("Tuany", 33, "guerreiro");
  console.log(tuany.attack());
  
  let thamara = new hero("Thamara", 26, "monge");
  console.log(thamara.attack());
  
  let danilo = new hero("Danilo", 23, "ninja");
  console.log(danilo.attack());
  
  let nilda = new hero("Nilda",45);
  console.log(nilda.attack());
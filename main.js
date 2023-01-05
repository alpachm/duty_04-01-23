const usuarios = [
  {
    name: "Carolina",
    age: 25,
    color: "blue",
    ocupation: "Aux",
    motivation: `Sueños por cumplir`,
    hobbies: ["Dormir", "Leer", "Estudiar", "Lulú"],
  },
  {
    name: "Cristian",
    age: 19,
    color: "verde",
    ocupation: "musico",
    motivation: `fjdkslfdskjfakljfasdklfjdgodajdgoij`,
    hobbies: ["correr", "leer", "saltar", "comprar"],
  },
  {
    name: "jose gonzales",
    age: 33,
    color: "black",
    ocupation: "DEV",
    motivation: `mejorar codiando todos los dias`,
    hobbies: ["bici", "correr", "futbol", "natación"],
  },
  {
    name: "Alex",
    age: 20,
    color: "morado",
    ocupation: "estudiante",
    motivation: `una vida cómoda`,
    hobbies: ["jugar", "series", "nada", ""],
  },
  {
    name: "Romario",
    age: 22,
    color: "red",
    ocupation: "null",
    motivation: `aprender a codear`,
    hobbies: ["codear", "manejar moto", "comer"],
  },
  {
    name: "Eliseo Torres",
    age: 24,
    color: "Black",
    ocupation: "Electronico",
    motivation: `$`,
    hobbies: ["aprender", "leer", "jugar futbol", "viajar"],
  },
  {
    name: "Derian",
    age: 43,
    color: "blanco",
    ocupation: "ecomerce",
    motivation: `dev`,
    hobbies: ["tennis", "futbol", "tv", "dev"],
  },
  {
    name: "Fernando",
    age: 30,
    color: "Blue",
    ocupation: "Dev",
    motivation: `Money`,
    hobbies: ["Gym", "Run"],
  },
  {
    name: "Diego",
    age: 26,
    color: "blue",
    ocupation: "Piloto",
    motivation: `progress`,
    hobbies: ["dormir", "comer", "dormir", "dormir"],
  },
  {
    name: "Luis",
    age: 25,
    color: "azul casi verde",
    ocupation: "no tengo",
    motivation: `conquistar el mundo`,
    hobbies: ["parkour", "fronton", "codear", "leer"],
  },
  {
    name: "Alex",
    age: 25,
    color: "black&white",
    ocupation: "adviser",
    motivation: `tener una vida de primer mundo xD`,
    hobbies: ["listen music", "study", "echar codigo", "leer"],
  },
];

let ejercicioUno = document.querySelector('.ejercicio__1');

function printUser(array) {
  let html = '';

  array.forEach(({ name, age, color, ocupation, motivation, hobbies }) => {

    function printHobbies(array) {
      let html = '';

      array.forEach((item => {
        html += `
      <li class="list">${item}</li>
      `
      }))

      return html;
    }

    html += `
    <table border="1">
                <thead>
                    <th colspan="2">Usuario</th>
                </thead>
                <tr>
                    <th>Nombre</th>
                    <td>${name}</td>
                </tr>
                <th colspan="2" class="thcenter" ><b>${age} - ${color} - ${ocupation}</b></th>
                <tr>
                    <th>Motivación</th>
                    <td><i>${motivation}</i></td>
                </tr>
                <tr>
                    <th>Hobbies</th>
                    <td>${printHobbies(hobbies)}</td>
                </tr>
            </table>
        </div>
    `
  })

  ejercicioUno.innerHTML = html;
}

printUser(usuarios);

// -----------------------------SEGUNDO EJERCICIO

let users = [
  {
    id: crypto.randomUUID(),
    nameUser: "brayan",
    mailUser: "brayan@gmail.com",
  },
  {
    id: crypto.randomUUID(),
    nameUser: "stiven",
    mailUser: "stiven@gmail.com",
  },
  {
    id: crypto.randomUUID(),
    nameUser: "nayarb",
    mailUser: "bryan@bryan.bryan",
  },
];

let ejercicioDos = document.querySelector('.ejercicio__2');

function printUserForm(array) {

  let html = '';

  array.forEach(({ id, nameUser, mailUser }) => {
    html += `
    <table border="1">
        <thead>
          <th colspan="2">Usuario</th>
        </thead>
    </tr>
        <tr>
            <th>Correo</th>
            <td>${mailUser}</td>
        </tr>
        <tr>
        <th>Nombre</th>
        <td>${nameUser}</td>
    </tr>
    <tr id="${id}">
      <th class="btn_delete" colspan="2">Delete</th>
    </tr>
    </table>

    `
  })

  ejercicioDos.innerHTML = html;
}

printUserForm(users);

let formRegister = document.querySelector('.registrar');

formRegister.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameUser = e.target.nombreUser.value.trim();
  const mailUser = e.target.emailUser.value.trim()

  const newUser = {
    nameUser,
    mailUser,
    id: crypto.randomUUID(),
  }

  users.push(newUser)
  printUserForm(users);

  formRegister.reset();
})

ejercicioDos.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn_delete')) {
    const alerta = confirm('¿Está seguro de borrar este elemento?')
    if (!alerta) return

    const id = e.target.parentElement.id

    let newArray = users.filter((item) => {
      return item.id !== id
    })

    users = [...newArray]

    printUserForm(users);
  }
})

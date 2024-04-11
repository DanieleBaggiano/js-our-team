const array = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "./img/walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "./img/scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "./img/barbara-ramos-graphic-designer.jpg"
    }
];

const $one = document.getElementById.bind(document);

const cont = $one("container");
console.log(cont);

for (let i = 0; i < array.length; i++) {
    const curArray = array[i];

    console.log(`${curArray.name} ${curArray.role} ${curArray.image}`);

    // for (let key in curArray) {

    // }
}

const paragrafo = document.createElement('p');
paragrafo.textContent = "Founder & CEO";
paragrafo.classList.add('card-text');

const cardBody = document.querySelector(".card-body");

cardBody.appendChild(paragrafo);

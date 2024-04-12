// const paragrafo = document.createElement('p');
// paragrafo.textContent = "Founder & CEO";
// paragrafo.classList.add('card-text');

// const cardBody = document.querySelector(".card-body");

// cardBody.appendChild(paragrafo);
function team(Print) {
    const row = document.querySelector(".row")
    for (let i = 0; i < Print.length; i++) {
        const curArray = Print[i];

        console.log("name", curArray.name);
        console.log("role", curArray.role);
        console.log("image", curArray.image);

        const divCol = document.createElement("div");

        divCol.classList.add("col");

        divCol.innerHTML = `
        <div class="card">
            <img src="${curArray.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${curArray.name}</h5>
                    <p class="card-text">${curArray.role}</p>
                </div>
        </div>
    `;
        console.log(divCol);

        row.append(divCol);
    }
}
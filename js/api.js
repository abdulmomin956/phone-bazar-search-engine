// phone search and grid js code 
const phoneLoad = () => {
    const keyWord = document.getElementById('key-word').value;
    url = `https://openapi.programming-hero.com/api/phones?search=${keyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = mainArray => {
    const data = mainArray.slice(0, 20);
    const container = document.getElementById('main');
    container.textContent = '';
    if (data.length === 0) {
        container.innerHTML = `<p></p><p class="text-center text-danger">No mobile found</p>`
    }
    else {
        for (const mobile of data) {
            const phoneCard = document.createElement('div');
            phoneCard.classList.add('card');
            phoneCard.classList.add('mx-auto');
            phoneCard.style.width = '18rem'
            phoneCard.innerHTML = `
                <img src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                    <p class="card-text">${mobile.brand}</p>
                    <a onclick="detailBtn('${mobile.slug}')" class="btn btn-primary">Detail</a>
                </div>
                        `;
            container.appendChild(phoneCard);
        }
    }
}
// detail button function and show into page 
const detailBtn = data => {
    url = `https://openapi.programming-hero.com/api/phone/${data}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetail(data.data))
}

const displayDetail = data => {
    const detailBox = document.getElementById('details');
    detailBox.textContent = '';
    if (data.releaseDate === "") {
        detailBox.innerHTML = `<div class="d-flex flex-column align-items-center">
        <img src="${data.image}">
        <p class="text-danger">There's no release date</p>
        </div>
        <table id="table">
        <tr><th>Main Features:</th></tr>
        </table>
        `;
    }
    else {
        detailBox.innerHTML = `<div class="d-flex flex-column align-items-center">
        <img src="${data.image}">
        <p>${data.releaseDate}</p>
        </div>
        <table id="table">
        <tr><th>Main Features:</th></tr>
        </table>
        `;
    }
    // feature part 
    const features = data.mainFeatures;
    const pairs = Object.entries(features);
    const tableParent = document.getElementById('table');
    for (const item of pairs) {
        const tr = document.createElement('tr');
        // comma separated array 
        if (typeof item[1] === 'object') {
            const arrayItem = item[1].join(', ');
            tr.innerHTML = `<td>${item[0]}: </td><td>${arrayItem}</td>`;
            tableParent.appendChild(tr);
        }
        else {
            tr.innerHTML = `<td>${item[0]}: </td><td>${item[1]}</td>`;
            tableParent.appendChild(tr);
        }
    }
    // other part 
    if (typeof data.others === 'object') {
        const tableParent2 = document.createElement('table');
        tableParent2.innerHTML = `
        <tr><th style="font-weight:700;">Other Features</th></tr>
        `;
        const pairs2 = Object.entries(data.others);
        for (const item of pairs2) {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${item[0]}: </td><td>${item[1]}</td>`;
            tableParent2.appendChild(tr);
        }
        detailBox.appendChild(tableParent2);
    }
}


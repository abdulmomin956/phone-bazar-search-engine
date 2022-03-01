const phoneLoad = () => {
    const keyWord = document.getElementById('key-word').value;
    url = `https://openapi.programming-hero.com/api/phones?search=${keyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = data => {
    const container = document.getElementById('main');
    for (const mobile of data) {
        const phoneCard = document.createElement('div');
        phoneCard.classList.add('col');
        phoneCard.innerHTML = `
        
            <div class="card h-100">
                <img style="max-width:240px" src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                    <p class="card-text">${mobile.brand}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary">Details</button>
                </div>
            </div>
                    `;
        container.appendChild(phoneCard);
        // console.log(mobile)
    }

}
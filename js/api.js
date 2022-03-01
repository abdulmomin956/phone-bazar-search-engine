const phoneLoad = () => {
    const keyWord = document.getElementById('key-word').value;
    url = `https://openapi.programming-hero.com/api/phones?search=${keyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = data => {
    console.log(data)
    const container = document.getElementById('main');
    container.textContent = '';
    if (data.length === 0) {
        container.innerHTML = `<p>No mobile found</p>`
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
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
                        `;
            container.appendChild(phoneCard);
            console.log(mobile)
        }



    }

}
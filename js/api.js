const phoneLoad = () => {
    const keyWord = document.getElementById('key-word').value;
    url = `https://openapi.programming-hero.com/api/phones?search=${keyWord}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = data => {
    for (const mobile of data) {
        console.log(mobile)
    }

}
const loadingAllPhone = async(status,brandName) => {
    document.getElementById('loading').classList.add('hidden')
    const response = await fetch
    (`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data = await response.json()
    status?displayAllPhone(data.data):displayAllPhone(data.data.slice(0,6));



}

const displayAllPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        const {brand,phone_name,slug,image} = phone;
        const card = document.createElement('div')
        card.classList="card shadow-md p-5"
        card.innerHTML=`
        <figure class="px-10 py-10 bg-slate-100 rounded-md">
          <img
          src=${image}
          alt="Shoes"
          class="rounded-md" />
        </figure>
        <div class="flex flex-col pt-4 justify-center items-center text-center space-y-4">
          <h2 class="card-title text-2xl font-bold">${phone_name}</h2>
          <p>${slug}</p>
          <div class="card-actions">
            <button class="btn btn-md text-white bg-btn_primary">Show Details</button>
          </div>
        </div>
        `
        phoneContainer.appendChild(card)
    });
}

// details
const showDetails = async(id) => {
    
}
const showAllBtn = () => {
    loadingAllPhone(true)
}


const handleSearch = () => {
    document.getElementById('loading').classList.remove('hidden')
    const searchText=document.getElementById('search-text').value
    setTimeout(() => {
        loadingAllPhone(false, searchText)
    },3000)
}
loadingAllPhone(false,"iphone")
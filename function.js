const loadingAllPhone = async(status,brandName) => {
    document.getElementById('loading').classList.add('hidden')
    const response = await fetch
    (`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data = await response.json()
    status?displayAllPhone(data.data):displayAllPhone(data.data.slice(0,6));



}

const displayAllPhone = (phones) => {
    
    document.getElementById('phone-container').innerHTML=""
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        const {phone_name,slug,image} = phone;
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
            <button onclick="showDetails('${slug}')" class="btn btn-md text-white bg-btn_primary">Show Details</button>
          </div>
        </div>
        `
        phoneContainer.appendChild(card)
    });
}

// details
const showDetails = async(slug) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    const data =await response.json()
    const {name,image,mainFeatures,releaseDate,brand,others} = data.data
    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML=  `
    <dialog id="my_modal_5" class="modal modal-bottom md:modal-center  sm:modal-middle">
          <div class="modal-box">
            <div class="py-4 flex items-center justify-center bg-slate-100 rounded-md">
            <img src="${image}"/>
            </div>
            <h3 class="text-2xl font-bold">${name}</h3>
            <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p>Storage: ${mainFeatures.storage}</p>
            <p>Display size: ${mainFeatures.displaySize}</p>
            <p>Chipset: ${mainFeatures.chipSet}</p>
            <p>Memory: ${mainFeatures.memory}</p>
            <p>Slug: ${slug}</p>
            <p>Release Date: ${releaseDate}</p>
            <p>Brand: ${brand}</p>
            <p>GPS: ${others?.GPS}</p>
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn btn-error text-white">Close</button>
              </form>
            </div>
          </div>
    </dialog>
    `
    my_modal_5.showModal()

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
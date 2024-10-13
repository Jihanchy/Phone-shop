const loadingAllPhone = async(status,brandName) => {
    document.getElementById('loading').classList.add('hidden')
    const response = await fetch
    (`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data = await response.json()
    status?displayAllPhone(data.data):displayAllPhone(data.data.slice(0,6));



}

const displayAllPhone = (phones) => {
    
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
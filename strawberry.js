const apiData = {
    url: 'https://www.fruityvice.com/api',
    type: 'fruit',
    name: 'strawberry',
   
 }
 
 const {url, type, name} = apiData
 const apiUrl = `${url}/${type}/${name}`
 
 fetch(apiUrl)
      .then( (data) => (data.json()))
      .then( (fruitinfo) => generateBuah(fruitinfo))
 
 
 const generateBuah = (data) => {
    console.log(data)
    const html = `
    <div class="buah">${data.name}</div>
    <div class="nutritions">
         <span>calories: ${data.nutritions.calories}</span>
         <span>carbohydrates: ${data.nutritions.carbohydrates}</span>
         <span>fat: ${data.nutritions.fat}</span>
         <span>protein: ${data.nutritions.protein}</span>
         <span>sugar: ${data.nutritions.sugar}</span>
     </div>
    `
 
    const buahDiv = document.querySelector('.buah')
    buahDiv.innerHTML = html
 }
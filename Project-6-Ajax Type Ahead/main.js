const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
fetch(endpoint)
   .then(blob=>blob.json())
   .then(data=>cities.push(...data));
//Now, the cities array contains the data of all the cities of USA.
//We need to compare the input words with the cities 
//So, we will use the function for checking it
function check(wordstomatch,cities){
    return cities.filter(place =>{
        const regex= new RegExp(wordstomatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}
function display_matches(){
    const matched_data= check(this.value, cities);
    console.log(matched_data);
    const html= matched_data.map(place=>{
        const regex1= new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex1, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex1, `<span class="hl">${this.value}</span>`);
        return `
          <li>
              <span class="name">${place.city},${place.state}</span>
              <span class="population">${place.population}</span>
          </li>
        `;
    }).join('');
    console.log(html);
    let suggest= document.querySelector('.suggestions');
    suggest.innerHTML= html;
}
const searchInput=document.querySelector('.search');
// searchInput.addEventListener('change',display_matches);
searchInput.addEventListener('keyup',display_matches);

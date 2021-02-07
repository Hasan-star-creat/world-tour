fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => displayCountries(data))
 
  const countriesDiv = document.getElementById('countries');
const displayCountries = countries => {
     for (let i = 0; i < countries.length; i++){
         const countrie = countries[i];
         const countrieDiv = document.createElement('div')
         
       countrieDiv.className = 'country'
        const countryInfo = `
            <h3 class=" country-name">Countre Name: ${countrie.name}</h3>
            <p> Capital: ${countrie.capital}</p>
        `;
        countrieDiv.innerHTML = countryInfo;
         countriesDiv.appendChild(countrieDiv)
         
     }
        //   li.innerText = countrie.name;
        //   ul.appendChild(li);
         
          
        //  const h3 = document.createElement('h3');
        //  h3.innerText = countrie.name;
        //  countrieDiv.appendChild(h3)

        //  const p = document.createElement('p');
        //  p.innerText = countrie.capital;
        //  countrieDiv.appendChild(p)
         
}
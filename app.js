fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => displayCountries(data))

 
  const countriesDiv = document.getElementById('countries');
 const displayCountries = countries => {
            countries.forEach(countrie => {
                const countrieDiv = document.createElement('div')
                countrieDiv.className = 'country'
                const countryInfo = `
                    <h3 class=" country-name">Countre Name: ${countrie.name}</h3>
                    <p> Capital: ${countrie.capital}</p>
                    <button onclick = "displayCountriesDeteails('${countrie.name}')">details</button>
                `;
                countrieDiv.innerHTML = countryInfo;
                 countriesDiv.appendChild(countrieDiv)
    
            });
        }
         const displayCountriesDeteails = name => {
             const url = `https://restcountries.eu/rest/v2/name/${name}`
             fetch(url)
             .then(res => res.json())
             .then(data => {
                console.log(data)
               displaycountriesInformation(data[0]);
             })    
         }
      const displaycountriesInformation = countrie => {
      const countreyDiv =  document.getElementById('countrey-details');
        countreyDiv.innerHTML = `
          <h3>Country Name:${countrie.name} </h3>
          <p>Time Zone:${countrie.timezones} </p>
          <p>Population:${countrie.population} </p>
          <p>Area: ${countrie.area}</p>
         <img class ='flag' src ='${countrie.flag}'>
       `;
    
         
      }
       
        //   li.innerText = countrie.name;
        //   ul.appendChild(li);
         
          
        //  const h3 = document.createElement('h3');
        //  h3.innerText = countrie.name;
        //  countrieDiv.appendChild(h3)

        //  const p = document.createElement('p');
        //  p.innerText = countrie.capital;
        //  countrieDiv.appendChild(p)

        // for (let i = 0; i < countries.length; i++){  const countrie = countries[i]; }
         

let container = document.querySelector('div');
let btnFirst10Pl = document.getElementById('getApi');
let btnNext10Pl = document.getElementById('getApi2');
let btnPrevious10Pl = document.getElementById('getApi3');
btnNext10Pl.style.display = "none";
btnPrevious10Pl.style.display = "none";



const createTableFromApi = (responseData) => {
    container.innerHTML = '';
    container.innerHTML += '<table></table>'
    let table = document.querySelector('table');
    table.innerHTML +=
        `<th>Planet name</th>
        <th>Population</th>
        <th>Climate</th>
        <th>Gravity</th>`
    for (i = 0; i < responseData.results.length; i++) {
        table.innerHTML +=
            `<tr>
        <td> ${responseData.results[i].name}</td> 
        <td> ${responseData.results[i].population}</td>
        <td> ${responseData.results[i].climate}</td>
        <td> ${responseData.results[i].gravity}</td>
    </tr>`
        table.setAttribute('border', 2);
        table.style.textAlign = "left";

    }
}

const fetchApi = (urlToFetch) => {
    fetch(urlToFetch)
        .then(responseFromUrl => {
            responseFromUrl.json()
                .then(parsedResponsFromUrl => {
                    createTableFromApi(parsedResponsFromUrl);

                })

        })
        .catch(e => {
            console.error(e);
        })
}


btnFirst10Pl.addEventListener('click', function () {
    fetchApi('https://swapi.dev/api/planets/?page=1');
    btnFirst10Pl.style.display = "none";
    btnNext10Pl.style.display = "block";

})


btnNext10Pl.addEventListener('click', function () {
    fetchApi('https://swapi.dev/api/planets/?page=2')
    btnNext10Pl.style.display = "none";
    btnPrevious10Pl.style.display = "block";
})

btnPrevious10Pl.addEventListener('click', function () {
    fetchApi('https://swapi.dev/api/planets/?page=1')
    btnPrevious10Pl.style.display = "none";
    btnNext10Pl.style.display = "block";
})
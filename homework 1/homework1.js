document.querySelector('button')
    .addEventListener('click', function () {
        fetch("https://swapi.dev/api/people/1")
            .then(starWarsResponse => {
                starWarsResponse.json()
                    .then(parsedStarWarsResponse => {
                        document.querySelector('body').innerHTML = "<h1 id='personName'></h1> <table></table>";
                        let h1 = document.getElementById('personName');
                        h1.innerText = parsedStarWarsResponse.name;
                        let table = document.querySelector('table');
                        table.innerHTML = 
                                `<tr><th>Height</th>
                                <td>${parsedStarWarsResponse.height} </td> </tr>
                                <tr> <th> Weight </th>
                                <td>${parsedStarWarsResponse.mass} </td> </tr>
                                <tr> <th> Eye color </th>
                                <td>${parsedStarWarsResponse.eye_color} </td> </tr>
                                <tr> <th> Hair color </th>
                                <td>${parsedStarWarsResponse.hair_color} </td> </tr>`
                                
                        table.setAttribute('border',2);
                        table.style.textAlign = "left";

                        console.log(parsedStarWarsResponse);
                    })
            })
            .catch(e => {
                console.error(e);
            })
    })
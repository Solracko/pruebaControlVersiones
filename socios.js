async function populate() {
        const requestURL = '/socios.json';
        const request = new Request(requestURL)     
        const response = await fetch(request);
        const sociosText = await response.text()       
        const socios = JSON.parse(sociosText);
        populateHeader(socios);
        populateHeroes(socios);
    }

    function populateHeader(obj) {
        const header = document.querySelector('header');
        const myH1 = document.createElement('h1');
        myH1.textContent = obj.squadName;
        header.appendChild(myH1);
        
        const myPara = document.createElement('p');
        myPara.textContent = "PcComponentes"
        header.appendChild(myPara);
    }

    function populateHeroes(obj) {
        const section = document.querySelector('section');
        const socios = obj.members;

    for (const socio of socios) { 
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myPara6 = document.createElement('p');
        
        myH2.textContent = socio.socio;
        myPara1.textContent = `Telefono: ${socio.telf}`;
        myPara2.textContent = `Email: ${socio.edad}`;
        myPara3.textContent = `DNI: ${socio.dni}`;
        myPara4.textContent = `Dirección: ${socio.dirc}`;
        myPara5.textContent = `Tarjeta: ${socio.tarj}`;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);

        section.appendChild(myArticle);
        }
    }

    populate();
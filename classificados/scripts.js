
    var companies = [
        {
        "company1": {
            "name": " Nany",
            "desc": "Faxina, limpeza comercial e residêncial.",
            "contact": "Contato : (48)9 88258005",
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company2": {
            "name": " Super Faxinex",
            "desc": "Precisando daquela faxina para a semana?",
            "contact": "Contato : (48)9 99934094" ,
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company3": {
            "name": " Nilda e Terezinha",
            "desc": "Gosta de casa limpa, mas está sem tempo? chame uma diarista.",
            "contact": "Contato : (48)9 99103771",
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company4": {
            "name": " Sidnei Fretes em Gerais",
            "desc": "Atendimento na grande florianópolis, ótimos preços",
            "contact": "Contato : (48)9 84222843",
            "category": "Fretes",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company5": {
            "name": " Frete Damont",
            "desc": "Frete",
            "contact": "Contato : (48)9 91802782",
            "category": "Fretes",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company6": {
            "name": "  Murilo Fretes",
            "desc": "Fretes",
            "contact": "Contato : (48)9 84641738",
            "category": "Fretes",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company7": {
            "name": " Reformas em gerais",
            "desc": "Reboco, pisos, hidraulica, pintura, reparos diversos",
            "contact": "Contato : (48)9 88580807",
            "category": "Obra",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company8": {
            "name": " Michel Rose",
            "desc": "Marido de aluguel",
            "contact": "Contato : (48)9 88095382",
            "category": "Obra",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "company9": {
            "name": " João",
            "desc": "Serivços de pedreiro e colocação de cerâmicas",
            "contact": "Contato : (48)9 99424255",
            "category": "Obra",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        }
        }
    ];

    var problemsList = [
        {
        "problem1": {
            "name": " Joao",
            "desc": "Instalação de chuveiro.",
            "contact": "Contato : (Faça login para vizualizar)",
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "problem2": {
            "name": " Pedro",
            "desc": "Instalação de câmera",
            "contact": "Contato : (Faça login para vizualizar)",
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        },
        "problem3": {
            "name": "Lucas" ,
            "desc": "Problema de instalçaõ elétrica.",
            "contact": "Contato : (Faça login para vizualizar)",
            "category": "Faxina",
            "likes" : "0",
            "dislikes" : "0",
            "localization" : "-27.5847, -48.6142",
            "distance" : "20 KM"
        }
        }
    ];
    
    function createCompanyOrProblemCards(companyOrProblem, index, pc) {

        var problems = document.querySelector(".problemsChild");
        var company = document.querySelector(".professionalsChild");
        // Cria um elemento "card" com as informações da company
        var card = document.createElement("a");
        card.classList.add("card", companyOrProblem.category,"h-100","text-bg-light","text-decoration-none");
        card.setAttribute("href", "#");
        card.setAttribute("data-bs-toggle","modal");
        card.setAttribute("data-bs-target","#profileModal");

        var cardHead = document.createElement("div");
        cardHead.classList.add("card-header");

        // Cria um elemento "img" para adicionar a imagem
        var img = document.createElement("img");
        img.src = "profile.jpg";
        img.alt = "";
        img.style.width = "25px";
        img.style.height = "25px";

        cardHead.appendChild(img);

        // Cria um elemento "article" para adicionar o name "nanny"
        var article = document.createElement("a");
        article.textContent = companyOrProblem.name;

        // Adiciona o elemento "article" ao "card-body"
        cardHead.appendChild(article);

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Cria um elemento "div" para adicionar as estrelas
        var thumbs = document.createElement("div");
        thumbs.classList.add("col-sm-6", "mb-2"); // adiciona as classes "text-warning" e "mb-1
        thumbs.style.fontSize = "14px";
        cardBody.appendChild(thumbs);

        var paragraph = document.createElement("p");
        paragraph.classList.add("card-text")
        paragraph.innerHTML = companyOrProblem.desc + "<br><br>" + companyOrProblem.contact;
        cardBody.appendChild(paragraph)

        var thumbUp = document.createElement("i");
        thumbUp.classList.add("fa", "fa-thumbs-up", "text-primary");
        thumbs.appendChild(thumbUp);

        var likes = document.createElement("i");
        likes.textContent = companyOrProblem.likes;
        likes.classList.add("likes","ms-1");
        thumbs.appendChild(likes);

        var thumbDown = document.createElement("i");
        thumbDown.classList.add("fa", "fa-thumbs-down","ms-2");
        thumbs.appendChild(thumbDown);

        var dislikes = document.createElement("i");
        dislikes.textContent = companyOrProblem.dislikes;
        dislikes.classList.add("dislikes", "ms-1");
        thumbs.appendChild(dislikes);

        // Adiciona o cardHead ao card
        card.appendChild(cardHead);

        // Adiciona o card-body ao card
        card.appendChild(cardBody);

        var cardDeck= document.createElement("div");
        cardDeck.classList.add("card-deck");

        // Adiciona a coluna ao elemento "row" do documento

        var colSm4 = document.createElement("div");
        if(pc==="c"){
            colSm4.classList.add("col","mb-4",("company"+index),"company-name");
            colSm4.setAttribute("id", "company-"+(index+1));
        }
        else if (pc==="p"){
            colSm4.classList.add("col","mb-4",("problem"+index),"problem-name");
            colSm4.setAttribute("id", "problem-"+(index+1));
        }
        // mudar o x
        colSm4.appendChild(card);
        if(pc==="c"){
            company.classList.add = ("card-deck");
            company.appendChild(colSm4);
        }
        else if (pc==="p"){
            problems.classList.add = ("card-deck");
            problems.appendChild(colSm4);
        }
    }
    
    // Seleciona o elemento para adicionar os elementos criados
    var professionals = document.querySelector(".professionals .row");

    companies.forEach((company) => {
        Object.values(company).forEach((companyInfo,index) => {
            createCompanyOrProblemCards(companyInfo,index,"c");
        });
    });

    problemsList.forEach((problem) => {
        Object.values(problem).forEach((problemInfo,index) => {
            createCompanyOrProblemCards(problemInfo,index,"p");
        });
    });

    var select = document.querySelector('select');
    var allCards = document.querySelectorAll(".card");

    document.querySelector(".selection-categorie").addEventListener('change', function () {
        var selecionada = this.options[this.selectedIndex].value;

        Array.from(allCards).forEach((element) => {
        if(element.classList.contains("ads")){
        }
        else if(element.classList.contains(selecionada)){
            element.parentElement.classList.remove("d-none")
        }else if ((selecionada == 'category')|(selecionada == 'todos')){
            element.parentElement.classList.remove("d-none")
        }else {
            element.parentElement.classList.add("d-none")
        }
        });
    });

    document.querySelector(".btn-modal-form").addEventListener('click', function () {
        var name = document.querySelector("#name").value;
        var desc = document.querySelector("#desc").value;
        var contact = document.querySelector("#contact").value;
        var category = document.querySelector(".select-modal-form").value;

        var proximoNumero = Object.keys(companies[0]).length + 1;

        // varruindo o novo objeto de company
        var novacompany = {
        name: name,
        desc: desc,
        contact: contact,
        category: category
        };

        // Adicionando a nova company ao array companies
        companies[0]["company" + proximoNumero] = novacompany;

        // Verificando se a nova company foi adicionada ao array (opcional)
        });

    var companies2 = document.querySelectorAll(".company-name");

    companies2.forEach((company) => {
        var numeroId = company.id.split("-")[1];
        company.addEventListener("click", () => {

            // Obtenha o objeto da company 1
        var company_Atual = companies[0][("company"+numeroId)];
        // Preencha os campos do modal com os dados da company
        document.getElementById("profileName").innerHTML = company_Atual.name;
        document.getElementById("profileDescription").innerHTML = company_Atual.desc;
        document.getElementById("profilePhone").innerHTML = company_Atual.contact;
        document.getElementById("profileLikes").innerHTML = company_Atual.likes;
        document.getElementById("profileDislikes").innerHTML = company_Atual.dislikes;
        });
    });
    
    var problems2 = document.querySelectorAll(".problem-name");

    problems2.forEach((problem) => {
        var numeroId = problem.id.split("-")[1];
        problem.addEventListener("click", () => {

            // Obtenha o objeto da problem 1
        var problem_Atual = problemsList[0][("problem"+numeroId)];
        // Preencha os campos do modal com os dados da problem
        document.getElementById("profileName").innerHTML = problem_Atual.name;
        document.getElementById("profileDescription").innerHTML = problem_Atual.desc;
        document.getElementById("profilePhone").innerHTML = problem_Atual.contact;
        document.getElementById("profileLikes").innerHTML = problem_Atual.likes;
        document.getElementById("profileDislikes").innerHTML = problem_Atual.dislikes;
        });
    });

    var problems = document.querySelector(".problems");
    var botaoProfessionals = document.querySelector(".professionals");
    var elementoProfessionalContainer = document.querySelector(".professionalContainer");
    var problemsContainer = document.querySelector(".problemsContainer");

    problems.addEventListener("click", () => {
        problemsContainer.className = problemsContainer.className.replace("d-none", "");
        elementoProfessionalContainer.className += " d-none";
    })

    botaoProfessionals.addEventListener("click", () => {
        problemsContainer.className += " d-none";
        elementoProfessionalContainer.className = elementoProfessionalContainer.className.replace("d-none", "");

    });

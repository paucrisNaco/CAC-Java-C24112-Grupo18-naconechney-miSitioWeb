// js/productos.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            "title": "Cuaderno de notas TGCF",
            "image": "https://m.media-amazon.com/images/I/51nnixSG8tL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/5OHZBf7"
        },
        {
            "title": "Planificador diario",
            "image": "https://m.media-amazon.com/images/I/61lPhT5rCKL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/f47e722"
        },
        {
            "title": "Amor Pride Journal",
            "image": "https://m.media-amazon.com/images/I/61yIF7GxAaL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/f47e722"
        },
        {
            "title": "Tu amor es mi razón de ser",
            "image": "https://m.media-amazon.com/images/I/61EDf2oxPbL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/i2jUIHg"
        },
        {
            "title": "Live whith pride",
            "image": "https://m.media-amazon.com/images/I/51XtDkmiZGL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/7qVnpwL"
        },
        {
            "title": "Happy Valentine´s Day",
            "image": "https://m.media-amazon.com/images/I/51jnIF9OaYL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/37dcR1u"
        },
        {
            "title": "5 de mayo Journal",
            "image": "https://m.media-amazon.com/images/I/71+zX1iIrgL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/03mvmNR"
        },
        {
            "title": "Booble Boom Journal",
            "image": "https://m.media-amazon.com/images/I/61x6MIVD8dL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/ixrolJQ"
        },
        {
            "title": "Valentine Day Journal",
            "image": "https://m.media-amazon.com/images/I/518gUOQdAYL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/dcw01xg"
        },
        {
            "title": "Parmesan Cheese Journal",
            "image": "https://m.media-amazon.com/images/I/61NBdBibe5L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/i6oo5L8"
        },
        {
            "title": "Bosque de corazones",
            "image": "https://m.media-amazon.com/images/I/71I+pvW0M3L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/hoGTTKb"
        },
        {
            "title": "Libreta Naturalmente tu",
            "image": "https://m.media-amazon.com/images/I/61N2QSbnfOL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/2MGnOjj"
        },
        {
            "title": "De mares y olas Journal",
            "image": "https://m.media-amazon.com/images/I/6167HWA6+9L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/aDr9nMG"
        },
        {
            "title": "Jot It Down Journal",
            "image": "https://m.media-amazon.com/images/I/71pteo8yqQL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/dloPLW7"
        },
        {
            "title": "Cuaderno de notas Cherry Blossom",
            "image": "https://m.media-amazon.com/images/I/61tZxqOUY6L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/f371toC"
        },
        {
            "title": "Deja que tu alma fluya",
            "image": "https://m.media-amazon.com/images/I/71M5SiQQelL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/hbI6fLc"
        },
        {
            "title": "Da vida a tus sueños",
            "image": "https://m.media-amazon.com/images/I/61rc-eIItmL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/drhmUzt"
        },
        {
            "title": "Creando nuevos caminos...",
            "image": "https://m.media-amazon.com/images/I/61CSj-t-gwL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/3gRACtf"
        },
        {
            "title": "La vida es hoy",
            "image": "https://m.media-amazon.com/images/I/71CozBmvG9L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/6XwJoBh"
        },
        {
            "title": "Eres suficiente",
            "image": "https://m.media-amazon.com/images/I/71uJOA3sODL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/52Lkahs"
        },
        {
            "title": "Top secret Journal",
            "image": "https://m.media-amazon.com/images/I/717arSksJOL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/9qV5aPf"
        },
        {
            "title": "La pasión del amor",
            "image": "https://m.media-amazon.com/images/I/71fZmYKAuxL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/aQ2LlxJ"
        },
        {
            "title": "Like Journal",
            "image": "https://m.media-amazon.com/images/I/61Tn-DhY+dL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/bdZg5Zp"
        },
        {
            "title": "Libreta Kawaii 1",
            "image": "https://m.media-amazon.com/images/I/71lDHhIcDUL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/bqddPuu"
        },
        {
            "title": "Libreta Kawaii 2",
            "image": "https://m.media-amazon.com/images/I/71SROes7IkL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/9T4xVkQ"
        },
        {
            "title": "Libreta Kawaii 3",
            "image": "https://m.media-amazon.com/images/I/71EC3etn3QL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/cwpBob5"
        },
        {
            "title": "You're my love",
            "image": "https://m.media-amazon.com/images/I/61sEia9nMGL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/a5gWTFp"
        },
        {
            "title": "Libreta Eres mi sol",
            "image": "https://m.media-amazon.com/images/I/61YOEuwNivL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/dXP7Mn7"
        },
        {
            "title": "Libreta Soy afortunado",
            "image": "https://m.media-amazon.com/images/I/619U-r-GFGL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/1hFBbvt"
        },
        {
            "title": "Amor Journal",
            "image": "https://m.media-amazon.com/images/I/61ULKCH2QsL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/iN7muN5"
        },
        {
            "title": "Gracias Journal",
            "image": "https://m.media-amazon.com/images/I/51ea30A39JL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/7iVtf8C"
        },
        {
            "title": "Scribbles Serendipity",
            "image": "https://m.media-amazon.com/images/I/61yWoSpx8TL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/4S22emG"
        },
        {
            "title": "LGBTQIA+ Journal",
            "image": "https://m.media-amazon.com/images/I/61PCfMVcQxL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/bPjM7JR"
        },
        {
            "title": "Gamer Kawaii Journal",
            "image": "https://m.media-amazon.com/images/I/71rpL1LwlgL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/9Eg96lv"
        },
        {
            "title": "Cuaderno de notas",
            "image": "https://m.media-amazon.com/images/I/61vgVGWr5cL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/aEZqHsy"
        },
        {
            "title": "Stormy Pink",
            "image": "https://m.media-amazon.com/images/I/61mYa2eYQVL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/i9XZwBY"
        },
        {
            "title": "Sonríe, la gente odia eso. Cuadriculado",
            "image": "https://m.media-amazon.com/images/I/61enQtBadEL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/gGWVlhK"
        },
        {
            "title": "Glow Lips Journal",
            "image": "https://m.media-amazon.com/images/I/61UTIcsab1L._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/0VwrNUe"
        },
        {
            "title": "Sonríe, la gente odia eso. Rayado",
            "image": "https://m.media-amazon.com/images/I/61enQtBadEL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/hvtDtU1"
        },
        {
            "title": "Nombre Notebook",
            "image": "https://m.media-amazon.com/images/I/71nBa3YHsmL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/gRqVNti"
        },
        {
            "title": "Libreta Professional",
            "image": "https://m.media-amazon.com/images/I/513lQ1hCSBL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/izOfBq4"
        },
        {
            "title": "Bias Banana",
            "image": "https://m.media-amazon.com/images/I/61h5ZB9WX9L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/3fv6Rlx"
        },
        {
            "title": "Libreta mandala",
            "image": "https://m.media-amazon.com/images/I/81Vg-nXv7sL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/09B5etG"
        },
        {
            "title": "Live your dream",
            "image": "https://m.media-amazon.com/images/I/61KHqCZVn3L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/7rAvf6f"
        },
        {
            "title": "Mis notas",
            "image": "https://m.media-amazon.com/images/I/61cjfhwgTJL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/5PrR6B8"
        },
        {
            "title": "Cuaderno de notas michi",
            "image": "https://m.media-amazon.com/images/I/51VcaAP9hQL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/0v3qxb1"
        },
        {
            "title": "Cuaderno de Lettering",
            "image": "https://m.media-amazon.com/images/I/61tUuOY6ctL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/5JhkaHN"
        },
        {
            "title": "Cuaderno de dibujo",
            "image": "https://m.media-amazon.com/images/I/61vEYyXJLoL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/1jWYEjs"
        },
        {
            "title": "Recetario",
            "image": "https://m.media-amazon.com/images/I/61nRdKEh2OL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/aAO2ZGk"
        },
        {
            "title": "Mandalas para colorear 1",
            "image": "https://m.media-amazon.com/images/I/81SBYucpBBL._SY425_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/f8luUb2"
        },
        {
            "title": "Mandalas para colorear 2",
            "image": "https://m.media-amazon.com/images/I/71Sc6VhdvsL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/854dDSG"
        },
        {
            "title": "Mandalas para colorear 3",
            "image": "https://m.media-amazon.com/images/I/81k9gduU7-L._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/00v5uhO"
        },
        {
            "title": "Mandalas para colorear 4",
            "image": "https://m.media-amazon.com/images/I/71+zX1iIrgL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/03mvmNR"
        },
        {
            "title": "Cuaderno Cambell Rouse",
            "image": "https://m.media-amazon.com/images/I/61jsHX-UyWL._SY342_.jpg",
            "link": "Ver en Amazon",
            "url": "https://a.co/d/duDJRIh"
        }
    ];

    const destacado = {
        "title": "Cambell Rouse: Crónicas de Magia, Amor y Misterio",
        "title2": "(Vol. 1 - Capítulos Breves)",
         "extra": "En el tranquilo pueblo de Cambell Rouse, la vida cotidiana transcurre sin sobresaltos, pero bajo la superficie, un misterio oculto espera ser desvelado. En este volumen inicial de Cambell Rouse, el lector se adentrará en un mundo donde la magia, el amor y el misterio se entrelazan en una trama cautivadora. Cada capítulo breve nos sumerge en un aspecto único de la historia de Cambell Rouse, una joven cuya vida aparentemente ordinaria esconde un destino extraordinario. A medida que avanzamos a través de los nueve relatos que componen este volumen, descubrimos secretos profundos y poderes mágicos que cambiarán su vida para siempre. Acompaña a Cambell en su viaje mientras se enfrenta a enigmas sobrenaturales, lucha por el equilibrio mágico y forja un vínculo inquebrantable con James, su compañero en la lucha contra las sombras. Cada capítulo es un vistazo a un mundo de misterio que se expandirá en volúmenes futuros. En Cambell Rouse: Crónicas de Magia, Amor y Misterio (Vol. 1 - Capítulos Breves), el lector se embarcará en un viaje intrigante lleno de giros inesperados y emocionantes descubrimientos. ¿Qué secretos aguardan en las páginas de los capítulos breves? El misterio solo acaba de comenzar.",
        "image": "https://m.media-amazon.com/images/I/61fvz5roTgL._SY425_.jpg",
        "link": "Ver en Amazon",
        "url": "https://a.co/d/1R0bkQi"
    };

    function displayProducts(products) {
        const productsContainer = document.querySelector('.productosContainer');
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('producto');
            productElement.innerHTML = `
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                <p><a href="${product.url}" target="_blank">${product.link}</a></p>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    function displayHighlightedProduct(product) {
        const destacadoContainer = document.querySelector('.destacado');
        const productElement = document.createElement('div');
        productElement.classList.add('.destacado');
        productElement.innerHTML = `
            <h2>${product.title}</h2>
            <h2>${product.title2}</h2>
            <img src="${product.image}" alt="${product.title}">
            <h5>${product.extra}</h5>
            <p><a href="${product.url}" target="_blank">${product.link}</a></p>
        `;
        destacadoContainer.appendChild(productElement);
    }

    displayProducts(products);
    displayHighlightedProduct(destacado);
});
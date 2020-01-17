function bookList() {

    const books = [

        {
            title: 'A Brief History of Time',
            author: 'Stephen Hawking',
            alreadyread: false,
            src : "https://whitcoulls-co-nz.imgix.net/products/14/06/9780857501004~1539062429.jpg?w=416&h=620&fit=fillmax&auto=format&fill=solid&fill-color=ffffff&s=a3790f3a6b6211fbf6bfc9751684cfec",
        },
        {
            title: 'Deep Work',
            author: 'Cal Newport',
            alreadyread: false,
            src : "https://miro.medium.com/max/680/1*KL67NUR5iyhggxTqzVQg5A.jpeg",
        },
        {
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            alreadyread: false,
            src : "http://ildarabdrazakov.com/wp-content/uploads/2015/12/467986-war-and-peace.jpg",
        
        },
    ];

    let p = document.createElement('p');
    let br = document.createElement('br');


    for (let i = 0; i < books.length; i++) {

        let ul = document.createElement('ul');
        ul.style.display = "block";
        ul.style.margin = "50px 0 50px 0";
        let liT = document.createElement('li');
        let liA = document.createElement('li');
        let liAR = document.createElement('li');
        
        let img = document.createElement('img');
        /* img.style.display = "inline-block";
        img.style.float = "left"; */
        img.style.height = "500px";
        img.style.width = "500px";

        document.body.appendChild(ul);

        let title = document.createTextNode(books[i].title);
        let author = document.createTextNode(books[i].author);
        let alreadyread = document.createTextNode(books[i].alreadyread);
        /* let image = document.createTextNode() */

        liT.appendChild(title);
        ul.appendChild(liT);
        
        liA.appendChild(author);
        ul.appendChild(liA);
        
        liAR.appendChild(alreadyread);
        ul.appendChild(liAR);

        img.src = books[i].src;
        ul.appendChild(img);
        
        
    };

    
}
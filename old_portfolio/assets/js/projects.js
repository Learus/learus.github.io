const mainProjects = [
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        fullDescription: "A exciting mobile game game made in the Unity Engine. A game currently in development, Terrio is a different take on the popular Paper.io game. Extend your territory, avoid or kill enemies, while using strong powerups and cool visuals.",
        link: "https://play.google.com/store/apps/details?id=com.Brewery.Terrio",
        image: "images/terrio.webp",
        color: "#CE7E78"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using Material UIi.",
        fullDescription: "A Generic carousel UI component for React using Material UI.",
        link: "https://learus.github.io/react-material-ui-carousel",
        image: "images/carousel.png",
        color: "#C9A27E"
    },
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        fullDescription: "A PDF Reader specially designed for musicians. A project currently in development, Lear Music Reader aspires to provide musicians with everything they could need from a music sheet reader",
        link: "https://github.com/Learus/Lear-Music-Reader",
        image: "images/musicreader.jpg",
        color: "#64ACC8"
    },
    {
        name: "Hash Code 2019",
        description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        fullDescription: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
        link: "https://github.com/Learus/HashCode2019",
        image: "images/hashcode.png",
        color: "#7D85B1"
    }
]

const allProjects = mainProjects.concat([
    
])

function renderIndex()
{
    const section = document.getElementById("one");
    section.innerHTML = "";

    for (let i = 0; i < mainProjects.length; i++)
    {
        const project = mainProjects[i];

        const article = document.createElement("article");
        article.style = "background-image: url(\"" + project.image + "\");"; 

        const header = document.createElement("header");
        header.className = "major"

        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        a.href = project.link;
        a.className = "link";
        a.target = "_blank"
        a.innerHTML = project.name;

        h3.appendChild(a);
        header.appendChild(h3);

        const p = document.createElement("p");
        p.innerHTML = project.description;

        header.appendChild(p);

        article.appendChild(header);

        const fulla = document.createElement("a");
        fulla.href = project.link;
        fulla.className = "link primary";
        fulla.target = "_blank";

        article.appendChild(fulla);

        section.appendChild(article);
    }
}

function renderProjects()
{
    const two = document.getElementById("two");
    two.innerHTML = "";

    for (let i = 0; i < mainProjects.length; i++)
    {
        const project = allProjects[i];

        const section = document.createElement("section");
        section.style = "background-color: " + project.color + ";"

        const imagea = document.createElement("a");
        imagea.href = project.link;
        imagea.target = "_blank"
        imagea.className = "image"

        const img = document.createElement("img");
        img.src = project.image;
        img.style = "height: 500px; object-fit: cover"
        img.alt = "";
        img.dataPosition = "center center";

        imagea.appendChild(img);
        section.appendChild(imagea);

        const content = document.createElement("div");
        content.className="content";

        const inner = document.createElement("div");
        inner.className = "inner";

        const header = document.createElement("header");
        header.className = "major"

        const h3 = document.createElement("h3");
        h3.innerHTML = project.name;

        header.appendChild(h3);
        inner.appendChild(header);

        const p = document.createElement("p");
        p.innerHTML = project.fullDescription;

        inner.appendChild(p);

        const ul = document.createElement("ul");
        ul.className="actions";

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = project.link;
        a.target = "_blank"
        a.className = "button";
        a.innerHTML = "Check it out";

        li.appendChild(a);
        ul.appendChild(li);
        inner.appendChild(ul);
        content.appendChild(inner);

        section.appendChild(content);

        two.appendChild(section);
    }
}


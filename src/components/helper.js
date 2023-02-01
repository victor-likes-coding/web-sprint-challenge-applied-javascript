export const createElement = (element = "", options = { className: "", textContent: "", src: "" }) => {
    const newElement = document.createElement(element);
    if (options.className) newElement.className = options.className;
    if (options.textContent) newElement.textContent = options.textContent;
    if (options.src) newElement.setAttribute("src", options.src);

    return newElement;
};

export const createSameElements = (element = "", data = [], options = { className: "" }) => {
    const elements = data.map((textContent) => {
        return createElement(element, { className: options.className, textContent });
    });

    return (parent) => {
        elements.forEach((element) => parent.appendChild(element));
        return parent;
    };
};

export const createTopic = (data) => {
    return createSameElements("div", data, { className: "tab" })(createElement("div", { className: "topics" }));
};

export const createCard = (
    data = {
        card: {
            className: "",
        },
        headline: {
            className: "",
            textContent: "",
        },
        author: {
            className: "",
            name: "",
            img: {
                className: "",
                src: "",
            },
        },
    }
) => {
    const card = createElement("div", { className: data.card.className || "card" });
    const headline = createElement("div", { className: data.headline.className || "headline", textContent: data.headline.textContent });
    const author = createElement("div", { className: data.author.className || "author" });
    const imgContainer = createElement("div", { className: data.author.img.className || "img-container" });
    const img = createElement("img", { src: data.author.img.src });
    const span = createElement("span", { textContent: `By ${data.author.name}` });

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(span);

    return card;
    // <div class="card">
    //   <div class="headline">{ headline }</div>
    //   <div class="author">
    //     <div class="img-container">
    //       <img src={ authorPhoto }>
    //     </div>
    //     <span>By { authorName }</span>
    //   </div>
    // </div>
};

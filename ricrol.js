function addRicrol(languages) {
    const option = document.createElement("div");

    option.className = "tw-lliw";
    option.tabIndex = 0;
    option.role = "button";

    option.innerHTML = `
    <div class="language_list_item_checkmark" aria-label></div>
    <div class="language_list_item" aria-label>Ricrol</div>
    `;

    languages.prepend(option);

    return option;
}

function createRickrollElement() {
    const rickrollElement = document.createElement("video");

    rickrollElement.src = "https://cdn-cf-east.streamable.com/video/mp4/6f71xd.mp4?Expires=1647009600&Signature=VDIlqZQUIufJXqpLglEZsX5hxAOUd0cL6rqnRvCEdui5PEdxRg4T6QAuXMftCuyFOzwJFOct8wDZfqr6wydr36K49zdF7NhCBLK~iJCrwLFw0QvSPg1fCrv9~7ZWVMvSo0GN0VaamY5rexhFbviPhYC3JCVXpW51syajWukiC0h~tg~A6Gh8tuxXGgb2qWNHXAU1zkJETdL6fBxgfbjU0AjxardCbrnSfma6XfVfY7s6jmW7~xelfPNcVPNvWZYsibygdmaNVHAe~L-Q7xbIPiWTf33L8O2PGkc5AoKdhIVQq~FjmiGUIhvMwcY7SaJ6e31EQgxmH0ZX4uhVL6GAYw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ";
    rickrollElement.loop = true;

    rickrollElement.style.height = "50%";
    rickrollElement.style.margin = "0";
    rickrollElement.style.position = "absolute";
    rickrollElement.style.top = "50%";
    rickrollElement.style.left = "50%";
    rickrollElement.style.transform = "translate(-50%, -50%)";

    rickrollElement.oncontextmenu = () => false;

    return rickrollElement;
}

const rickrollElement = createRickrollElement();

setTimeout(() => {
    const translator = Array.from(document.getElementsByTagName("g-expandable-container")).find(e => e.getAttribute("jscontroller"));

    if(!translator)
        return;

    const ricrolOption = addRicrol(Array.from(document.querySelector(".language-list-unfiltered-langs-sl_list").children).find(el => el.children[0].innerText === "All languages"));

    ricrolOption.onclick = () => {
        document.body = document.createElement("body");
        document.body.append(rickrollElement);

        rickrollElement.play();
    };
}, 500); // timed out since the page takes a while to load

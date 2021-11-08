const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catButton = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {

        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
};

const loadImage = async () => {
    catImg.src = await getCats();
};


catButton.addEventListener('click', loadImage);

loadImage();
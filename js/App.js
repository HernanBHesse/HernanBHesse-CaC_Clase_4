import { Container, NavBar, Audio, Video } from "../component/index.js";

const sections = [
  { title: "navBar", id: "navBar", class: "navBar" },
  { title: "Audios", id: "audios", class: "audios" },
  { title: "Videos", id: "videos", class: "videos" },
  { title: "Footer", id: "footer", class: "footer" },
];

const links = [
  { title: "Home", url: "navBar" },
  { title: "Audios", url: "audios" },
  { title: "Videos", url: "videos" },
];

const audios = [
  {
    url: "https://www.w3schools.com/tags/horse.mp3",
    class: "",
  },
  {
    url: "https://www.w3schools.com/tags/horse.mp3",
    class: "",
  },
];

const videos = [
  {
    url: "https://www.w3schools.com/tags/movie.mp4",
    class: "",
  },
  {
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    class: "",
  },
];

const homePage = document.getElementById("App");

sections.map((title) => {
  homePage.innerHTML += new Container(
    title.title,
    title.id,
    title.class
  ).render();
});

const navBar = document.getElementById("navBar");
const listVideo = document.getElementById("videos");
const listAudio = document.getElementById("audios");
const footer = document.getElementById("footer");

navBar.innerHTML = `<ul id="linksNavBar" class="linksNavBar"></ul>`;

const listLinks = document.getElementById("linksNavBar");

links.map((title) => {
  listLinks.innerHTML += new NavBar(title.title, title.url).render();
});

videos.map((url) => {
  listVideo.innerHTML += new Video(url.url, 300 , 200 , url.class).render();
});

audios.map((url) => {
  listAudio.innerHTML += new Audio(url.url, url.class).render();
});

footer.innerHTML = `<p>Codo a Codo - Hernán Bustamante Hesse / #22801</p>`;

import goleo from '../../assets/last_projects/goleoo.jpg';
import defenserai from '../../assets/last_projects/defenseraii.jpg';

export const projects = [
    {
        captures: goleo,
        title: "GoLeo",
        subtitle: "Gestión futbolística",
        description: "GoLeo es una app web fullstack para gestionar torneos de fútbol. Permite administrar clubes, jugadores, partidos y estadísticas. Desarrollado con Django Rest Framework y React.",
        isLive: true,
        url_live: "https://go-leo.vercel.app/",
        url_github: "https://github.com/ederleo21/goLeoApp"
    },
    {
        captures: defenserai,
        title: "DefenserAI",
        subtitle: "Detección y alerta de anomalías",
        description: "DefenserAI es una solución de vigilancia inteligente que detecta peleas, incendios u otras anomalías. App Web desarrollada con Django y OpenCV.",
        isLive: false,
        url_live: "",
        url_github: ""
    }
]



import { convertToEmbedUrl } from "../utils";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/AoWY1gkcNzabh229Icboa1Ff0BM.jpg",
    genre: ["Terror"],
    trailerUrl: convertToEmbedUrl("https://youtu.be/RMmGQNNl164?si=rfkPP-UZAOaAun2j"),
    trending: true,
  },
  {
    id: 2,
    title: "Premonição 6: Laços de Sangue",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mdOFiXL9lDLFs6oBu5ezJMnrK7k.jpg",
    genre: ["Terror"],
    trailerUrl: convertToEmbedUrl("https://youtu.be/x4xsMz-L4hk?si=GrH3-VFq5GP7nGge"),
    trending: false,
  },
  {
    id: 3,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    genre: ["Drama"],
    trending: true,
  },
  {
    id: 4,
    title: "The Flash",
    image: "https://image.tmdb.org/t/p/w500//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    genre: ["Ação"],
    trending: true,
  },
  {
    id: 5,
    title: "La Casa de Papel",
    image: "https://image.tmdb.org/t/p/w500/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",
    genre: ["Crime"],
    trending: true,
  },
  {
    id: 6,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    genre: ["Fantasia"],
    trending: true,
  },
];

export default movies;

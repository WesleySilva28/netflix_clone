import { convertToEmbedUrl } from "../utils";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/olAK0DWZmTpqRTRyNpqFUxKGbw6.jpg",
    genre: ["Terror"],
    description: "Quando uma criança desaparece, uma pequena vila se depara com forças sobrenaturais assustadoras e um mistério que liga o paranormal ao governo.",
    trailerUrl: convertToEmbedUrl("https://youtu.be/RMmGQNNl164?si=rfkPP-UZAOaAun2j"),
    trending: true,
  },
  {
    id: 2,
    title: "Premonição 6: Laços de Sangue",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mdOFiXL9lDLFs6oBu5ezJMnrK7k.jpg",
    genre: ["Terror"],
    description: "A morte não escolhe, ela te encontra",
    trailerUrl: convertToEmbedUrl("https://youtu.be/x4xsMz-L4hk?si=GrH3-VFq5GP7nGge"),
    trending: false,
  },
  {
    id: 3,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    genre: ["Drama"],
    description: "Um homem aparentemente comum em um poderoso narcotraficante, revelando as consequências morais e pessoais de suas escolhas. ",
    trailerUrl: convertToEmbedUrl("https://youtu.be/_-Nv0JOcGxg?si=mIAM-75ja_XYk9j-"),
    trending: true,
  },
  {
    id: 4,
    title: "The Flash",
    image: "https://image.tmdb.org/t/p/w500//rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    genre: ["Ação"],
    description: "Barry Allen usa sua supervelocidade para mudar o passado, mas isso causa consequências no futuro.",
    trailerUrl: convertToEmbedUrl("https://youtu.be/IgVyroQjZbE?si=T3Ud5Kebwyl-PJOi"),
    trending: true,
  },
  {
    id: 5,
    title: "La Casa de Papel",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dbAn99YBunr2W2h3BVgwifC52Hl.jpg",
    genre: ["Crime"],
    description: "Um grupo de oito ladrões, liderados pelo Professor, que planejam e executam um ousado roubo à Casa da Moeda de Madrid, com reféns e uma intensa negociação com a polícia",
    trailerUrl: convertToEmbedUrl("https://youtu.be/iS5xXr-GOnM?si=h7LLwcTOYN1BF0iT"),
    trending: true,
  },
  {
    id: 6,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",
    genre: ["Fantasia"],
    description: "Um caçador de monstros, em um mundo onde o destino e a magia são forças poderosas.",
    trending: true,
  },
];

export default movies;

// src/utils.js
export function convertToEmbedUrl(url) {
  try {
    const youtube = new URL(url);

    // Caso seja youtu.be/VIDEO_ID
    if (youtube.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${youtube.pathname.slice(1)}`;
    }

    // Caso seja youtube.com/watch?v=VIDEO_ID
    if (
      youtube.hostname.includes("youtube.com") &&
      youtube.pathname === "/watch"
    ) {
      const videoId = youtube.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Caso já esteja no formato embed
    if (youtube.pathname.includes("/embed/")) {
      return url;
    }

    return null; // formato desconhecido
  } catch (error) {
    return null;
  }
}

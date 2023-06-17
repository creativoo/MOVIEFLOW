const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "902aa54341bb8474490ebf6b9a48f6fe",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  baseURL: "https://api.themoviedb.org/3/",
};

export default apiConfig;

const axios = require("axios");

module.exports = async function () {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=da70c92405d94ebca39a7a05c018fafd&pageSize=5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

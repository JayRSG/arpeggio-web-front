import axios from "axios";

export const checkValidURL = (url, getId = false) => {
  if (url != "" || url != null) {
    var regExp =
      /^.*(youtu.be\/|v\/|t\/|u\/\w\/|embed\/|watch\/?t=|\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11 && !getId) {
      return 1;
    } else if (getId) {
      return match[2];
    }
  }

  return 0;
};

export const fetchOEmbedData = async (url) => {
  let result = null;
  //   if (url != "" && checkValidURL(url)) {
  await axios
    .get("https://www.youtube.com/oembed?url=" + url + "&format=json")
    .then((response) => {
      result = response.data;
    })
    .catch((error) => console.log(error));
  //   }

  return result;
};

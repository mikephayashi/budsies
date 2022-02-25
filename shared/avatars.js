
  const avatarImages = [
    {
      image: require("../assets/girl1.png"),
    },
    {
      image: require("../assets/girl2.png"),
    },
    {
      image: require("../assets/girl3.png"),
    },
  ];
  exports.avatarImages = avatarImages;

  export default function getAvatar(index) {
      return avatarImages[index].image;
  }
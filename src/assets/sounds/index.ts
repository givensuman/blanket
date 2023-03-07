import birds from "./birds.ogg";
import boat from "./boat.ogg";
import city from "./city.ogg";
import coffee_shop from "./coffee-shop.ogg";
import fireplace from "./fireplace.ogg";
import pink_noise from "./pink-noise.ogg";
import rain from "./rain.ogg";
import storm from "./storm.ogg";
import stream from "./stream.ogg";
import summer_night from "./summer-night.ogg";
import train from "./train.ogg";
import waves from "./waves.ogg";
import white_noise from "./white-noise.ogg";
import wind from "./wind.ogg";

export const sounds = {
  nature: {
    rain: rain,
    storm: storm,
    wind: wind,
    waves: waves,
    stream: stream,
    birds: birds,
    summer_night: summer_night,
  },
  travel: {
    train: train,
    boat: boat,
    city: city,
  },
  interiors: {
    coffee_shop: coffee_shop,
    fireplace: fireplace,
  },
  noise: {
    white_noise: white_noise,
    pink_noise: pink_noise,
  },
};

export default sounds;

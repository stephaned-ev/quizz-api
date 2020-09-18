import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interface
import Profile from "../interfaces/Profile.ts";

let profiles: Profile[] = [
  {
    "id": v4.generate(),
    "firstName": "John",
    "lastName": "Snow",
    "company": "NightWatch",
    "picture_url":
      "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
  },
  {
    "id": v4.generate(),
    "firstName": "Nadia",
    "lastName": "Negueritz",
    "company": "Apple",
    "picture_url":
      "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2019.2F02.2F26.2F08d40786-f4ac-43fa-8f53-3a27061f701b.2Ejpeg/2048x1536/quality/80/nadia-fares.jpeg",
  },
  {
    "id": v4.generate(),
    "firstName": "Sophia",
    "lastName": "Burru",
    "company": "Google",
    "picture_url":
      "https://i.pinimg.com/originals/62/5a/a5/625aa59960d8f4b3f9becb3ae78db7e7.jpg",
  },
];

export default profiles;

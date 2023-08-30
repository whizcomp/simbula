import React from "react";
import CardHorizontal from "./CardHorizontal";
import gorilla from "../assets/gorilla.jpg";
import gamedrive from "../assets/game_drive.jpg";
import monkey from "../assets/monkey_baby.jpg";
import elephant from "../assets/elephant.jpg";
import giraffe from "../assets/giraffe_wildlife.jpg";
export default function Packages() {
  return (
    <div className="container mt-5">
      <h1 className="text-center py-3 pt-4">Our Packages</h1>

      <div className="">
        <CardHorizontal
          img={monkey}
          link="/tour/kenya-uganda"
          title=" Simbula with the Gorillas and  the Big Five (7 days)"
          description=" This 7-day package takes you to Uganda and Kenya, where you can go gorilla trekking in Bwindi Impenetrable National Park and go on a game drive in the Masai Mara National Reserve.

        Highlights: See the endangered mountain gorillas in their natural habitat, go on a game drive in the Masai Mara National Reserve and see the Big Five, visit the stunning Queen Elizabeth National Park, home to lions, elephants, hippos, and zebras."
        />
        <CardHorizontal
          img={gamedrive}
          link="/tour/kenya-tanzania"
          title="The Great Rift Valley (8 days)"
          description="This 8-day package takes you to the stunning Great Rift Valley, which is home to some of the most beautiful scenery in Africa. You will visit Lake Nakuru National Park, where you can see flamingos, and the Ngorongoro Crater, a UNESCO World Heritage Site. You will also visit the Masai Mara National Reserve to go on a game drive.

                  Highlights: See the vast array of wildlife in the Masai Mara National Reserve, visit the beautiful Lake Nakuru National Park, home to thousands of flamingos, go on a game drive in the Ngorongoro Crater, a UNESCO World Heritage Site.
                  "
        />
        <CardHorizontal
          img={gorilla}
          link="/tour/rwanda-uganda"
          title="The Chimpanzees and the Volcanoes (7 days)"
          description="This 7-day package takes you to Rwanda and Uganda, where you can go chimpanzee trekking in Nyungwe Forest National Park and gorilla trekking in Bwindi Impenetrable National Park. You will also visit the Volcanoes National Park in Rwanda, where you can see the gorillas and the mountain gorillas.

                  Highlights: See the endangered chimpanzees in their natural habitat, go on a gorilla trekking in Bwindi Impenetrable National Park, one of the world's most biodiverse forests, visit the Volcanoes National Park, home to the endangered mountain gorillas.
                  "
        />
        <CardHorizontal
          img={elephant}
          link="/tour/tanzania"
          title="The Serengeti and the Serengeti (10 days)"
          description="This 10-day package takes you to the Serengeti National Park in Tanzania, where you can witness the annual migration of wildebeest and zebras. You will also visit the Ngorongoro Crater and Lake Manyara National Park.

          Highlights: Witness the annual migration of wildebeest and zebras, go on a game drive in the Serengeti National Park, visit the Ngorongoro Crater, a UNESCO World Heritage Site, go on a game drive in Lake Manyara National Park, home to a variety of animals, including elephants, lions, and giraffes.
          "
        />
        <CardHorizontal
          img={giraffe}
          link="/tour/east-africa"
          title="East Africa's Wild Life Combo(14 days)"
          description=" This 14-day package takes you to all four countries of East Africa: Uganda, Kenya, Tanzania, and Rwanda. You will go gorilla trekking, go on game drives, visit national parks, and learn about the local cultures.

          Highlights: See the endangered mountain gorillas in Uganda, go on a game drive in the Masai Mara National Reserve in Kenya, see the annual migration of wildebeest and zebras in the Serengeti National Park in Tanzania, go chimpanzee trekking in Nyungwe Forest National Park in Rwanda.
          "
        />
      </div>
    </div>
  );
}

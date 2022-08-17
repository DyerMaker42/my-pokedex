import next from "next";
import Image from "next/image";

const PokeCard = (props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <Image
          // className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          width={150}
          height={75}
          src={props.sprites.front_default}
          alt=""
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.name}
          </h5>
          <h3 className="text-l">Height:{props.height}</h3>
          <h3 className="text-l">Weight:{props.weight}</h3>
          <h3 className="text-l">Type: {props.types[0].type.name}</h3>
          <h3 className="text-l">Ability: {props.abilities[0].ability.name}</h3>
          <h3 className="text-l">
            Base Stats: (hp/atk/def/special-atk/special-def/speed)
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;

import next from "next";
import Image from "next/image";

const PokeCard = (props) => {
  return (
    <div className="flex justify-center m-1 p-1.25 rounded-md">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <Image
          // className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          width={300}
          height={250}
          src={props.sprites.front_default}
          alt=""
        />
        <ul className="p-6 flex flex-col justify-start">
          <h3 className="text-gray-900 text-xl font-medium mb-2">
            {props.name}
          </h3>
          <li className="text-l">Height:{props.height}</li>
          <li className="text-l">Weight:{props.weight}</li>
          <li className="text-l">Type: {props.types[0].type.name}</li>
          <li className="text-l">Ability: {props.abilities[0].ability.name}</li>
          <li className="text-l">
            Base Stats:
            {props.stats.map((stat, id) => {
              return (
                <h4 key={id}>
                  {stat.stat.name}:{stat.base_stat}
                </h4>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokeCard;

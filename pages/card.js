import next from "next";

const PokeCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Height:{props.height}</h3>
      <h3>Weight:{props.weight}</h3>
      <h3>Type: {props.types[0].type.name}</h3>
      <h3>Ability: {props.abilities[0].ability.name}</h3>
      <h3>Base Stats:</h3>
      <p>(hp/atk/def/special-atk/special-def/speed)</p>
    </div>
  );
};

export default PokeCard;

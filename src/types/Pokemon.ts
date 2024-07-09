export type Pokemon = {
  abilities: Array<{ ability: { name: string } }>;
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
};
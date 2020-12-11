import chunk from 'lodash.chunk';

// Create a random number between the two passed values
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
// Build an array starting at 1 to the number passed in
const buildArray = (num) => {
  return Array.from({ length: num }, (_, i) => i + 1);
};
// Split Array into chunks using lodash.chunk and return them in an unordered list
const ChunkArray = () => {
  const ranArr = randomInt(2, 20);
  const ranChunkSize = randomInt(2, 4);
  return (
    <ul>
      {chunk(buildArray(ranArr), ranChunkSize).map((value, index) => {
        return <li key={index}>[{value.join(', ')}]</li>;
      })}
    </ul>
  );
};

export default ChunkArray;

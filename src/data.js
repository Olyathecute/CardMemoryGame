const animals = [
  { picture: "🐶", id: "dog" },
  { picture: "🐱", id: "cat" },
  { picture: "🐭", id: "mouse" },
  { picture: "🐹", id: "hamster" },
  { picture: "🐰", id: "rabbit" },
  { picture: "🦊", id: "fox" },
  { picture: "🐻", id: "bear" },
  { picture: "🐼", id: "panda" },
  { picture: "🐻‍❄️", id: "polarBear" },
  { picture: "🐨", id: "koala" },
  { picture: "🐯", id: "tiger" },
  { picture: "🦁", id: "lion" },
  { picture: "🐮", id: "cow" },
  { picture: "🐷", id: "pig" },
  { picture: "🐸", id: "frog" },
  { picture: "🐵", id: "monkey" },
  { picture: "🐙", id: "octopus" },
  { picture: "🐲", id: "dragon" },
];

const fruits = [
  { picture: "🍏", id: "greenApple" },
  { picture: "🍎", id: "redApple" },
  { picture: "🍐", id: "pear" },
  { picture: "🍊", id: "orange" },
  { picture: "🍋", id: "lemon" },
  { picture: "🍌", id: "banana" },
  { picture: "🍉", id: "watermelon" },
  { picture: "🍇", id: "grape" },
  { picture: "🍓", id: "strawberry" },
  { picture: "🫐", id: "blueberry" },
  { picture: "🍒", id: "cherry" },
  { picture: "🍑", id: "peach" },
  { picture: "🍍", id: "pineapple" },
  { picture: "🥥", id: "coconut" },
  { picture: "🥝", id: "kiwi" },
  { picture: "🥭", id: "mango" },
  { picture: "🍈", id: "melon" },
  { picture: "🥑", id: "avocado" },
];

const flags = [
  { picture: "🇨🇷", id: "Thailand" },
  { picture: "🇬🇪", id: "Georgia" },
  { picture: "🇩🇪", id: "Germany" },
  { picture: "🇯🇵", id: "Japan" },
  { picture: "🇮🇩", id: "Indonesia" },
  { picture: "🇹🇷", id: "Turkish" },
  { picture: "🇳🇪", id: "India" },
  { picture: "🇨🇦", id: "Canada" },
  { picture: "🇰🇿", id: "Kazakhstan" },
  { picture: "🇺🇦", id: "Ukraine" },
  { picture: "🇬🇷", id: "Greece" },
  { picture: "🇳🇴", id: "Norway" },
  { picture: "🇸🇧", id: "SolomonIslands" },
  { picture: "🇧🇭", id: "Bahrain" },
  { picture: "🇸🇪", id: "Sweden" },
  { picture: "🇨🇮", id: "IvoryCoast" },
  { picture: "🇫🇷", id: "France" },
  { picture: "🇧🇦", id: "BosniaHerzegovina" },
];

export const imageTypes = {
  animals: animals,
  fruits: fruits,
  flags: flags,
};

export const boardSizes = [
  { name: "4x4", value: "small" },
  { name: "6x6", value: "big" },
];

export const boardImage = [
  { name: "Animals", value: "animals" },
  { name: "Fruits", value: "fruits" },
  { name: "Flags", value: "flags" },
];

const messageArray: string[] = [
    'flatulating',
    'gently humming a silly little tune',
    'breathing noisiliy',
    'thinking about cheese',
    'wishing for the sweet release of death',
    'pontificating to a Rust server about readability'
];


export const randomMessage: () => string = (): string => {
    var rando = messageArray[Math.floor(Math.random() * messageArray.length)];
    return ' and ' + rando;
}
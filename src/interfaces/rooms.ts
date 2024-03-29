export interface UserI {
  id: string;
  name: string;
  color: string;
}

interface NextTurnInfoI {
  nextTurn: number;
  nextRound: number;
  nextDrawer: UserI;
  previousWords: number;
}

export interface GameStateI {
  started: boolean;
  category?: string;
  currentWord?: string;
  cryptedWord?: string;
  words?: string[]; // already shuffled
  previousWords?: number; // number of used words in the game (next turn can get the words starting with the index of this number)
  drawer?: UserI;
  round?: number; // the current round number (initialize in 1)
  maxRounds?: number; // establish the last round number to be played (default as 2)
  turn?: number; // the current drawing turn (initialize in 0)
  preTurn?: boolean;
  turnDuration?: number; // number in ms
  usersGuessing?: number; // tracks how many users are playing the round (in case user joins in the middle of a round)
  endGame?: boolean; // tracks if the game is finished
  totalScores?: {
    // storing as key the socket.id of the users
    [key: string]: { name: string; value: number };
  };
  turnScores?: {
    // storing as key the socket.id of the users
    [key: string]: { name: string; value: number };
  };
}

export interface RoomsI {
  owner: string;
  password: string;
  users: UserI[];
  gameState: GameStateI;
  nextTurnInfo: NextTurnInfoI | undefined;
  usersNotPlaying: string[]; // storing the users.id that joined while turn in progress
}

export type ScoreSubmittedEvent = {
  event: "ScoreSubmitted";
  data: {
    gameId: string;
    score: number;
    submittedAt: string;
  };
};

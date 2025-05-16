export type Label = {
  description: string;
  score: number;
  topicality: number;
};

export type Image = {
  fileName: string;
  signedUrl: string;
  labels: Label[];
};

export type Message = {
  message: string;
  duration: number;
}

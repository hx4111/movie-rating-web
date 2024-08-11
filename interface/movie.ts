export type MovieComment = {
  dateTime: string,
  content: string,
}

export type Movie = {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  posterImage: string;
  director: string;
  rate: number;
  ratingCount: number;
  description: string;
  stars: string[];
  comments: MovieComment[];
};
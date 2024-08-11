import { getMovieList } from "@/lib/ssrdata";
import { MovieList } from "@/components/movielist";

export default function Home() {
  const initialData = getMovieList()

  return (
    <section>
      <MovieList list={initialData} />
    </section>
  );
}

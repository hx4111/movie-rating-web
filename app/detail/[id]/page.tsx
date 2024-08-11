import { CommentComponent } from "@/components/comment";
import { StarFilledIcon } from "@/components/icons";
import { getMovieDetail } from "@/lib/ssrdata";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { notFound } from "next/navigation";
import { RatingComponent } from "@/components/ratingModal";

export default async function Detail({params}: {params: {id: string}}) {
  const movie = getMovieDetail(params.id)
  if (!movie) {
    notFound()
  }

  return (
    <section>
      <div className="font-bold text-3xl">
        Movie Detail
      </div>
      <div className="flex justify-between py-4 md:py-4">
        <div className="flex w-2/3">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt="title"
            className="w-full object-cover h-[350px]"
            src={movie.posterImage}
          />
        </div>
        <div className="flex w-1/3">
          <div className="flex-col text-xl">
            <div className="flex py-2">
              Rate: <StarFilledIcon></StarFilledIcon>{movie.rate}
            </div>
            <p>Total Ratings: {movie.ratingCount}</p>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
      <RatingComponent></RatingComponent>
      <div className="flex-col justify-start text-lg py-5">
        <div>Title: {movie.title}</div>
        <div>Director: {movie.director}</div>
        <div>Date: {movie.date}</div>
        <div>
          Description: 
          <div className="text-sm text-gray-500">{movie.description}</div>
        </div>
        <div>
          Stars: {movie.stars.join(", ")}
        </div>
      </div>
      <Divider className="my-4" />
      <CommentComponent initialComments={movie.comments}/>
    </section>
  );
}

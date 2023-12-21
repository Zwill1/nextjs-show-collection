// import Image from 'next/image'

import AnimeCard, {AnimeProp} from "./components/AnimeCard";
import LoadMore from "./components/LoadMore";
// import { data } from "./_data";
import { fetchAnime } from "./action";
import Hero from "./ui/Hero";

async function Home() {

  const data = await fetchAnime(1);

  return (
    <>
      <section className="w-full">
        <Hero />
      </section>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data}
        </section>
        <LoadMore />
      </main>
    </>
  )
}

export default Home;
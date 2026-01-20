import ParaLink from "@/components/paralink";

export default function Favorites() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-medium">Videos</p>
        <ParaLink link="Why Being Delusional is a Superpower" href="https://www.youtube.com/watch?v=3LopI4YeC4I" external/>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium">Movies</p>
        <ParaLink link="Little Miss Sunshine" href="https://www.rottentomatoes.com/m/little_miss_sunshine" external/>
        <ParaLink link="Whiplash" href="https://www.rottentomatoes.com/m/whiplash_2014" external/>
        <ParaLink link="Prisoners" href="https://www.rottentomatoes.com/m/prisoners_2013" external/>
        <ParaLink link="Weapons" href="https://www.rottentomatoes.com/m/weapons" external/>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium">TV Shows</p>
        <ParaLink link="Breaking Bad" href="https://www.rottentomatoes.com/tv/breaking_bad" external/>
        <ParaLink link="Invincible" href="https://www.rottentomatoes.com/tv/invincible" external/>
        <ParaLink link="The Office" href="https://www.rottentomatoes.com/tv/the_office" external/>
      </div>
    </div>
  )
}

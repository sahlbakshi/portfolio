import ParaLink from "@/components/paralink";

export default function Favorites() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">Movies</p>
        <ParaLink link="Little Miss Sunshine" href="https://www.rottentomatoes.com/m/little_miss_sunshine"/>
        <ParaLink link="Whiplash" href="https://www.rottentomatoes.com/m/whiplash_2014"/>
        <ParaLink link="Prisoners" href="https://www.rottentomatoes.com/m/prisoners_2013"/>
        <ParaLink link="Weapons" href="https://www.rottentomatoes.com/m/weapons"/>
        <ParaLink link="Manjummel Boys" href="https://www.rottentomatoes.com/m/manjummel_boys"/>
        <ParaLink link="Homebound" href="https://www.rottentomatoes.com/m/homebound_2025"/>
        <ParaLink link="3 Idiots" href="https://www.rottentomatoes.com/m/3_idiots"/>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-semibold">TV Shows</p>
        <ParaLink link="Breaking Bad" href="https://www.rottentomatoes.com/tv/breaking_bad"/>
        <ParaLink link="Invincible" href="https://www.rottentomatoes.com/tv/invincible"/>
        <ParaLink link="The Office" href="https://www.rottentomatoes.com/tv/the_office"/>
      </div>
    </div>
  )
}

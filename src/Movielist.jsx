import React from 'react'
import { MovieCard } from './MovieCard'

export default function MovieData() {
  const data = [
    {
      name: "The Shawshank Redemption",
      rating:"9.3",
      poster: "https://th.bing.com/th/id/OIP.H1gGsL4Lnm88OZk8lPtsWgHaEK?rs=1&pid=ImgDetMain",
      alt:"The Shawshank Redemption",
      summary: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
    },
    {
      name: "The Godfather",
      rating:"9.2",
      poster: "https://th.bing.com/th/id/OIP.oKJkUHZhlIWpaHxuhe8jxAHaEK?w=197&h=111&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt:"The Godfather",
      summary: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      name: "The Dark Knight",
      rating:"9.0",
      poster: "https://th.bing.com/th/id/OIP.mAy-ufIcWxjWCfjNemJ7aAHaFj?w=248&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt:"The Dark Knight",
      summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "Fight Club",
      rating:"8.8",
      poster: "https://th.bing.com/th/id/OIP.bVGT28uZRL88UBu-9w1G7gHaDt?w=335&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      alt: "Fight Club",
      summary: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
    },
    {
      name: "American Psycho",
      rating: "7.6",
      poster: "https://tse2.mm.bing.net/th?id=OIP.uHHjb251DwsCbG8_lkpj0gHaEK&pid=Api&P=0&h=180",
      alt: "American Psycho",
      summary: "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies."
    }
  ]
  return (
    <div className='App'>
      {data.map( (d,ind)=><MovieCard key={ind} index={ind} name={d.name} poster={d.poster} rating={d.rating} summary={d.summary} alt={d.alt}/> )}
    </div>
  )
}
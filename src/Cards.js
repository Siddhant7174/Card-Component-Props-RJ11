
import React from 'react'
import Card from './Card'
import "./styles.css"
const data = [
  {
    title:"Incredible India",
    description:"Our people of India are so polite, understanding and helping in nature. The national bird of India is Peacock and is very beautiful. India is so incredible and is full of colors and has the tiger as its national animal, hockey as its national game, etc. the national language or mother tongue of our country is Hindi.",
  },
  {
    title:"India of my Dreams",
    description:"This is my India — a great country, a land of peace, prosperity and truthfulness where no one is afraid of speaking the truth and where there is no corruption . It will be a country where women are respected and people from all religions co-exists and where every citizen is proud to be an Indian"
  },
  {
    title:"India 2050",
    description:"Developing to develop it is the journey of a nation. I to me and my to our is the key of mission 2050. Currently, India is celebrating its seventy-five years of independence.Everyone has dreams to make the country big and democratically successful. A country where there is equality in all areas and for all genders it witnesses progress.Like others, I also have a dream for my India and the way it should be so I can proud to live and the coming generations too. Our country in 2050 will be what we create today."
  }
  ,{
    title:"India in International Polictics",
    description:"India has diplomatic relations with 201 states/dependencies around the globe, having 199 missions and posts operating globally while plans to open new missions in 2020 - 21 hosted by 11 UN Member States."
  }
]
const Cards = () => {
  return (
    <div className='main'>
      {
        data.map((field,fieldIndex)=>{
          return <Card key={fieldIndex} title={field.title} description={field.description}/>
        })
      }
    </div>
  )
}

export default Cards 
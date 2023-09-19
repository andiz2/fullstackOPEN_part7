import persService from './services'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    persService
        .getAll()
        .then(response => {
          setPersons(response.data.results)
        })
        
  }, [persons.length])

  console.log('persons', persons)
  return (
    <>
      {persons.map(person => 
        <Person 
          small_profile = {person.picture.thumbnail}
          title = {person.name.title} first = {person.name.first} last = {person.name.last}
          gender = {person.gender}
          age = {person.dob.age}
          key = {person.login.uuid}
          email = {person.email}
          large_profile = {person.picture.large}
          phone = {person.phone}
          registration_date = {person.registered.date} //to be converted to a more readable version
          street = {person.location.street.name}
          city = {person.location.city}
          state = {person.location.state}
          country = {person.location.country}
          postcode = {person.location.postcode}
          />
      )}  
    </>
  )
}

export default App

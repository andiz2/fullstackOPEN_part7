const Person = ({small_profile, title, first, last,  phone, large_profile, email, registration_date, street
                , city, state, country, postcode, gender, age}) => {
    console.log('number', phone)
    return (
        <>
            <img src = {small_profile} /> <br />
            {title} {first} {last} <br />
            {gender} <br />
            {age} <br />
            {email} <br />
            <img src ={large_profile} /> <br />
            {street}, {city}, {state}, {country}, {postcode} <br /> 
            {phone} <br /> 
            {registration_date} <br /> <br />
        </>
    )
}

export default Person;
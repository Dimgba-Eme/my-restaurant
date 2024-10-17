import React from 'react'
import { useState, useEffect } from 'react'

function BookingForm() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Table reserved");
  }

  const fetchData =() => {
    fetch('https://www.randomuser.me')
    .then(response => (response.JSON()))
    .then(data => setDate(data))
    .catch(error => (console.log(error)));
  }

  useEffect(() => {
    fetchData();
  });

  useEffect(() => {
    document.title = 'Little Lemon | Reservation';
  }, []);

  return (
    <div className='res-form'>
      <h1>Reserve a table</h1>
      <form onSubmit={handleSubmit}>
        <div className='reservation'>
          <label htmlFor='res-date'>Choose a date:<sup>*</sup></label>
          <input type='date' id='res-date' value={date} onChange={e => setDate(e.target.value)} />
        </div>

        <div className='reservation'>
          <label htmlFor='res-time'>Choose time:<sup>*</sup></label>
          <select id='res-time' value={time} onChange={e => setTime(e.target.value)}>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>

        <div className='reservation'>
          <label htmlFor='guests'>Number of guests:<sup>*</sup></label>
          <input type='number' id='guests' placeholder='1' min='1' max='10' value={guests} onChange={e => setGuests(e.target.value)} />
        </div>

        <div className='reservation'>
          <label htmlFor='occasion'>Occasion:<sup>*</sup></label>
          <select id='occasion' value={occasion} onChange={e => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
          </select>
        </div>

        <div className='reservation'>
          <input type='submit' value='Make your reservation' className='button' />
        </div>

      </form>
    </div>
  )
}

export default BookingForm

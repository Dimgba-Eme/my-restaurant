import React from 'react'

function BookingForm() {
  return (
    <>
      <form>
          <label htmlFor='res-date'>Choose a date</label>
          <input type='date' id='res-date' />
          <label htmlFor='res-time'>Choose time</label>
          <select id='res-time'>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>

          <label htmlFor='guests'>Number of guests</label>
          <input type='number' id='guests' placeholder='1' min='1' max='10' />

          
      </form>
    </>
  )
}

export default BookingForm

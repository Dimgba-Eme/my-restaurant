import React from 'react'

function BookingForm() {
  return (
    <>
      <form>
          <label htmlFor='res-date'>Choose a date</label>
          <input type='date' id='res-date' />
          <label>Choose time</label>
          <select>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
      </form>
    </>
  )
}

export default BookingForm

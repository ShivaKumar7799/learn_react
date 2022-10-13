import React, { useState } from 'react'

function StudentMarks() {
  const [subjectMarks, setSubjectMarks] = useState({
    telugu : 78,
    hindi : 45,
    english : 78,
    maths : 6,
    science : 96,
    social : 64
  })

  const dynamicMarksChange = (event) => {
    setSubjectMarks({
      ...subjectMarks,
      [event.target.name] : event.target.value
    })
  }
  return (
    <div>
      <h1>Student Marks</h1>
      <h2>Student Name : Shiva kumar</h2>
      <form>
        <label htmlFor='telugu'>Telugu</label>
        <input type="number" onChange={dynamicMarksChange} id='telugu' value = {subjectMarks.telugu} name = "telugu" />
        <br />
        <label htmlFor='hindi'>Hindi</label>
        <input type="number" onChange={dynamicMarksChange} id='hindi' value = {subjectMarks.hindi} name = "hindi" />
        <br />
        <label htmlFor='english'>English</label>
        <input type="number" onChange={dynamicMarksChange} id='english' value = {subjectMarks.english} name = "english" />
        <br />
        <label htmlFor='maths'>Maths</label>
        <input type="number" onChange={dynamicMarksChange} id='maths' value = {subjectMarks.maths} name = "maths" />
        <br />
        <label htmlFor='science'>Science</label>
        <input type="number" onChange={dynamicMarksChange} id='science' value = {subjectMarks.science} name = "science" />
        <br />
        <label htmlFor='social'>Social</label>
        <input type="number" onChange={dynamicMarksChange} id='social' value = {subjectMarks.social} name = "social" />
        <br />
      </form>
      <div>
        <h2>Student Marks</h2>
        <h3>Telugu : {subjectMarks.telugu}</h3>
        <h3>Hindi : {subjectMarks.hindi}</h3>
        <h3>English : {subjectMarks.english}</h3>
        <h3>Maths : {subjectMarks.maths}</h3>
        <h3>Science : {subjectMarks.science}</h3>
        <h3>Socail : {subjectMarks.social}</h3>
      </div>
    </div>
  )
}

export default StudentMarks
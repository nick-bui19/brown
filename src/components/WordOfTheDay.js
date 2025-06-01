// src/components/WordOfTheDay.js
import React, { useState, useEffect } from 'react'
import './WordOfTheDay.css';
import { supabase } from '../lib/supabaseClient'

function WordOfTheDay() {
  const [wordData, setWordData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTodayWord() {
      setLoading(true)
      setError(null)

      try {
        // 1. Compute today’s date in Utah time (America/Denver), formatted as YYYY-MM-DD
        const utahFormatter = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'America/Denver',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        const parts = utahFormatter.formatToParts(new Date())
        // formatToParts returns e.g. [{ type: "year", value: "2025" }, {…}, …]
        // We can reconstruct “YYYY-MM-DD” from it:
        const year = parts.find(p => p.type === 'year').value
        const month = parts.find(p => p.type === 'month').value
        const day = parts.find(p => p.type === 'day').value
        const utahDateString = `${year}-${month}-${day}`

        // 2. Query Supabase for a row where sent_at = utahDateString
        const { data, error: fetchError } = await supabase
          .from('vocab')
          .select('word, translation, notes')
          .eq('sent_at', utahDateString)
          .single()

        if (fetchError && fetchError.code !== 'PGRST116') {
          // PGRST116: “No rows found” – we’ll handle that below
          throw fetchError
        }

        if (!data) {
          // No entry for today
          setWordData(null)
        } else {
          setWordData(data)
        }
      } catch (err) {
        console.error('Error fetching Word of the Day:', err)
        setError('Unable to load word for today.')
      } finally {
        setLoading(false)
      }
    }

    fetchTodayWord()
  }, [])

  if (loading) {
    return (
      <div className="feature-box slider-box">
        <h2>📚 Word of the Day</h2>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="feature-box slider-box">
        <h2>📚 Word of the Day</h2>
        <p style={{ color: '#E36A6A' }}>{error}</p>
      </div>
    )
  }

  if (!wordData) {
    return (
      <div className="feature-box slider-box">
        <h2>📚 Word of the Day</h2>
        <p>There’s no word scheduled for today.</p>
      </div>
    )
  }

  return (
    <div className="feature-box slider-box">
      <h2>📚 Word of the Day</h2>
      <p>
        <strong>{wordData.word}</strong>
      </p>
      <p>{wordData.translation}</p>
      <p>{wordData.notes}</p>
    </div>
  )
}

export default WordOfTheDay
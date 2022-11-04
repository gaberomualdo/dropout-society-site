const { setupSupabase } = require('lib/auth-utils')

const supabase = setupSupabase()

// update profile
export default async function handler(req, res) {
  const eventData = req.body

  const id = Math.floor(Math.random() * 10_000_000_000)
  const { data, error } = await supabase
    .from('events')
    .upsert({
      id: id,
      data: JSON.stringify(eventData),
    })
    .eq('id', id)
  if (error) {
    res.status(500).json(error)
  } else {
    res.json(data)
  }
}

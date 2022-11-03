const { setupSupabase } = require('lib/auth-utils')

const supabase = setupSupabase()

// update profile
export default async function handler(req, res) {
  if (req.body) {
    const { email, photo, name, twitter, linkedin, website, roles, bio } =
      req.body

    const { data, error } = await supabase
      .from('profiles')
      .upsert({
        email,
        photo,
        name,
        twitter,
        linkedin,
        website,
        roles,
        bio,
      })
      .eq('email', email)
    if (error) {
      res.status(500).json(error)
    } else {
      res.json(data)
    }
  } else {
    const email = req.query?.email
    if (email) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email)
      if (error) {
        res.status(500).json(error)
      } else if (data.length === 0) {
        await supabase.from('profiles').insert({
          email,
        })
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('email', email)
        res.json(data[0])
      } else {
        res.json(data[0])
      }
    } else {
      const { data, error } = await supabase.from('profiles').select('*')
      if (error) {
        res.status(500).json(error)
      } else {
        res.json(data)
      }
    }
  }
}

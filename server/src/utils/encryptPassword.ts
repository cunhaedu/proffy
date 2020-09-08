import bcrypt from 'bcrypt'

async function getPasswordHash (password: string) {
  const hash = await bcrypt.hash(password, 10)

  return hash
}

export default getPasswordHash

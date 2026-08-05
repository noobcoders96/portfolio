// Public-folder assets (profile.jpg, resume.pdf) need the Vite base prefix
// at runtime too, otherwise they 404 when deployed under a GitHub Pages
// project path like /your-repo-name/. Use this instead of a raw "/file" path.
export function asset(path) {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.replace(/^\//, '')}`
}

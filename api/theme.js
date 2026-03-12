export default async function handler(req, res) {
  const { day } = req.query;

  if (!day) {
    return res.status(400).json({ error: 'Missing day parameter' });
  }

  const response = await fetch(`https://basepaint.xyz/api/theme/${day}`);

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to fetch theme' });
  }

  const data = await response.json();
  res.setHeader('Cache-Control', 'no-store');
  res.json(data);
}

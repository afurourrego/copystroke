export default async function handler(req, res) {
  const { day, scale = 1 } = req.query;

  if (!day) {
    return res.status(400).json({ error: 'Missing day parameter' });
  }

  const response = await fetch(`https://basepaint.xyz/api/art/image?day=${day}&scale=${scale}`);

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Failed to fetch canvas' });
  }

  const buffer = await response.arrayBuffer();
  res.setHeader('Content-Type', response.headers.get('content-type') || 'image/png');
  res.setHeader('Cache-Control', 'no-store');
  res.send(Buffer.from(buffer));
}

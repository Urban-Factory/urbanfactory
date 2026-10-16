/** YouTube/Vimeo URL → адрес для iframe (youtube-nocookie без cookies). */
export function embedUrl(url: string): string {
  const u = new URL(url);
  const yt =
    u.hostname === 'youtu.be'
      ? u.pathname.slice(1)
      : u.hostname.endsWith('youtube.com')
        ? (u.searchParams.get('v') ?? u.pathname.split('/').pop())
        : null;
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt}`;
  if (u.hostname.endsWith('vimeo.com')) return `https://player.vimeo.com/video/${u.pathname.split('/').pop()}?dnt=1`;
  return url;
}

interface Env {
  ASSETS: { fetch: (input: Request) => Promise<Response> };
}

function canonicalPath(pathname: string): string | null {
  if (pathname === '/index.html') return '/';
  if (pathname.endsWith('/index.html')) return pathname.slice(0, -'index.html'.length);

  const segment = pathname.split('/').pop() ?? '';
  const extension = segment.includes('.') ? segment.slice(segment.lastIndexOf('.') + 1).toLowerCase() : '';
  if (extension === 'html') {
    const withoutHtml = pathname.slice(0, -'.html'.length);
    return withoutHtml.endsWith('/') ? withoutHtml : `${withoutHtml}/`;
  }
  if (extension) return null;
  if (pathname.endsWith('/')) return null;
  return `${pathname}/`;
}

export function redirectTarget(url: URL): URL | null {
  const pathname = canonicalPath(url.pathname);
  if (!pathname || pathname === url.pathname) return null;
  const target = new URL(url);
  target.pathname = pathname;
  return target;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const target = redirectTarget(new URL(request.url));
    if (target) {
      return new Response(null, {
        status: 308,
        headers: { Location: target.toString() },
      });
    }
    return env.ASSETS.fetch(request);
  },
};

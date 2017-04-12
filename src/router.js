import toRegex from 'path-to-regexp';

const cachedRoutesPatterns = Object.create(null);

const cacheRoutePattern = (path) => {
  const keys = [];
  const pattern = toRegex(path, keys);
  cachedRoutesPatterns.path = { pattern, keys };
  return cachedRoutesPatterns.path;
};

const matchURI = (path, uri) => {
  const { pattern, keys } = cachedRoutesPatterns[path] || cacheRoutePattern(path);
  const match = pattern.exec(uri);

  if (!match)
    return null;

  const params = Object.create(null);
  for (let i = 1; i < match.length; i++) {
    params[keys[i - 1].name] =
      match[i] !== undefined ? match[i] : undefined;
  }
  return params;
};

async function resolve(routes, context) {
  /* eslint-disable */
  for (const route of routes) {
    const uri = context.error ? '/error' : context.pathname;
    const params = matchURI(route.path, uri);
    if (!params) continue;
    const result = await route.action({ params });
    if (result) return result;
  }
  /* eslint-enable */
  const error = new Error('Not found');
  error.status = 404;
  throw error;
}

export default { resolve };

const rawBase = import.meta.env.BASE_URL || "/";
const basePath = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

export const withBase = (path: string) => {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!basePath) {
    return normalizedPath;
  }

  if (normalizedPath === basePath || normalizedPath.startsWith(`${basePath}/`)) {
    return normalizedPath;
  }

  if (normalizedPath === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${normalizedPath}`;
};

export const stripBase = (pathname: string) => {
  if (!basePath || !pathname.startsWith(basePath)) {
    return pathname;
  }

  return pathname.slice(basePath.length) || "/";
};

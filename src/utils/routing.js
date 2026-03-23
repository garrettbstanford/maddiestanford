const normalizePath = (path = "/") => {
  const trimmedPath = path.replace(/\/+$/, "");
  return trimmedPath || "/";
};

export const appBasePath = normalizePath(import.meta.env.BASE_URL || "/");

export function withBasePath(path = "/") {
  const routePath = normalizePath(path);

  if (appBasePath === "/") {
    return routePath;
  }

  return routePath === "/" ? `${appBasePath}/` : `${appBasePath}${routePath}`;
}

export function getCurrentRoutePath(pathname = window.location.pathname) {
  const normalizedPathname = normalizePath(pathname);

  if (appBasePath === "/") {
    return normalizedPathname;
  }

  if (!normalizedPathname.startsWith(appBasePath)) {
    return normalizedPathname;
  }

  return normalizePath(normalizedPathname.slice(appBasePath.length) || "/");
}

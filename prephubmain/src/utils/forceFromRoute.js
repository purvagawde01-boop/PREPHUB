export function getForceFromPath(pathname) {
  if (pathname.includes("/home/navy")) return "navy";
  if (pathname.includes("/home/army")) return "army";
  return null; // default
}

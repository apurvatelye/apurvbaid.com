import { resolveProjectImage } from "./projectImage";
const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8080/api";
export const apiOrigin = apiBase.replace(/\/api\/?$/, "");
export function resolveApiMedia(value) {
  if (!value) return "";
  const resolved = resolveProjectImage(value);
  if (/^(data:|https?:|blob:)/i.test(resolved)) return resolved;
  return `${apiOrigin}${resolved.startsWith("/") ? resolved : `/${resolved}`}`;
}

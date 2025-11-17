import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const YT_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/

export function getYouTubeVideoId(url: string): string | null {
  if (!url || typeof url !== "string") return null

  const trimmed = url.trim()

  // Allow raw IDs being passed through
  if (YT_ID_PATTERN.test(trimmed)) return trimmed

  let parsed: URL
  try {
    parsed = new URL(trimmed)
  } catch {
    return null
  }

  const host = parsed.hostname.replace(/^www\./, "")
  const pathnameSegments = parsed.pathname.split("/").filter(Boolean)

  const paramId = parsed.searchParams.get("v")
  if (paramId && YT_ID_PATTERN.test(paramId)) return paramId

  if (host === "youtu.be") {
    const id = pathnameSegments[0]
    return id && YT_ID_PATTERN.test(id) ? id : null
  }

  if (host.endsWith("youtube.com") && pathnameSegments.length) {
    if (["embed", "shorts"].includes(pathnameSegments[0])) {
      const id = pathnameSegments[1]
      if (id && YT_ID_PATTERN.test(id)) return id
    }

    if (pathnameSegments[0] === "watch" && paramId && YT_ID_PATTERN.test(paramId)) {
      return paramId
    }

    const viIndex = pathnameSegments.indexOf("vi")
    if (viIndex !== -1) {
      const id = pathnameSegments[viIndex + 1]
      return id && YT_ID_PATTERN.test(id) ? id : null
    }
  }

  return null
}

import FingerprintJS from "@fingerprintjs/fingerprintjs";

// Initialize an agent at application startup.
let fpPromise: ReturnType<typeof FingerprintJS.load> | null = null;

// Create a function to get the visitor identifier.
export const getVisitorId = async () => {
  // Check if we're in the browser environment
  if (typeof window === "undefined") {
    return null;
  }

  try {
    // Initialize the promise only when needed and in browser
    if (!fpPromise) {
      fpPromise = FingerprintJS.load();
    }

    const fp = await fpPromise;
    const result = await fp.get();
    return result.visitorId;
  } catch (error) {
    console.error("Error getting visitor identifier:", error);
    return null; // Handle the error or return a fallback value
  }
};

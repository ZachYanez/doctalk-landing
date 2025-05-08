"use client"; // Ensure this runs only on the client

import { useEffect, useState } from "react";

/**
 * Custom hook for tracking the state of a CSS media query.
 * @param {string} query - The media query string (e.g., '(max-width: 1023px)').
 * @returns {boolean} - True if the media query matches, false otherwise.
 */
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Check on initial mount (client-side only)
    // typeof window !== 'undefined' check ensures this code doesn't run during SSR/SSG
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);

      // Listener function to update state on change
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

      // Add listener
      // Using addEventListener for modern browsers, addListener for older ones
      try {
        mediaQuery.addEventListener("change", handler);
      } catch (error) {
        // Fallback for older browsers
        // Check if it's the expected error (e.g., addListener is not a function if already using addEventListener)
        if (error instanceof TypeError && mediaQuery.addListener) {
          mediaQuery.addListener(handler);
        } else {
          // Optionally log unexpected errors
          console.error("Error adding media query listener:", error);
        }
      }

      // Cleanup function to remove listener on unmount
      return () => {
        try {
          mediaQuery.removeEventListener("change", handler);
        } catch (removeError) {
          // Fallback for older browsers
          if (removeError instanceof TypeError && mediaQuery.removeListener) {
            mediaQuery.removeListener(handler);
          } else {
            console.error("Error removing media query listener:", removeError);
          }
        }
      };
    }
  }, [query]); // Re-run effect if query changes

  return matches;
}

export default useMediaQuery;

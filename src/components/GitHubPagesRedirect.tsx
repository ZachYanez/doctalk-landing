"use client";

import { useEffect } from "react";

export default function GitHubPagesRedirect() {
  useEffect(() => {
    // First check for reset password path
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Check if this is a reset password link
    if (
      path.includes("/reset-password/") ||
      (hash && hash.includes("/reset-password/"))
    ) {
      const token =
        path.split("/reset-password/")[1] || hash.split("/reset-password/")[1];
      if (token) {
        console.log("Found reset token, storing and redirecting");
        sessionStorage.setItem("resetToken", token);
        window.location.href = "/reset-password";
        return;
      }
    }

    // Handle other GitHub Pages redirects
    (function (l) {
      if (l.search[1] === "/") {
        const decoded = l.search
          .slice(1)
          .split("&")
          .map(function (s) {
            return s.replace(/~and~/g, "&");
          })
          .join("?");
        window.history.replaceState(
          null,
          "",
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    })(window.location);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function GitHubPagesRedirect() {
  useEffect(() => {
    // Handle GitHub Pages redirect
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

  return <></>;
}

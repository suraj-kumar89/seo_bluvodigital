// src/hooks/useUtmParams.ts
import { useEffect, useState } from "react";

type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

/**
 * Parses and returns UTM parameters from the current URL.
 */
export function useUtmParams(): UtmParams {
  const [utm, setUtm] = useState<UtmParams>({});

  useEffect(() => {
    // Only run in the browser
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utmParams: UtmParams = {};
      const keys: (keyof UtmParams)[] = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
      ];

      keys.forEach((key) => {
        const value = params.get(key);
        if (value) {
          utmParams[key] = value;
        }
      });

      setUtm(utmParams);
    }
  }, []); // Run only once on mount

  return utm;
}
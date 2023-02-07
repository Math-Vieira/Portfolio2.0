import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() =>
        typeof window !== "undefined" ? window.matchMedia(query).matches : false
    );

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = (): void => {
            setMatches(media.matches);
        };
        media.addEventListener("change", listener);
        return () => {
            media.removeEventListener("change", listener);
        };
    }, [query, matches]);

    return matches;
}

export default useMediaQuery;

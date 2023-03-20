type typingFunctionType = (p: HTMLParagraphElement, pContent: string) => void;

export const typingFunction: typingFunctionType = (p, pContent) => {
    setTimeout(() => {
        const occupationLettersArray: string[] = pContent.split("");
        occupationLettersArray.forEach((e, i) => {
            setTimeout(() => {
                p.innerHTML += e;
            }, 100 * i);
        });
    }, 1200);
};

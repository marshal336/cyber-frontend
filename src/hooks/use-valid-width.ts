import { useWindowSize } from "react-use";


export default function useValidWidth() {
    const { width } = useWindowSize();

    return width > 1200
        ? 6
        : width > 900
            ? 5
            : width > 745
                ? 4
                : width > 620
                    ? 3
                    : width > 420
                        ? 2
                        : 1
}
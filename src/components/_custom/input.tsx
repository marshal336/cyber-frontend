import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io"
import { Input } from "../ui"
import { cn } from "@/lib/utils"


interface IInputCustomProps {
    input?: string,
    focus?: boolean,
    setInput?: (input: string) => void
    setFocus?: (focus: boolean) => void
    className?: string
}

export default function InputCustom({ setInput, input, className, focus, setFocus }: IInputCustomProps) {
    return (
        <div className={cn('text-sm flex-1 relative w-full')}>
            <CiSearch className={cn('absolute left-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer')} />
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setInput?.(e.target.value)}
                onFocus={() => setFocus?.(!focus)}
                value={input}
                className={cn(className, "outline-none border-none w-full pl-8 text-lg")}
            />
            {input && (
                <IoMdClose
                    className={cn('absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer')}
                    onClick={() => setInput?.("")}
                />
            )}
        </div>
    )
}
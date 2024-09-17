import { forwardRef, InputHTMLAttributes, useRef } from "react";

export default forwardRef(function SearcbarInput(
    { type = 'text', className = '', isFocused = false, ...props}: InputHTMLAttributes<HTMLInputElement> & {isFocused?: boolean}
) {
    const localRef = useRef<HTMLInputElement>(null)

    return (
        <div>

        </div>
    )

})
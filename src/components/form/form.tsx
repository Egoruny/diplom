
import { ReactNode,FC,BaseSyntheticEvent } from "react"
import { UseFormHandleSubmit,FieldValues } from "react-hook-form";
type FormType = {
    children:ReactNode
    className?:string
    onFinish:(e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
    id?:string
}

export const Form:FC<FormType> = ({children,className,onFinish,id}) => {
return (
    <form  onSubmit={onFinish} id={id}  className={className}>
        {children}
    </form>
)
}
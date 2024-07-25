


export const Form = ({children,className,onFinish,id}) => {
return (
    <form  onSubmit={onFinish} id={id}  className={className}>
        {children}
    </form>
)
}
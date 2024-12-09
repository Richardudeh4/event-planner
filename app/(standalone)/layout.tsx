interface StandaloneProps{
    children: React.ReactNode;
}
export const StandaloneLayout = ({children}: StandaloneProps) => {
    return(
<main>
    <div className="flex flex-col items-center justify-center py-4">
    {children}
    </div>

</main>
    )
}
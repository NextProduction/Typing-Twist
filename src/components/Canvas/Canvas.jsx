import { useEffect, useRef } from "react"

function Canvas(props) {
    const canvasRef = useRef(null)
    const draw = (ctx) => {
        ctx.fillStyle = "#000"
        ctx.begaiPath()
        ctx.arc(50, 100, 20, 0, 2 * Math.PI)
        ctx.fill()



    }
    const handleCanvas = () => {
        const c = canvasRef.current
        const context = c.getContext("2d")

        draw(context)
    }

    useEffect(() => {
        handleCanvas()
    }, [draw])

    return (

        <canvas {...props} ref={canvasRef} />
    )
}

export default Canvas
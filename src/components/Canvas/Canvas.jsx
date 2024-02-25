import { useEffect, useRef } from "react"

function Canvas(props) {
    const canvasRef = useRef(null)
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
        ctx.fill()
    }

    const handleCanvas = () => {
        const c = canvasRef.current
        const context = c.getContext("2d")

        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            draw(context, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }

    useEffect(() => {
        handleCanvas()
    }, [draw])

    return (

        <canvas {...props} ref={canvasRef} />
    )
}

export default Canvas
import React, { useRef, useEffect, useState } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const [shapes, setShapes] = useState([]);
    const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeHandle, setResizeHandle] = useState(null); // 'nw', 'ne', 'sw', 'se'
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Draw shapes on the canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw all shapes
        shapes.forEach((shape, index) => {
            ctx.strokeStyle = "black"; // Set outline color to black
            ctx.lineWidth = 2; // Set outline thickness

            switch (shape.type) {
                case "rectangle":
                    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
                    break;
                case "parallelogram":
                    drawParallelogram(ctx, shape);
                    break;
                case "circle":
                    drawCircle(ctx, shape);
                    break;
                case "arrow":
                    drawArrow(ctx, shape);
                    break;
                case "diamond":
                    drawDiamond(ctx, shape);
                    break;
                case "oval":
                    drawOval(ctx, shape);
                    break;
                case "triangle":
                    drawTriangle(ctx, shape);
                    break;
                case "stickman":
                    drawStickman(ctx, shape);
                    break;
                default:
                    break;
            }

            // Highlight selected shape
            if (index === selectedShapeIndex) {
                ctx.strokeStyle = "red";
                ctx.strokeRect(
                    shape.x - 5,
                    shape.y - 5,
                    shape.width + 10,
                    shape.height + 10
                );

                // Draw resize handles
                const handleSize = 8;
                ctx.fillStyle = "black";
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                ); // NW
                ctx.fillRect(
                    shape.x + shape.width - handleSize / 2,
                    shape.y - handleSize / 2,
                    handleSize,
                    handleSize
                ); // NE
                ctx.fillRect(
                    shape.x - handleSize / 2,
                    shape.y + shape.height - handleSize / 2,
                    handleSize,
                    handleSize
                ); // SW
                ctx.fillRect(
                    shape.x + shape.width - handleSize / 2,
                    shape.y + shape.height - handleSize / 2,
                    handleSize,
                    handleSize
                ); // SE
            }
        });
    }, [shapes, selectedShapeIndex]);

    // Function to draw a parallelogram
    const drawParallelogram = (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width * 0.2, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y);
        ctx.lineTo(shape.x + shape.width * 0.8, shape.y + shape.height);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.closePath();
        ctx.stroke(); // Draw outline
    };

    // Function to draw a circle
    const drawCircle = (ctx, shape) => {
        ctx.beginPath();
        ctx.arc(
            shape.x + shape.width / 2,
            shape.y + shape.height / 2,
            shape.width / 2,
            0,
            Math.PI * 2
        );
        ctx.stroke(); // Draw outline
    };

    // Function to draw an arrow
    const drawArrow = (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(shape.x, shape.y + shape.height / 2);
        ctx.lineTo(shape.x + shape.width * 0.8, shape.y + shape.height / 2);
        ctx.lineTo(shape.x + shape.width * 0.8, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height / 2);
        ctx.lineTo(shape.x + shape.width * 0.8, shape.y + shape.height);
        ctx.lineTo(shape.x + shape.width * 0.8, shape.y + shape.height / 2);
        ctx.closePath();
        ctx.stroke(); // Draw outline
    };

    // Function to draw a diamond
    const drawDiamond = (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width / 2, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height / 2);
        ctx.lineTo(shape.x + shape.width / 2, shape.y + shape.height);
        ctx.lineTo(shape.x, shape.y + shape.height / 2);
        ctx.closePath();
        ctx.stroke(); // Draw outline
    };

    // Function to draw an oval
    const drawOval = (ctx, shape) => {
        ctx.beginPath();
        ctx.ellipse(
            shape.x + shape.width / 2,
            shape.y + shape.height / 2,
            shape.width / 2,
            shape.height / 2,
            0,
            0,
            Math.PI * 2
        );
        ctx.stroke(); // Draw outline
    };

    // Function to draw a triangle
    const drawTriangle = (ctx, shape) => {
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width / 2, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.closePath();
        ctx.stroke(); // Draw outline
    };

    // Function to draw a stickman
    const drawStickman = (ctx, shape) => {
        // Head
        ctx.beginPath();
        ctx.arc(
            shape.x + shape.width / 2,
            shape.y + shape.width / 4,
            shape.width / 4,
            0,
            Math.PI * 2
        );
        ctx.stroke(); // Draw outline

        // Body
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width / 2, shape.y + shape.width / 2);
        ctx.lineTo(shape.x + shape.width / 2, shape.y + shape.height * 0.75);
        ctx.stroke();

        // Arms
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width / 2, shape.y + shape.height * 0.4);
        ctx.lineTo(shape.x, shape.y + shape.height * 0.6);
        ctx.moveTo(shape.x + shape.width / 2, shape.y + shape.height * 0.4);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height * 0.6);
        ctx.stroke();

        // Legs
        ctx.beginPath();
        ctx.moveTo(shape.x + shape.width / 2, shape.y + shape.height * 0.75);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.moveTo(shape.x + shape.width / 2, shape.y + shape.height * 0.75);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        ctx.stroke();
    };

    // Add a new shape to the canvas
    const addShape = (type) => {
        const newShape = {
            type,
            x: 50,
            y: 50,
            width: 100,
            height: 100,
        };
        setShapes([...shapes, newShape]);
    };

    // Handle mouse down event
    const handleMouseDown = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Check if the mouse is inside any shape
        shapes.forEach((shape, index) => {
            if (
                mouseX >= shape.x &&
                mouseX <= shape.x + shape.width &&
                mouseY >= shape.y &&
                mouseY <= shape.y + shape.height
            ) {
                setSelectedShapeIndex(index);

                // Check if the mouse is on a resize handle
                const handleSize = 8;
                const handles = {
                    nw: { x: shape.x - handleSize / 2, y: shape.y - handleSize / 2 },
                    ne: {
                        x: shape.x + shape.width - handleSize / 2,
                        y: shape.y - handleSize / 2,
                    },
                    sw: {
                        x: shape.x - handleSize / 2,
                        y: shape.y + shape.height - handleSize / 2,
                    },
                    se: {
                        x: shape.x + shape.width - handleSize / 2,
                        y: shape.y + shape.height - handleSize / 2,
                    },
                };

                for (const [key, value] of Object.entries(handles)) {
                    if (
                        mouseX >= value.x &&
                        mouseX <= value.x + handleSize &&
                        mouseY >= value.y &&
                        mouseY <= value.y + handleSize
                    ) {
                        setIsResizing(true);
                        setResizeHandle(key);
                        return;
                    }
                }

                // If not resizing, start dragging
                setIsDragging(true);
                setOffset({
                    x: mouseX - shape.x,
                    y: mouseY - shape.y,
                });
            }
        });
    };

    // Handle mouse move event
    const handleMouseMove = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (isDragging && selectedShapeIndex !== null) {
            // Move the shape
            const updatedShapes = shapes.map((shape, index) => {
                if (index === selectedShapeIndex) {
                    return {
                        ...shape,
                        x: mouseX - offset.x,
                        y: mouseY - offset.y,
                    };
                }
                return shape;
            });

            setShapes(updatedShapes);
        } else if (isResizing && selectedShapeIndex !== null) {
            // Resize the shape
            const updatedShapes = shapes.map((shape, index) => {
                if (index === selectedShapeIndex) {
                    let newWidth = shape.width;
                    let newHeight = shape.height;
                    let newX = shape.x;
                    let newY = shape.y;

                    switch (resizeHandle) {
                        case "nw":
                            newWidth = shape.width + (shape.x - mouseX);
                            newHeight = shape.height + (shape.y - mouseY);
                            newX = mouseX;
                            newY = mouseY;
                            break;
                        case "ne":
                            newWidth = mouseX - shape.x;
                            newHeight = shape.height + (shape.y - mouseY);
                            newY = mouseY;
                            break;
                        case "sw":
                            newWidth = shape.width + (shape.x - mouseX);
                            newHeight = mouseY - shape.y;
                            newX = mouseX;
                            break;
                        case "se":
                            newWidth = mouseX - shape.x;
                            newHeight = mouseY - shape.y;
                            break;
                        default:
                            break;
                    }

                    return {
                        ...shape,
                        x: newX,
                        y: newY,
                        width: newWidth,
                        height: newHeight,
                    };
                }
                return shape;
            });

            setShapes(updatedShapes);
        }
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
        setResizeHandle(null);
    };

    // Handle keydown event to delete selected shape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Delete" && selectedShapeIndex !== null) {
                // Remove the selected shape
                const updatedShapes = shapes.filter((_, index) => index !== selectedShapeIndex);
                setShapes(updatedShapes);
                setSelectedShapeIndex(null); // Deselect the shape
            }
        };

        // Add event listener for keydown
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup event listener
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [shapes, selectedShapeIndex]);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-44 p-2 space-y-2 overflow-y-auto bg-gray-200">
                <div>
                    <button
                        onClick={() => addShape("rectangle")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Rectangle"
                    >
                        <img
                            src="./icons/rectangle.svg"
                            alt="Rectangle"
                            className="w-6 h-6"
                        />
                    </button>
                    <button
                        onClick={() => addShape("parallelogram")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Parallelogram"
                    >
                        <img
                            src="./icons/parallelogram.svg"
                            alt="Parallelogram"
                            className="w-6 h-6"
                        />
                    </button>
                    <button
                        onClick={() => addShape("circle")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Circle"
                    >
                        <img
                            src="./icons/circle.svg"
                            alt="Circle"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => addShape("arrow")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Arrow"
                    >
                        <img
                            src="./icons/arrow.svg"
                            alt="Arrow"
                            className="w-6 h-6"
                        />
                    </button>
                    <button
                        onClick={() => addShape("diamond")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Diamond"
                    >
                        <img
                            src="./icons/diamond.svg"
                            alt="Diamond"
                            className="w-6 h-6"
                        />
                    </button>
                    <button
                        onClick={() => addShape("oval")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Oval"
                    >
                        <img
                            src="./icons/oval.svg"
                            alt="Oval"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => addShape("triangle")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Triangle"
                    >
                        <img
                            src="./icons/triangle.svg"
                            alt="Triangle"
                            className="w-6 h-6"
                        />
                    </button>
                    <button
                        onClick={() => addShape("stickman")}
                        className="p-2 hover:bg-gray-400 rounded"
                        title="Stickman"
                    >
                        <img
                            src="./icons/stickman.svg"
                            alt="Stickman"
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </div>
            <div className="flex-1 p-4">
                <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="border border-gray-300 shadow-lg"
                />
            </div>
        </div>
    );
};

export default Canvas;
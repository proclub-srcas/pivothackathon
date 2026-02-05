"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, MouseEvent, useEffect, useCallback } from "react"

type Position = {
    x: number
    y: number
}

// Witty troll messages that appear when user tries to catch the note
const trollMessages = [
    "Too slow! 😜",
    "Almost got me!",
    "Nice try! 🏃",
    "Gotta be faster!",
    "Nope! 😄",
    "Keep trying!",
    "So close!",
    "Can't catch me! 🎯",
    "Better luck next time!",
    "I'm too quick! ⚡",
    "Haha, missed!",
    "Getting tired? 😏",
    "Keep up!",
    "Is that all you got?",
    "Try harder! 💪",
]

const DodgeHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [pos, setPos] = useState<Position>({ x: 0, y: 0 })
    const [message, setMessage] = useState<string>("Click to Register! 🎯")
    const [showTroll, setShowTroll] = useState<boolean>(false)
    const [trollText, setTrollText] = useState<string>("")
    const [dodgeCount, setDodgeCount] = useState<number>(0)
    const [isCaught, setIsCaught] = useState<boolean>(false)
    const [difficulty, setDifficulty] = useState<number>(1)
    const lastDodgeTime = useRef<number>(0)

    // Increase difficulty as user gets closer to winning
    useEffect(() => {
        if (dodgeCount > 5) setDifficulty(1.2)
        if (dodgeCount > 10) setDifficulty(1.4)
        if (dodgeCount > 15) setDifficulty(1.6)
        if (dodgeCount > 20) setDifficulty(1.8)
    }, [dodgeCount])

    // Reset position after some time (but make it harder by resetting faster to center)
    useEffect(() => {
        if (pos.x !== 0 || pos.y !== 0) {
            const timer = setTimeout(() => {
                if (!isCaught) {
                    // Move to a random position instead of center to be unpredictable
                    const randomX = (Math.random() - 0.5) * 150
                    const randomY = (Math.random() - 0.5) * 100
                    setPos({ x: randomX, y: randomY })
                    setMessage("Come on, catch me! 🎯")
                }
            }, 1500)
            return () => clearTimeout(timer)
        }
    }, [pos, isCaught])

    // Predictive dodge - anticipate where mouse is going
    const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current || isCaught) return

        const now = Date.now()
        // Cooldown to prevent too rapid dodges (but very short!)
        if (now - lastDodgeTime.current < 50) return

        const rect = containerRef.current.getBoundingClientRect()
        const noteElement = containerRef.current.querySelector('.dodge-note')
        if (!noteElement) return

        const noteRect = noteElement.getBoundingClientRect()
        const noteCenterX = noteRect.left + noteRect.width / 2
        const noteCenterY = noteRect.top + noteRect.height / 2

        const dx = e.clientX - noteCenterX
        const dy = e.clientY - noteCenterY
        const distance = Math.sqrt(dx * dx + dy * dy)

        // MUCH larger detection radius - starts dodging from far away!
        const detectionRadius = 250 * difficulty

        if (distance < detectionRadius) {
            lastDodgeTime.current = now

            const angle = Math.atan2(dy, dx)

            // Bigger dodge distance that scales with difficulty
            const baseDodge = 300
            const randomFactor = 100
            const dodgeDistance = (baseDodge + Math.random() * randomFactor) * difficulty

            // Add some unpredictability - sometimes dodge perpendicular!
            const perpendicular = Math.random() > 0.7 ? (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1) : 0
            const finalAngle = angle + perpendicular

            // Keep within bounds - larger area now
            const maxX = rect.width / 2 - 180
            const maxY = rect.height / 2 - 150

            // Calculate new position with momentum from previous position
            let newX = -Math.cos(finalAngle) * dodgeDistance + pos.x * 0.5
            let newY = -Math.sin(finalAngle) * dodgeDistance + pos.y * 0.5

            // Bounce off walls with extra randomness
            if (Math.abs(newX) > maxX) {
                newX = Math.sign(newX) * maxX * (0.7 + Math.random() * 0.3)
                // Add vertical juke when hitting horizontal wall
                newY += (Math.random() - 0.5) * 200
            }
            if (Math.abs(newY) > maxY) {
                newY = Math.sign(newY) * maxY * (0.7 + Math.random() * 0.3)
                // Add horizontal juke when hitting vertical wall
                newX += (Math.random() - 0.5) * 200
            }

            // Final clamp
            newX = Math.max(-maxX, Math.min(maxX, newX))
            newY = Math.max(-maxY, Math.min(maxY, newY))

            setPos({ x: newX, y: newY })

            // Show troll message
            const randomMessage = trollMessages[Math.floor(Math.random() * trollMessages.length)]
            setTrollText(randomMessage)
            setShowTroll(true)
            setDodgeCount(prev => prev + 1)

            // Update message based on attempts
            if (dodgeCount < 5) {
                setMessage("You can't catch me! 😜")
            } else if (dodgeCount < 10) {
                setMessage("Still trying? 😏")
            } else if (dodgeCount < 15) {
                setMessage("Getting desperate! 🤣")
            } else if (dodgeCount < 20) {
                setMessage("Almost gave up? 💪")
            } else {
                setMessage("Okay okay... 😅")
            }

            // Hide troll message after delay
            setTimeout(() => setShowTroll(false), 600)

            // After MANY attempts (25+), let them catch it
            if (dodgeCount > 24) {
                setIsCaught(true)
                setPos({ x: 0, y: 0 })
                setMessage("Alright, you got me! 🎉")
            }
        }
    }, [dodgeCount, difficulty, isCaught, pos.x, pos.y])

    const handleClick = () => {
        if (isCaught || dodgeCount > 24) {
            // Redirect to registration or scroll to register section
            window.location.href = "#register"
        }
    }

    return (
        // Hidden on mobile (md:flex), full screen height, desktop only
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="hidden md:flex relative h-screen min-h-[800px] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f5f0] to-[#f0ebe3]"
        >
            {/* Decorative dot pattern - larger dots */}
            <div className="absolute inset-0 opacity-30">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, #e8d4b8 10px, transparent 10px)`,
                        backgroundSize: '80px 80px',
                        backgroundPosition: '40px 40px',
                    }}
                />
            </div>

            {/* Main heading - BIGGER */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-4">
                    Can you <span className="font-black italic">catch</span> me ?!
                </h2>
                <p className="text-gray-500 text-lg lg:text-xl">
                    {dodgeCount > 0
                        ? `Attempts: ${dodgeCount} ${dodgeCount > 15 ? "🔥" : dodgeCount > 10 ? "💪" : dodgeCount > 5 ? "😤" : ""}`
                        : "Try to click the sticky note!"}
                </p>
                {dodgeCount > 10 && !isCaught && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-gray-400 mt-2"
                    >
                        Difficulty: {difficulty > 1.6 ? "INSANE 🔥" : difficulty > 1.3 ? "HARD 💀" : "Getting harder..."}
                    </motion.p>
                )}
            </motion.div>

            {/* Dodging Sticky Note - BIGGER */}
            <motion.div
                className="dodge-note relative cursor-pointer select-none"
                animate={{
                    x: pos.x,
                    y: pos.y,
                    rotate: isCaught ? 0 : (pos.x !== 0 ? -15 + Math.random() * 30 : -5),
                    scale: isCaught ? 1.1 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,  // Faster spring
                    damping: 15,     // Less damping = more bouncy
                    mass: 0.5,       // Lighter = faster
                }}
                onClick={handleClick}
                whileHover={isCaught ? { scale: 1.15 } : {}}
            >
                {/* Paper clip - BIGGER */}
                <div className="absolute -top-6 right-6 w-8 h-14 z-20">
                    <svg viewBox="0 0 24 40" fill="none" className="w-full h-full">
                        <path
                            d="M12 0 L12 8 C12 12 8 12 8 16 L8 32 C8 38 16 38 16 32 L16 12"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>

                {/* Sticky note - MUCH BIGGER */}
                <div
                    className="relative w-72 lg:w-80 bg-gradient-to-br from-[#fff9c4] to-[#ffeb3b] rounded-sm p-8 shadow-2xl"
                    style={{
                        boxShadow: '6px 6px 25px rgba(0,0,0,0.25), inset 0 0 30px rgba(255,255,255,0.3)',
                    }}
                >
                    {/* Folded corner effect - bigger */}
                    <div
                        className="absolute bottom-0 right-0 w-12 h-12"
                        style={{
                            background: 'linear-gradient(135deg, transparent 50%, #f0e68c 50%)',
                        }}
                    />

                    {/* Note content - BIGGER TEXT */}
                    <div className="font-handwriting text-gray-700">
                        <p className="text-2xl lg:text-3xl font-bold italic mb-4 leading-tight">
                            {message}
                        </p>
                        {isCaught && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-4"
                            >
                                <p className="text-lg text-gray-600">
                                    Innovating for Tomorrow
                                </p>
                                <p className="text-base text-[#005CAA] font-semibold mt-2">
                                    PIVOT Hackathon 2026
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Troll message popup - BIGGER */}
                <AnimatePresence>
                    {showTroll && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -30, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.8 }}
                            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        >
                            <span className="bg-white px-4 py-2 rounded-full shadow-xl text-lg font-medium text-gray-700">
                                {trollText}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Subtitle - BIGGER */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center relative z-10"
            >
                <p className="text-gray-500 text-lg">
                    {isCaught
                        ? "Now click to register for the hackathon! 🚀"
                        : dodgeCount > 15
                            ? "Don't give up! You're so close! 😈"
                            : dodgeCount > 8
                                ? "It's getting faster... 🏃💨"
                                : "Hover over the note to make it dodge!"}
                </p>
            </motion.div>

            {/* Decorative elements - BIGGER */}
            <div className="absolute top-20 left-20 w-40 h-40 bg-[#005CAA]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#005CAA]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#FBA919]/5 rounded-full blur-2xl" />
        </section>
    )
}

export default DodgeHero

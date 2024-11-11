import React, { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import { motion, useAnimation } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Mic, MicOff } from "lucide-react";

const retelAPI = new RetellWebClient();

function App() {
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    retelAPI.on("conversationEnded", () => setIsCallStarted(false));
    retelAPI.on("error", () => setIsCallStarted(false));
  }, []);

  const handleClick = async () => {
    if (isInitializing) return;

    setIsActive(!isActive);

    if (!isActive) {
      setIsInitializing(true);
      try {
        const response = await fetch("https://api.retellai.com/v2/create-web-call", {
          method: "POST",
          headers: {
            Authorization: import.meta.env.VITE_RETELL_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ agent_id: import.meta.env.VITE_RETELL_AGENT_ID }),
        });

        const callInformation = await response.json();

        if (callInformation?.access_token) {
          await retelAPI.startCall({
            accessToken: callInformation.access_token,
          });
          setIsCallStarted(true);
        }
      } catch (error) {
        console.error("Failed to start voice bot:", error);
        setIsActive(false);
      } finally {
        setIsInitializing(false);
      }
    } else {
      retelAPI.stopCall();
      setIsCallStarted(false);
    }

    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 },
    });
  };

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Ming Zhi <br /> Voice Assistant
      </motion.h1>

      <motion.button
        animate={controls}
        onClick={handleClick}
        className={`relative mt-24 bg-gradient-to-r p-8 rounded-full transition-all duration-500 group z-50
                   ${
                     isActive
                       ? "from-emerald-400 to-cyan-400 shadow-[0_0_3rem_0_rgba(52,211,153,0.4)]"
                       : "from-cyan-500 to-blue-500 shadow-[0_0_2rem_0_rgba(6,182,212,0.3)]"
                   } hover:shadow-[0_0_4rem_0_rgba(34,211,238,0.5)] hover:scale-110`}
        aria-label={isActive ? "Stop Voice Assistant" : "Start Voice Assistant"}
        disabled={isInitializing}
      >
        {isActive ? (
          <Mic className="w-10 h-10 text-white animate-pulse" />
        ) : (
          <MicOff className="w-10 h-10 text-white group-hover:animate-pulse" />
        )}
        <div
          className={`absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                        text-sm font-medium ${
                          isActive ? "text-emerald-400" : "text-cyan-400"
                        }`}
        >
          {isInitializing ? "Initializing..." : isActive ? "Listening..." : "Click to Start"}
        </div>
      </motion.button>
    </LampContainer>
  );
}

export default App;

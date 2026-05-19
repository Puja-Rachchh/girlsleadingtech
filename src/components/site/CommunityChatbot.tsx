import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Sparkles, ChevronDown } from "lucide-react";

export function CommunityChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm GLT's AI assistant. I can help you find resources, learn about hackathons, or tell you how to join the discord. What do you need?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput("");

    // Simulate AI response based on keywords
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let reply = "I'm not sure about that! Try asking about our hackathons, discord community, or courses.";
      
      if (lowerInput.includes("hackathon") || lowerInput.includes("buildathon")) {
        reply = "We host several hackathons including 'Hack Aura' and 'Code at Christmas'! Check out the Resources > Hackathons section for more details.";
      } else if (lowerInput.includes("join") || lowerInput.includes("discord")) {
        reply = "You can join our 4000+ strong community on Discord by clicking the 'Join the community' button in the header or footer!";
      } else if (lowerInput.includes("course") || lowerInput.includes("learn") || lowerInput.includes("roadmap")) {
        reply = "We have curated learning paths and roadmaps for Frontend, Backend, and AI. Head over to Resources > Courses to explore them.";
      } else if (lowerInput.includes("mentor") || lowerInput.includes("i2p")) {
        reply = "Our I2P (Idea to Product) Fellowship and Mentorship programs pair you with senior devs. Applications open quarterly!";
      }

      setMessages((prev) => [...prev, { text: reply, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-white shadow-glow transition-transform hover:scale-110"
          >
            <Bot className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex h-[500px] max-h-[80vh] w-[350px] flex-col overflow-hidden rounded-[2rem] bg-card border border-border/60 shadow-lavender"
          >
            {/* Header */}
            <div className="flex items-center justify-between gradient-primary p-4 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-display font-semibold leading-tight">GLT Assistant</h3>
                  <p className="text-[10px] text-white/80">Powered by Community AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/20 transition-colors"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.isBot
                        ? "bg-card border border-border text-foreground shadow-sm rounded-tl-none"
                        : "gradient-primary text-white shadow-soft rounded-tr-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-card border-t border-border">
              <form onSubmit={handleSend} className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 pr-12"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1.5 top-1.5 bottom-1.5 flex aspect-square items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

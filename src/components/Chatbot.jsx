import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const [step, setStep] = useState(null);
  const [leadData, setLeadData] = useState({ name: "", requirement: "" });

  const phoneNumber = "919912251451";
  const messagesEndRef = useRef(null);

  // ⏱ Time formatter
  const getTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // 🚀 Initial message
  useEffect(() => {
    setMessages([
      {
        text: "Need a website or any help? I can help you 🚀",
        sender: "bot",
        time: getTime()
      }
    ]);
  }, []);

  // 🔽 Auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // ⏳ Auto open after 10s
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const quickActions = [
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
    { label: "Freelance", id: "freelance" }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ➕ Add messages
  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      { text, sender: "user", time: getTime() }
    ]);
  };

  const addBotMessage = (text, type = "text") => {
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text, sender: "bot", type, time: getTime() }
      ]);
      setIsTyping(false);
      setShowButtons(true);
    }, 800);
  };

  // 💼 Freelance flow
  const handleFreelanceFlow = () => {
    addBotMessage("Yes, Shiva is available for freelance work 🚀");
    addBotMessage("Can I know your name?");
    setStep("ask_name");
  };

  // 🤖 Bot logic
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (/price|cost|how much|charge/.test(text)) {
      return "Pricing:\n• Basic: ₹5k–₹10k\n• Business: ₹10k–₹25k\n• Full-stack: ₹25k+ 💰";
    }

    if (/about|who/.test(text)) {
      return "I'm Shiva, a Full Stack Developer working with React, Node.js & scalable apps 🚀";
    }

    if (/contact|phone|call/.test(text)) {
      return { type: "whatsapp" };
    }

    if (/project/.test(text)) {
      scrollToSection("projects");
      return "Check my projects below 👇";
    }

    if (/skill/.test(text)) {
      return "React, Node.js, Express, MySQL, Tailwind ⚡";
    }

    if (/freelance|hire/.test(text)) {
      handleFreelanceFlow();
      return null;
    }

    return "I can help with projects, pricing, hiring, or skills 😊";
  };

  // 📤 Send message
  const handleSend = () => {
    if (!input.trim()) return;

    addUserMessage(input);
    setShowButtons(false);

    // Lead capture flow
    if (step === "ask_name") {
      setLeadData((prev) => ({ ...prev, name: input }));
      addBotMessage("Great! What do you want to build?");
      setStep("ask_requirement");
      setInput("");
      return;
    }

    if (step === "ask_requirement") {
      const data = { ...leadData, requirement: input };

      const msg = `Hi Shiva, I'm ${data.name}. I need: ${data.requirement}`;
      const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

      addBotMessage("Perfect! Let’s connect 👇");
      addBotMessage(link, "whatsapp");

      setStep(null);
      setInput("");
      return;
    }

    const reply = getBotReply(input);

    if (reply) {
      if (typeof reply === "object") {
        addBotMessage(`https://wa.me/${phoneNumber}`, "whatsapp");
      } else {
        addBotMessage(reply);
      }
    }

    setInput("");
  };

  // 🎯 Quick buttons
  const handleQuickAction = (action) => {
    addUserMessage(action.label);
    setShowButtons(false);

    if (action.id === "freelance") {
      handleFreelanceFlow();
    } else {
      scrollToSection(action.id);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        <Bot size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="w-[92vw] sm:w-80 h-[75vh] sm:h-[500px] bg-white rounded-2xl shadow-xl mt-3 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 border-b flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-indigo-100 p-1 rounded-full">
                  <Bot size={16} className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Shiva Assistant</p>
                  <p className="text-[10px] text-green-500">Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                      msg.sender === "bot"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-indigo-500 text-white"
                    }`}
                  >
                    {msg.type === "whatsapp" ? (
                      <a
                        href={msg.text}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 underline"
                      >
                        💬 Chat on WhatsApp (Instant Reply)
                      </a>
                    ) : (
                      msg.text
                    )}
                  </div>

                  <span className="text-[10px] text-gray-400 mt-1">
                    {msg.time}
                  </span>
                </motion.div>
              ))}

              {/* Typing dots */}
              {isTyping && (
                <div className="flex gap-1 px-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showButtons && messages.length <= 2 && (
              <div className="px-3 pb-2 flex flex-wrap gap-2">
                {quickActions.map((a, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(a)}
                    className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full hover:bg-indigo-100"
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-2 border-t flex items-center">
              <input
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setShowButtons(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border border-gray-300 focus:border-indigo-400 outline-none rounded-full px-3 py-1 text-sm"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-indigo-500 text-white px-3 py-1 rounded-full"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
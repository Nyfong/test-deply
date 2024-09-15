import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Send, User, Bot } from "lucide-react";
import CleanResponse from "./CleanResponse";

const API_KEY = "AIzaSyCBw8CFbUNreTcCNGq4eTJRDrnymJIXhTU"; // Replace with your actual API key
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

const GeminiChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiMessage = {
        role: "ai",
        content: result.data.candidates[0].content.parts[0].text,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "ai",
        content: "An error occurred while fetching the response.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* edit */}
      <section className="absolute right-0 bottom-2 pr-5 w-[350px]">
        <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col h-[400px]">
            <div className="px-4 py-3 border-b dark:border-zinc-700">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
                  Chatbot Assistant
                </h2>
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Online
                </div>
              </div>
            </div>
            <div
              className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
              id="chatDisplay"
            >
              <div className="">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    classNameName={`flex items-start mb-4 ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      classNameName={`flex items-start space-x-2 ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      } max-w-3xl`}
                    >
                      <div
                        classNameName={`p-2 rounded-lg ${
                          message.role === "user"
                            ? " text-white"
                            : "bg-gray-200 "
                        }`}
                      >
                        {message.role === "user" ? (
                          <User classNameName="h-6 w-6  text-black " />
                        ) : (
                          <Bot classNameName="h-6 w-6" />
                        )}
                      </div>
                      <div
                        classNameName={`p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        } w-full`}
                      >
                        {message.role === "user" ? (
                          message.content
                        ) : (
                          <CleanResponse content={message.content} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div classNameName="flex items-center justify-start mb-4">
                    <div classNameName="bg-gray-200 p-3 rounded-lg">
                      <div classNameName="animate-pulse flex space-x-2">
                        <div classNameName="rounded-full bg-gray-400 h-2 w-2"></div>
                        <div classNameName="rounded-full bg-gray-400 h-2 w-2"></div>
                        <div classNameName="rounded-full bg-gray-400 h-2 w-2"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="px-3 py-2 border-t dark:border-zinc-700">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
                    id="chatInput"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
                    id="sendButton"
                    disabled={isLoading}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeminiChatBot;

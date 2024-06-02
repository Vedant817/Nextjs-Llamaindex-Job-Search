// File: app/page.tsx

"use client";

import { useChat } from "ai/react";
import Markdown from "@/components/markdown";
import { Input } from "@/components/ui/input";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="mt-8 gap-y-4 px-4 md:px-0 w-full flex flex-col items-center">
      <h1 className="w-[300px] md:w-[600px] text-xl font-semibold">
        Job Assistant
      </h1>
      <form
        onSubmit={handleSubmit}
        className="border-t pt-8 mt-4 w-[300px] md:w-[600px] flex flex-col"
      >
        <Input
          id="message"
          value={input}
          type="message"
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="What kind of role are you looking for?"
          className="border-black/25 hover:border-black placeholder:text-black/75 rounded"
        />
        <button
          type="submit"
          className="rounded max-w-max mt-2 px-3 py-1 border text-black hover:border-black"
        >
          Search &rarr;
        </button>
      </form>
      <div className="w-[300px] md:w-[600px] flex flex-col">
        {messages.map((message, index) => (
          <Markdown key={index} message={message.content} index={index} />
        ))}
      </div>
      <div className="mt-8 w-full">&nbsp;</div>
    </div>
  );
}

{/*
  The reactive messages array which contains the conversation between the user and AI.
  The reactive input value inserted by user into the input field.
  The handleInputChange method to make sure the input value is in sync with the changes.
  The handleSubmit method to call the API (/api/chat) to get a response for the user’s latest message.
*/}
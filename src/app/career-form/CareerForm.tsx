"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { Fragment, useEffect, useRef, useState } from "react";

const QUESTIONS = [
  {
    key: "your email",
    text: "To start, could you give us ",
    postfix: "your email?",
    complete: false,
    value: "",
  },
  {
    key: "your name",
    text: "Awesome! And what's ",
    postfix: "your name?",
    complete: false,
    value: "",
  },
  {
    key: "your phone number",
    text: "Perfect, and ",
    postfix: "How we can contact you?",
    complete: false,
    value: "",
  },
  {
    key: "your location",
    text: "Great, and what's your ",
    postfix: "location?",
    complete: false,
    value: "",
  },
  {
    key: "your Drive Link",
    text: "Lastly, could you share ",
    postfix: "your drive link of your resume? (Note: The Drive should be open)",
    complete: false,
    value: "",
  },
];

const validators: Record<string, (value: string) => boolean> = {
  "your email": (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),

  "your name": (value) => /^[a-zA-Z\s.'-]{2,}$/.test(value.trim()),

  "your phone number": (value) => /^\+?[0-9\s\-()]{7,15}$/.test(value.trim()),

  "your location": (value) => /^[a-zA-Z\s,'-]{2,}$/.test(value.trim()),

  "your Drive Link": (value) =>
    /^https:\/\/drive\.google\.com\/[^\s]+$/.test(value.trim()),
};

const TerminalContact = () => {
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section
      style={{
        backgroundImage: "url(/bubbles.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-4 py-64"
    >
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="h-96 bg-black backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-auto shadow-xl cursor-text"
      >
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
        Connect With Us!
      </span>
    </div>
  );
};

const TerminalBody = ({
  containerRef,
  inputRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value: string) => {
    if (!curQuestion) return;

    const validator = validators[curQuestion.key];
    if (validator && !validator(value)) {
      alert("Please enter a valid " + curQuestion.key);
      return;
    }

    setQuestions((prev) =>
      prev.map((q) =>
        q.key === curQuestion.key ? { ...q, complete: true, value } : q
      )
    );
  };

  return (
    <div className="p-2 text-slate-100 text-lg">
      <InitialText />
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {curQuestion ? (
        <CurLine
          text={text}
          focused={focused}
          setText={setText}
          setFocused={setFocused}
          inputRef={inputRef}
          command={curQuestion?.key || ""}
          handleSubmitLine={handleSubmitLine}
          containerRef={containerRef}
        />
      ) : (
        <Summary questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p>Hey there! We&apos;re excited to link 🔗</p>
      <p className="whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>
    </>
  );
};

const PreviousQuestions = ({
  questions,
}: {
  questions: {
    key: string;
    text: string;
    postfix: string;
    complete: boolean;
    value: string;
  }[];
}) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className="text-violet-300">{q.postfix}</span>
                )}
              </p>
              <p className="text-emerald-300">
                <FiCheckCircle className="inline-block mr-2" />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({
  curQuestion,
}: {
  curQuestion:
    | { text: string; postfix: string; complete: boolean; value: string }
    | undefined;
}) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ""}
      {curQuestion.postfix && (
        <span className="text-violet-300">{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const Summary = ({
  questions,
  setQuestions,
}: {
  questions: {
    key: string;
    text: string;
    postfix: string;
    complete: boolean;
    value: string;
  }[];
  setQuestions: React.Dispatch<
    React.SetStateAction<
      {
        key: string;
        text: string;
        postfix: string;
        complete: boolean;
        value: string;
      }[]
    >
  >;
}) => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  // const fileInputRef = useRef<HTMLInputElement>(null);

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
    setSubmitted(false);
  };

  const handleSend = () => {
    formRef.current?.submit();
  };

  return (
    <>
      <p>Beautiful! Here&apos;s what we&apos;ve got:</p>
      {questions.map((q) => (
        <p key={q.key}>
          <span className="text-blue-300">{q.key}:</span> {q.value}
        </p>
      ))}
      <p>Look good?</p>

      <form
        ref={formRef}
        action="https://formsubmit.co/582a7a3470952c04ae56c04e86b159e3"
        method="POST"
        encType="multipart/form-data"
        className="hidden"
      >
        <input type="hidden" name="_captcha" value="false" />
        {/* Honeypot field (Hidden field to prevent spam bots) */}
        <input type="text" name="_honey" className="hidden" />
        {/* Hidden inputs for text values */}
        {questions.map((q) => (
          <input key={q.key} type="hidden" name={q.key} value={q.value} />
        ))}
      </form>

      {!submitted ? (
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleReset}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-slate-100 text-black"
          >
            Restart
          </button>
          <button
            onClick={() => {
              handleSend();
              setSubmitted(true);
            }}
            className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-indigo-500 text-white"
          >
            Send it!
          </button>
        </div>
      ) : (
        <p className="text-emerald-300 mt-2">
          <FiCheckCircle className="inline-block mr-2" />
          <span>Sent! We&apos;ll get back to you ASAP 😎</span>
        </p>
      )}
    </>
  );
};

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}: {
  text: string;
  focused: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  command: string;
  handleSubmitLine: (value: string) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText("");
    setTimeout(scrollToBottom, 0);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    scrollToBottom();
  };

  // const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     handleSubmitLine(file.name);
  //     const fileInput = document.querySelector(
  //       'input[name="resume"]'
  //     ) as HTMLInputElement;
  //     if (fileInput) {
  //       const dataTransfer = new DataTransfer();
  //       dataTransfer.items.add(file);
  //       fileInput.files = dataTransfer.files;
  //     }
  //   }
  // };

  useEffect(() => {
    return () => setFocused(false);
  }, [setFocused]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={text}
          type="text"
          className="sr-only"
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className="text-emerald-400">➜</span>{" "}
        <span className="text-cyan-300">~</span>{" "}
        {command && <span className="opacity-50">Enter {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;
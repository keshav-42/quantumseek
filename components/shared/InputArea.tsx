import Image from "next/image";
import { FC } from "react";
import TypeAnimation from "./TypeAnimation";
import { ArrowRight } from "lucide-react";

type TInputAreaProps = {
  promptValue: string;
  setPromptValue: React.Dispatch<React.SetStateAction<string>>;
  handleDisplayResult: () => void;
  disabled?: boolean;
  reset?: () => void;
};

const InputArea: FC<TInputAreaProps> = ({
  promptValue,
  setPromptValue,
  handleDisplayResult,
  disabled,
  reset,
}) => {
  return (
    <form
      className="mx-auto flex h-[66px] w-full items-center justify-between rounded-lg border bg-white px-3 shadow-[2px_2px_38px_0px_rgba(255,123,0,0.25),0px_-2px_4px_0px_rgba(255,123,0,0.25)_inset,1px_2px_4px_0px_rgba(255,123,0,0.25)_inset]"
      onSubmit={(e) => {
        e.preventDefault();
        if (reset) reset();
        handleDisplayResult();
      }}
    >
      <input
        type="text"
        placeholder="Ask anything"
        className="focus-visible::outline-0 my-1 w-full pl-5 font-light not-italic leading-[normal] text-[#1B1B16]/30 text-black outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-xl"
        disabled={disabled}
        value={promptValue}
        required
        onChange={(e) => setPromptValue(e.target.value)}
      />
      <button
        disabled={disabled}
        type="submit"
        className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[3px] bg-[linear-gradient(154deg,#ffa100_23.37%,#f86d00_91.91%)] disabled:pointer-events-none disabled:opacity-75"
      >
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center">
            <TypeAnimation />
          </div>
        )}

        <ArrowRight size={24} className={`text-white ${disabled ? "invisible" : ""}`} />
      </button>
    </form>
  );
};

export default InputArea;

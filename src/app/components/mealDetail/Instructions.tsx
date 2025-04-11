type Props = {
    text: string;
  };
  
  export default function Instructions({ text }: Props) {
    return (
      <div className="flex flex-col justify-center items-center my-8">
        <div className="max-w-5xl ml-4 mr-4">
          <h2 className="text-xl font-semibold mt-6 mb-3">Instructions</h2>
          <div className="bg-white text-black p-6 rounded-xl shadow border border-zinc-200 leading-relaxed whitespace-pre-line">
            {text}
          </div>
        </div>
      </div>
    );
  }
  
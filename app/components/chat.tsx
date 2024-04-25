type Props = {
  name: string;
};

export function Chat({ name }: Props) {
  return (
    <div className="flex flex-col relative h-screen w-full">
      <div className="h-4/6 w-11/12 ml-10 mt-10">
        <h1>Answer will show here</h1>
      </div>
      <div className="flex justify-center absolute bottom-10  w-full py-5 ">
        <form action="" className="w-full">
          <label htmlFor="message" className="flex-none ml-5">
            Message
          </label>
          <input
            type="text"
            id="message"
            className="flex-grow w-3/4 px-4 py-2 ml-4 text-slate-100 bg-stone-900	border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="flex-none px-4 py-2 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

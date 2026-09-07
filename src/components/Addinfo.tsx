function Addinfo() {
  return (
    <div className="">
      <label
        htmlFor="addinfo"
        className="text-secondary m-0 ml-1 text-sm font-semibold"
      >
        Anything else we should know?
      </label>
      <textarea
        id="addinfo"
        name="addinfo"
        maxLength={6000}
        className="bg-lightyellow border-outline/30 focus:border-primary w-full resize-none overflow-auto rounded-t-xl border-0 border-b px-4 py-3 transition-all"
        placeholder="Special quirks, health conditions, or personality traits..."
        rows={5}
      ></textarea>
    </div>
  );
}

export default Addinfo;

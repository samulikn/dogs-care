type LabelProps = {
  legend: string;
}

function Label({ legend }: LabelProps) {
  return (
    <>
      <h2 className="text-primary mb-2 flex items-center gap-2 text-xl font-bold">
        <span className="bg-main h-6 w-2 rounded-full"></span>
        {legend}
      </h2>
    </>
  );
}

export default Label;

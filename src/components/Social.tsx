import Satisfied from "../assets/icons/satisfied.svg?react";
import Selective from "../assets/icons/selective.svg?react";
import Nervous from "../assets/icons/nervous.svg?react";

function Social() {
  return (
    <fieldset>
      <legend className="text-secondary mb-1 ml-1 text-sm font-semibold">
        Comfortable with other dogs? *
      </legend>
      <div className="flex flex-col gap-3">
        <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
          <div className="text-primary flex items-center gap-3">
            <Satisfied
              aria-hidden="true"
              className="bg-friendly/30 fill-friendly h-8 w-8 rounded-full p-0.5"
            />
            <div className="flex flex-col">
              <p className="font-medium">Very friendly</p>
              <span className="text-xs">Loves making new friends</span>
            </div>
          </div>
          <input
            className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
            name="social"
            required
            type="radio"
            value="Very friendly"
          />
        </label>
        <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
          <div className="text-primary flex items-center gap-3">
            <Selective
              aria-hidden="true"
              className="bg-selective/30 fill-selective h-8 w-8 rounded-full p-0.5"
            />
            <div className="flex flex-col">
              <p className="font-medium">Selective</p>
              <span className="text-xs">Picky about who they play with</span>
            </div>
          </div>
          <input
            className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
            name="social"
            required
            type="radio"
            value="Selective"
          />
        </label>
        <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
          <div className="text-primary flex items-center gap-3">
            <Nervous
              aria-hidden="true"
              className="bg-nervous/30 fill-nervous h-8 w-8 rounded-full p-0.5"
            />
            <div className="flex flex-col">
              <p className="font-medium">Nervous around dogs</p>
              <span className="text-xs">Needs space and slow intros</span>
            </div>
          </div>
          <input
            className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
            name="social"
            required
            type="radio"
            value="Nervous around dogs"
          />
        </label>
      </div>
    </fieldset>
  );
}

export default Social;

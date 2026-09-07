import Satisfied from "../assets/icons/satisfied.svg?react";
import Selective from "../assets/icons/selective.svg?react";
import Nervous from "../assets/icons/nervous.svg?react";

function Social() {
  return (
      <div className="flex flex-col gap-1">
        <h3 className="text-secondary m-0 ml-1 text-sm font-semibold">
          Comfortable with other dogs?
        </h3>
        <div className="flex flex-col gap-3">
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <Satisfied className="bg-friendly/30 fill-friendly h-8 w-8 rounded-full p-0.5" />
              <div className="flex flex-col">
                <p className="font-medium">Very friendly</p>
                <span className="text-xs">Loves making new friends</span>
              </div>
            </div>
            <input
              className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="social"
              type="radio"
            />
          </label>
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <Selective className="bg-selective/30 fill-selective h-8 w-8 rounded-full p-0.5" />
              <div className="flex flex-col">
                <p className="font-medium">Selective</p>
                <span className="text-xs">Picky about who they play with</span>
              </div>
            </div>
            <input
              className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="social"
              type="radio"
            />
          </label>
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <Nervous className="bg-nervous/30 fill-nervous h-8 w-8 rounded-full p-0.5" />
              <div className="flex flex-col">
                <p className="font-medium">Nervous around dogs</p>
                <span className="text-xs">Needs space and slow intros</span>
              </div>
            </div>
            <input
              className="border-secondary h-5 w-5 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="social"
              type="radio"
            />
          </label>
        </div>
      </div>
  );
}

export default Social;

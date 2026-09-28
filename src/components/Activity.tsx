import ModerateLevel from "../assets/icons/moderate.svg?react";
import SaveEnergyLevel from "../assets/icons/energy_program_saving.svg?react";
import BoostEnergyLevel from "../assets/icons/electric_bolt.svg?react";

function Activity() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-secondary m-0 ml-1 text-sm font-semibold">
          Activity level?
        </h3>
        <div className="flex flex-col gap-3">
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <SaveEnergyLevel className="bg-outline/30 fill-brown-text/70 h-8 w-8 shrink-0 rounded-full p-0.5" />
              <p className="font-medium">Low, couch potato</p>
            </div>
            <input
              className="border-secondary h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="activity"
              type="radio"
            />
          </label>
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <ModerateLevel className="bg-outline/30 fill-brown-text/70 h-8 w-8 shrink-0 rounded-full p-0.5" />
              <p className="font-medium">Moderate</p>
            </div>
            <input
              className="border-secondary h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="activity"
              type="radio"
            />
          </label>
          <label className="bg-radio-container border-outline/10 hover:bg-lightyellow flex cursor-pointer items-center justify-between rounded-xl border p-4 hover:shadow-md">
            <div className="text-brown-text flex items-center gap-3">
              <BoostEnergyLevel className="bg-outline/30 fill-brown-text/70 h-8 w-8 shrink-0 rounded-full p-0.5" />
              <p className="font-medium">High, always running</p>
            </div>
            <input
              className="border-secondary h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 checked:border-6"
              name="activity"
              type="radio"
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-secondary m-0 ml-1 text-sm font-semibold">
          Favourite activities?
        </h3>
        <div className="grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
          <label htmlFor="fetch" className="border-outline/30 bg-radio-container has-checked:bg-lightyellow has-checked:border-secondary cursor-pointer rounded-full border-2 px-2 py-2 transition-all hover:shadow-md">
            <input id="fetch"
            className="hidden" type="checkbox" />
            <span className="text-sm font-medium">Fetch</span>
          </label>
          <label htmlFor="tugofwar" className="border-outline/30 bg-radio-container has-checked:bg-lightyellow has-checked:border-secondary cursor-pointer rounded-full border-2 px-4 py-2 transition-all hover:shadow-md">
            <input id="tugofwar" className="hidden" type="checkbox" />
            <span className="text-sm font-medium">Tug of war</span>
          </label>
          <label htmlFor="training" className="border-outline/30 bg-radio-container has-checked:bg-lightyellow has-checked:border-secondary cursor-pointer rounded-full border-2 px-4 py-2 transition-all hover:shadow-md">
            <input id="training" className="hidden" type="checkbox" />
            <span className="text-sm font-medium">Agility/training</span>
          </label>
          <label htmlFor="running" className="border-outline/30 bg-radio-container has-checked:bg-lightyellow has-checked:border-secondary cursor-pointer rounded-full border-2 px-4 py-2 transition-all hover:shadow-md">
            <input id="running" className="hidden" type="checkbox" />
            <span className="text-sm font-medium">Free running</span>
          </label>
          <label htmlFor="swimming" className="border-outline/30 bg-radio-container has-checked:bg-lightyellow has-checked:border-secondary cursor-pointer rounded-full border-2 px-4 py-2 transition-all hover:shadow-md">
            <input id="swimming" className="hidden" type="checkbox" />
            <span className="text-sm font-medium">Swimming</span>
          </label>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Activity;

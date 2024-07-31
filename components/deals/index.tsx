import { volkhov } from "@/lib/fonts";
import Slider from "./Slider";

export default function Deals() {
  return (
    <section className="max-w-screen relative overflow-x-hidden py-60">
      <div className="container text-subtle">
        <div className="max-w-md space-y-8">
          <h3 className={`${volkhov.className} text-5xl`}>
            Deals of the Month
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin{" "}
          </p>

          <button className="deals-buy-now rounded-[10px] bg-fg px-16 py-3 text-background">
            Buy Now
          </button>

          <div>
            <h5 className="mb-4 text-3xl font-medium">
              Hurry, Before It’s Too Late!
            </h5>

            <div className="flex gap-4">
              <div className="space-y-2 text-center">
                <div className="deal-timer-shadow rounded-[10px] bg-background p-3 text-3xl">
                  02
                </div>

                <p className="text-xl">Days</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="deal-timer-shadow rounded-[10px] bg-background p-3 text-3xl">
                  06
                </div>

                <p className="text-xl">Hrs</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="deal-timer-shadow rounded-[10px] bg-background p-3 text-3xl">
                  05
                </div>

                <p className="text-xl">Mins</p>
              </div>
              <div className="space-y-2 text-center">
                <div className="deal-timer-shadow rounded-[10px] bg-background p-3 text-3xl">
                  30
                </div>

                <p className="text-xl">Secs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider />{" "}
    </section>
  );
}

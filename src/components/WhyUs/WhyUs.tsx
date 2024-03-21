import { MagnifyingGlassCircleIcon, ClockIcon,  ArrowUpIcon} from "@heroicons/react/16/solid"

type Props = {}

const WhyUs = (props: Props) => {
  return (
    <section
      id="whyus"
      className="w-fill py-32"
    >
      <div className="flex justify-center">
        <div className="w-5/6">
          <div className="flex justify-between text-center gap-20">
          {/* Easy booking */}
          <div className="flex flex-col justify-content items-center">
            <ClockIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>

          {/* Safe and Secure */}
          <div className="flex flex-col justify-content items-center">
            <MagnifyingGlassCircleIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>

          {/* Better KDA in no time */}
          <div className="flex flex-col justify-content items-center">
            <ArrowUpIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WhyUs
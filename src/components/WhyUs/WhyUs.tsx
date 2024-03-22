import { MagnifyingGlassCircleIcon, ClockIcon,  ArrowUpIcon} from "@heroicons/react/16/solid"

const WhyUs = () => {
  return (
    <section
      id="whyus"
      className="w-fill py-32"
    >
      <div className="md:flex justify-center">
        <div className="md:w-5/6">
          <div className="md:flex justify-between text-center md:gap-20 w-full">
          {/* Easy booking */}
          <div className="flex flex-col justify-content items-center">
            <ClockIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="md:text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>

          {/* Safe and Secure */}
          <div className="flex flex-col justify-content items-center">
            <MagnifyingGlassCircleIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="md:text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>

          {/* Better KDA in no time */}
          <div className="flex flex-col justify-content items-center">
            <ArrowUpIcon className="h-20 w-20 text-white"/>
            <h1 className="font-bold text-red-500 text-3xl pt-2 pb-3">EASY BOOKING</h1>
            <p className="md:text-lg">Sessions are quickly and securely booked through our easy-to-use coaching portal. </p>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WhyUs
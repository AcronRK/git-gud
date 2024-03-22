import Logo from "@/assets/logo.png"
import { useForm } from 'react-hook-form'

const ContactUs = () => {
  const inputStyles = `mt-5 w-full rounded-lg bg-slate-700 px-5 py-3 placeholder-white`
  const {
    register,
    trigger,
    formState: { errors },
  }  = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if(!isValid){
      e.preventDefault()
    }
  }

  return (
    <section 
      id="contactus"
      className='w-full py-32'
    >
      <div className='md:flex justify-center w-full'>
        <div className='md:flex gap-36 md:w-5/6'>
          {/* left side - about */}
          <div className='py-5'>
            <div className='flex flex-col my-5 gap-10 text-center items-center'>
              {/* icon */}
              <img src={Logo} alt="logo" className='w-36'/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dicta, laborum eligendi illum sint veniam eveniet, voluptatum ad, unde nisi fugit harum accusamus? Inventore beatae expedita minus sapiente impedit aspernatur!</p>
            </div>
          </div>
          {/* right side - text and form */}
          <div className='flex flex-col'>
              {/* Join now text */}
              <div className='md:py-5 text-center'>
                <span className='fond-bold text-2xl'>Join Now To Git Guder!</span>
              </div>
              {/* form  */}
              <div className="mt-10 justify-between gap-8 md:flex">
                <form 
                  className="text-center items-center"
                  method="POST"
                  target="_blank"
                  onSubmit={onSubmit}
                  action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                >
                  <input 
                    className={inputStyles}
                    type="text" 
                    placeholder='NAME'
                    {...register ("name", {
                      required: true,
                      maxLength: 100,
                    })}
                  />
                  {errors.name && (
                    <p className='mt-1 text-white'>
                      {errors.name.type === "required" && "This field is required"}
                      {errors.name.type === "maxLength" && "Max Length is required"}
                    </p>
                  )}

                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className='mt-1 text-white'>
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <textarea
                  className={inputStyles}
                  placeholder="MESSAGE"
                  rows={4}
                  cols={50}
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-white">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-red-500 px-20 py-3 transition duration-500 hover:bg-red-50"
                >
                  SUBMIT
                </button>

                </form>
              </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default ContactUs
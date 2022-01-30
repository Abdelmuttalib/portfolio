import { useState } from "react"

import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useForm, SubmitHandler } from "react-hook-form"

import Gmail from "../../../public/svgs/GmailIcon.svg"
import Phone from "../../../public/svgs/PhoneIcon.svg"
import Skype from "../../../public/svgs/SkypeIcon.svg"
import { Inputs } from "../../types/types"

const ContactMe = () => {
  const [error, setError] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.to_name = "Abdelmuttalib"
    data.reply_to = data.from_email
    emailjs
      .send(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        data,
        process.env.EMAILSER_ID
      )
      .then(
        function (response) {
          if (response.text !== "OK") {
            setError(true)
          } else {
            console.log(response.text)
            //React Hook Form function to reset the form states and values
            reset()
          }
        },
        function (error) {
          setError(true)
          console.log(error.text)
        }
      )
  }

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, duration: 1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-8 min-h-[300px] mt-52"
    >
      <motion.h3
        variants={item}
        className="mb-16 text-center H1 text-primary-900"
      >
        Contact Me
      </motion.h3>
      <motion.div
        variants={item}
        className="flex flex-col lg:flex-row lg:gap-4"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center flex-grow"
        >
          <label
            htmlFor="name"
            className="block mb-1 lg:text-xl dark:text-primary-50"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="name"
            inputMode="text"
            {...register("from_name")}
            className="h-10 pl-4 rounded-lg Small Input lg:w-[90%] lg:h-32"
          />

          <label
            htmlFor="email"
            className="block mt-4 mb-1 lg:text-xl dark:text-primary-50"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="email"
            inputMode="email"
            {...register("from_email", { required: true })}
            className={`Small Input lg:w-[90%] h-10 lg:h-32 pl-4 ${
              errors.from_email &&
              "ring-2 ring-offset-2 ring-red-600 dark:ring-red-400 dark:ring-offset-primary"
            }`}
          />
          {errors.from_email && (
            <span className="mt-2 text-xs text-red-600 lg:text-md dark:text-red-400 lg:mt-3">
              * The email is required
            </span>
          )}
          <label
            htmlFor="subject"
            className="block mt-4 mb-1 lg:text-xl dark:text-primary-50"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="subject"
            inputMode="text"
            {...register("subject", { required: false })}
            className="h-10 pl-4 Small Input lg:w-[90%] lg:h-32 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-primary"
          />

          <label
            htmlFor="message"
            className="block mt-4 mb-1 lg:text-xl dark:text-primary-50"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="message..."
            inputMode="text"
            {...register("message", { required: true })}
            className={`Small Input min-h-32 h-32 lg:h-full tracking-wide px-4 pt-3 resize-none ${
              errors.message &&
              "ring-2 ring-offset-2 ring-red-600 dark:ring-red-400 dark:ring-offset-primary"
            }`}
          />
          {errors.message && (
            <span className="mt-2 text-xs text-red-600 dark:text-red-400 lg:text-md lg:mt-3">
              * kindly indicate your message here
            </span>
          )}
          <button
            onClick={() => console.log("Clicked")}
            type="submit"
            className="px-12 py-3 mt-10 Button lg:px-14 lg:py-4"
          >
            Send
          </button>
          {error && (
            <p className="text-red-600 dark:text-red-400">
              *Something went wrong, please try again!
            </p>
          )}
        </form>

        {/* Direct Email, small screen */}
        <div className="h-auto mt-16 font-semibold text-primary-400 lg:hidden">
          <h5 className="mb-10 text-2xl">Or..</h5>
          <span className="transform translate translate-x-0 hover:bg-primary-link ease-in-out duration-200 hover:ml-1 hover:translate-x-5 ">
            <a
              rel="noreferrer"
              target="_blank"
              className="px-4 py-3 rounded-lg transform translate ease-in-out duration-400 bg-primary-link text-primary-50 dark:text-primary-700 dark:bg-primary-lightLink"
              href="mailto:Abdelmuttalib1@gmail.com"
            >
              Direct Email
            </a>
          </span>
        </div>

        <div className="flex flex-col mt-24 font-semibold text-primary-400 lg:mt-0 gap-4 lg:flex-grow">
          {/* Direct Email, large screen */}
          <div className="hidden mt-16 min-h-10 text-primary-400 lg:flex gap-6 mb-14">
            <h5 className="mt-2 mb-10 text-2xl">Or..</h5>

            <a
              rel="noreferrer"
              target="_blank"
              className="px-4 py-3 text-lg ButtonLink h-fit bg-primary-link text-primary-50 dark:bg-primary-lightLink dark:text-primary-900 translate translate-x-0 hover:translate-x-1"
              href="mailto:Abdelmuttalib1@gmail.com"
            >
              Direct Email
            </a>
          </div>
          <span className="flex items-center gap-2 text-md dark:text-primary-200">
            <Gmail className="w-5 h-5 md:w-6 md:h-6" />
            Abdelmuttalib1@gmail.com
          </span>
          <span className="flex items-center gap-2 text-md dark:text-primary-200">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
            +639455102063
          </span>

          <span className="flex items-center gap-2 text-md dark:text-primary-200">
            <Skype className="w-5 h-5 md:w-6 md:h-6" />
            live:tloob50
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe

// Looks like you've put in a work address

import { useWizard } from 'react-formik-step-wizard'

function ComponentEmailCheck() {
  const { goToStep } = useWizard()

  return (
    <div className='prose max-w-none'>

    <div className="relative mx-auto max-w-5xl mt-20">
        <div className="rounded-xl p-1"
            style={{backgroundImage: 'linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)'}}>
            <div className="rounded-lg bg-black/80 backdrop-blur">
                <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
                    <div className="lg:max-w-xl">
                        <h2
                            className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Enhancing Productivity with Artificial Intelligence 
                            </h2>
                        <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                            Natural Language Processing (NLP): The SmartAI Assistant understands and interprets natural
                            language commands, allowing users to communicate with it effortlessly.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 ">
                        <button className="bg-violet-600 text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">Get Started</button>
                        <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


      <h2>Warning</h2>
      <p>Seems like this may be your business email. Will you always have access to this email
        or would you like to change to a personal email?</p>
      <div className='flex gap-4'>
        <button className='btn' type='button' onClick={() => goToStep(0)}>Change Email</button>
        <button className='btn' type='submit'>Continue</button>
      </div>
    </div>
  )
}

export default ComponentEmailCheck

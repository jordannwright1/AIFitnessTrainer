import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon, Link } from 'lucide-react'
import TerminalOverlay from '@/components/TerminalOverlay'
import UserPrograms from '@/components/UserPrograms'

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen text-foreground overflow-hidden'>
      <section className='relative z-10 py-24 flex-grow'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative'>
          {/* CORNER DECORATION */}
          <div className='absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2' />
      
          {/* LEFT SIDE CONTENT */}
          <div className='lg:col-span-7 space-y-8 relative'>
            <h1 className='text-5xl md:text-6xl font-bold tracking-tight'>
              <div>
                <span className='text-foreground'>Transform</span>
              </div>
              <div>
                <span className='text-primary'>Your Body</span>
              </div>
              <div className='pt-2'>
                <span className='text-foreground'>With Advanced</span>
              </div>
              <div className='pt-2'>
                <span className='text-foreground'>AI</span>
                <span className='text-primary'> Technology</span>
              </div>
            </h1>

            {/* SEPARATOR LINE */}
            <div className='h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50'></div>

            <p className='text-xl text-muted-foreground w-xl'>Talk with our AI trainer and get personalized meal recommendations and workout routines designed just for you</p>

            {/* STATS */}
            <div className='flex items-center gap-10 py-6 font-mono'>
              <div className='flex flex-col'>
                <div className='text-2xl text-primary'>500+</div>
                <div className='text-xs uppercase tracking-wider'>Programs</div>
              </div>
              <div className='h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent'></div>
              <div className='flex flex-col'>
                <div className='text-2xl text-primary'>3 min</div>
                <div className='text-xs uppercase tracking-wider'>Generation</div>
              </div>
              <div className='h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent'></div>
              <div className='flex flex-col'>
                <div className='text-2xl text-primary'>100%</div>
                <div className='text-xs uppercase tracking-wider'>Personalized</div>
              </div>
            </div>
            {/* BUTTON */}
            <div className='pt-6'>
              <div className='flex flex-col sm:flex-row gap-4 pt-6'>
                <Button
                size='lg'
                asChild
                className='overflow-hidden bg-primary text-primary-foreground px-8 py-7 text-sm font-medium flex justify-center items-center'
                >
                  <a href={'/generate-program'} className='flex items-center font-mono'>
                  Build Your Program
                  </a>
                </Button>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE CONTENT */}
          <div className='lg:col-span-5 relative'>
            {/* CORNER PIECES */}
            <div className='absolute -inset-4 pointer-events-none'>
              <div className='absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border'></div>
              <div className='absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border'></div>
              <div className='absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border'></div>
              <div className='absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border'></div>
            </div>
            

            {/* IMAGE CONTAINER */}
            <div className='relative aspect-square max-w-lg mx-auto'>
              <div className='relative overflow-hidden rounded-lg bg-cyber-black'>
                <img src="hero-ai2.png" alt="AI Trainer Bot" className='size-full object-cover object-center'/>

                {/* SCAN LINE */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

        <UserPrograms />
    </div>
  )
}

export default HomePage

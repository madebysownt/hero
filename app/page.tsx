import Image from 'next/image';

import type { Metadata } from 'next';
import { upcoming_events } from '@/constants/mock';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home | Hero',
  description: 'Discover Study Jams around the world.',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
          Events
        </h1>
      </div>
      <ul className="mt-10">
        {upcoming_events.map((event) => (
          <li key={event.id}>
            <hr className="w-full border-t border-zinc-950/10 dark:border-white/10" />
            <div className="flex items-center justify-between gap-8">
              <Link href={event.url} rel="noopener noreferrer" target="_blank">
                <div className="flex gap-6 py-6">
                  <div className="w-32 shrink-0">
                    <Image
                      src={event.image}
                      alt={event.name}
                      className="aspect-[3/2] object-contain rounded-lg shadow bg-white"
                      sizes="100vw"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold text-justify">
                      {event.name}
                    </div>
                    <div className="text-xs/6 text-zinc-500 text-justify">
                      {event.notes}
                    </div>
                    <div className="text-xs/6 text-zinc-600 text-justify">
                      {event.description}
                    </div>
                  </div>
                </div>
              </Link>
              <div className="max-sm:hidden flex items-center gap-4">
                {event.status ? (
                  <Link
                    href="/tools/chaiyo"
                    className="relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:text-[--btn-icon] [&>[data-slot=icon]]:sm:my-1 [&>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] cursor-default">
                    Verify
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-rose-400/15 text-rose-700 group-data-[hover]:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-[hover]:bg-rose-400/20">
                    Expired
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

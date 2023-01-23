import { clsx } from 'clsx';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { millisToMinutesAndSeconds } from '@lib/helper';
import type { Transcript } from '@lib/transcript';

export function TranscriptCard({
  end,
  text,
  start,
  words,
  speaker
}: Transcript): JSX.Element {
  return (
    <article className='grid grid-cols-[auto,1fr] gap-4'>
      <i>
        <UserCircleIcon
          className={clsx('h-10 w-10', {
            'text-pink-400': speaker === 'A',
            'text-green-400': speaker === 'B'
          })}
        />
      </i>
      <div className='grid gap-2'>
        <div className='flex items-center gap-4 text-gray-700'>
          <p className='font-medium'>Speaker {speaker}</p>
          <span>·</span>
          <p>
            {millisToMinutesAndSeconds(end)} -{' '}
            {millisToMinutesAndSeconds(start)}
          </p>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
}
